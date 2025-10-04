import Loading from "@/components/Loading";
import { productActions, useProductDetail } from "@/store/product";
import { useLoading } from "@/store/ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

import style from './ProductDetail.module.scss'

function ProductDetail() {
    const navigation = useNavigate()
    const {slug} = useParams();
    const dispatch = useDispatch();
    const loading = useLoading();
    const item = useProductDetail();
    useEffect(() => {
        dispatch(productActions.getDetail(slug))
    }, [dispatch, slug])
    if(loading) {
        return <Loading/>
    }
    return (
        <>
            <button className={style.btn} onClick={() => navigation(-1)} >back</button>
            <h1 className={style.title}>Product detail</h1>
            <div className={style.container}>
                <div className={style.wrap}>
                    <h2>{item?.brand}</h2>
                    <img src={item?.thumbnail} alt="" />
                    <p>{item?.description}</p>
                    <p>{item?.price} $</p>
                <button>Buy</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;