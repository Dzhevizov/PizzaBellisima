import { createContext, useContext, useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();

    const fetchProducts = async () => {
        setLoading(true);
        const result = await request("/data/products");
        setProducts(result);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const refreshProducts = () => fetchProducts();

    return (
    <ProductsContext.Provider value={{ products, loading, refreshProducts }}>
        {children}
    </ProductsContext.Provider>
    );
}

export function useProducts() {
  return useContext(ProductsContext);
}
