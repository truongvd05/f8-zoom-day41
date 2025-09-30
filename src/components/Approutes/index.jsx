import NotFound from "@/pages/NotFound/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";
import { HashRouter, Route, Router, Routes } from "react-router";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/products/:slug" element={<ProductDetail/>}/>
                <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;