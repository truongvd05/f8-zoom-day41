export const selectProduct = (state) => state.product;
export const selectProductList = (state) => state.product.list;
export const getProductDetail = (state) => state.product.detail;

export const selector = { selectProduct, selectProductList, getProductDetail };
