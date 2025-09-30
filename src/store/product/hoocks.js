import { useSelector } from "react-redux";
import { ProductSelector } from ".";

export const useProducts = () => {
    const items = useSelector(ProductSelector.selectProductList);
    return items;
};

export const useProductDetail = () => {
    const items = useSelector(ProductSelector.getProductDetail);
    return items;
};

export const hooks = { useProducts, useProductDetail };
