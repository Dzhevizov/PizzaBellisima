import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "./Navbar";

// const products = [
//   {
//     id: 1,
//     name: 'Маргарита',
//     href: `/catalog/1`,
//     imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
//     imageAlt: "Маргарита",
//     price: '8.50лв',
//     description: 'Класическа пица с домати и моцарела',
//     category: 'pizza',
//     discount: 20
//   },
//   {
//     id: 2,
//     name: 'Пеперони',
//     href: '#',
//     imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
//     imageAlt: "Пеперони",
//     price: '9.90лв',
//     description: 'Пица с пикантно пеперони',
//     category: 'pizza',
//     discount: 0
//   },
//   {
//     id: 3,
//     name: 'Паста Болонезе',
//     href: '#',
//     imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
//     imageAlt: "Паста Болонезе",
//     price: '7.50лв',
//     description: 'Паста с месен сос',
//     category: 'pasta',
//     discount: 10
//   },
//   {
//     id: 4,
//     name: 'Кола',
//     href: '#',
//     imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Remora-Camilla-Fonts-8452894-4-312x208.jpg',
//     imageAlt: "Кола",
//     price: '2.50лв',
//     description: 'Напитка 500ml',
//     category: 'drinks',
//     discount: 0
//   },
// ]

export default function Catalog() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/data/products')
            .then(res => res.json())
            .then(result => setProducts(result))
    }, []);

  return (
    <>
        <Navbar />

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Италиански пици</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
                </div>
            </div>
        </div>
    </>
    
  )
}
