import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useAuthContext } from "../contexts/AuthContext";
import useRequest from "../hooks/useRequest";
import { useCart } from "../contexts/CartContext";

const LEV_TO_EUR = 1.95583;

export default function CartModal({ open, setOpen }) {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const { request } = useRequest();

  const subtotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const discounts = cart.reduce((sum, p) => {
    const discountAmount = (p.discount || 0) / 100 * p.price * p.quantity;
    return sum + discountAmount;
  }, 0);

  const totalAfterDiscounts = subtotal - discounts;
  const deliveryFee = totalAfterDiscounts < 20 ? 4.99 : 0;
  const finalTotal = totalAfterDiscounts + deliveryFee;

  const toEuro = (lev) => (lev / LEV_TO_EUR).toFixed(2);

  const removeProduct = (id) => {
    removeFromCart(id);
  };

  const updateQuantityHandler = (id, delta) => {
    updateQuantity(id, delta)
  };

  const { user } = useAuthContext();

  const createOrder = async () => {
    const order = {
      _id: "ord-" + Date.now(),
      items: cart.map(p => ({
        name: p.name,
        quantity: p.quantity,
        price: p.price
      })),
      subtotal,
      discounts,
      total: finalTotal,
      date: new Date().toISOString().split("T")[0],
      clientId: user?._id || "guest",
      status: "PENDING"
    };

    console.log("Order object:", order);

    await request("/data/orders", "POST", order, { accessToken: user?.accessToken });
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-lg bg-white shadow-xl p-6">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-lg font-medium text-gray-900">Моята кошница</DialogTitle>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
              <XMarkIcon className="size-6" />
            </button>
          </div>

          {/* Продукти */}
          <ul className="mt-6 divide-y divide-gray-200">
            {cart.map((product) => (
              <li key={product._id} className="flex py-4">
                <img src={product.image} alt={product.imageAlt} className="h-20 w-20 rounded-md object-cover" />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>

                  {/* Quantity controls */}
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => updateQuantityHandler(product._id, -1)}
                      className="px-2 py-1 rounded-l-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      –
                    </button>
                    <span className="w-12 text-center border-t border-b border-gray-300">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantityHandler(product._id, +1)}
                      className="px-2 py-1 rounded-r-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {(product.price * product.quantity).toFixed(2)} лв / {toEuro(product.price * product.quantity)} €
                  </p>
                  {product.discount > 0 && (
                    <p className="text-xs text-green-600">-{product.discount}%</p>
                  )}
                  <button
                    onClick={() => removeProduct(product._id)}
                    className="mt-2 text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    Премахни
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Общо */}
          <div className="mt-6 space-y-2 text-base font-medium text-gray-900">
            <div className="flex justify-between">
              <p>Субтотал</p>
              <p>{subtotal.toFixed(2)} лв / {toEuro(subtotal)} €</p>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <p>Отстъпки</p>
              <p>-{discounts.toFixed(2)} лв / -{toEuro(discounts)} €</p>
            </div>
            {deliveryFee > 0 && (
              <div className="flex justify-between text-gray-600 text-sm">
                <p>Доставка</p>
                <p>{deliveryFee.toFixed(2)} лв / {toEuro(deliveryFee)} €</p>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold">
              <p>Крайна сума</p>
              <p>{finalTotal.toFixed(2)} лв / {toEuro(finalTotal)} €</p>
            </div>
          </div>

          {/* Действия */}
          <div className="mt-6">
            <button className="w-full rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500">
              Поръчай
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            <button
              onClick={() => {
                createOrder()
                setOpen(false)
              }}
              className="font-medium text-red-600 hover:text-red-500"
            >
              Продължи пазаруването →
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
