import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: 'Маргарита',
    href: `/catalog/1`,
    imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
    imageAlt: "Маргарита",
    price: '8.50лв',
    description: 'Класическа пица с домати и моцарела',
    category: 'pizza',
    discount: 20
  },
  {
    id: 2,
    name: 'Пеперони',
    href: '#',
    imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
    imageAlt: "Пеперони",
    price: '9.90лв',
    description: 'Пица с пикантно пеперони',
    category: 'pizza',
    discount: 0
  },
  {
    id: 3,
    name: 'Паста Болонезе',
    href: '#',
    imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
    imageAlt: "Паста Болонезе",
    price: '7.50лв',
    description: 'Паста с месен сос',
    category: 'pasta',
    discount: 10
  },
  {
    id: 4,
    name: 'Кола',
    href: '#',
    imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
    imageAlt: "Кола",
    price: '2.50лв',
    description: 'Напитка 500ml',
    category: 'drinks',
    discount: 0
  },
]

export default function HotOffers() {
  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-center text-3xl font-bold text-red-600 sm:text-4xl">
        Нашите горещи оферти
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Специални предложения за дома и офиса
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/catalog"
          className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-red-500"
        >
          Виж всички продукти
        </a>
      </div>
    </section>
  );
}
