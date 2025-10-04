import { useSelector } from "react-redux";
import { productSelectors } from ".";

export const useProducts = () => {
    const items = useSelector(productSelectors.selectProductList);
    return items;
};

export const useProductDetail = () => {
    const item = useSelector(productSelectors.getProductDetail);
    return item;
};

export const hooks = { useProducts, useProductDetail };
