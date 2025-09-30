import { productAction, useProducts } from "@/store/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import style from './ProductList.module.scss'
import { NavLink } from "react-router";
import { useLoading } from "@/store/ui";
import Loading from "@/components/Loading";

function ProductList() {
    const dispatch = useDispatch();
    const items = useProducts();
    const loading = useLoading();
    useEffect(() => {
            dispatch(productAction.getlist())
    }, [dispatch])
    if(loading) {
        return <Loading/>
    }
    return  (
        items && <div className={style.container}>
            <h1>Product List</h1>
            <ul className={style.item}>
                {items.map((item) => (
                <div key={item.id} className={style.box}>
                    <img src={item.thumbnail} alt="" />
                    <li >{item.title}</li>
                    <NavLink to={`/products/${item.slug}`} className={style.btn}>Click</NavLink>
                </div>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;