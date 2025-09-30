import { useSelector } from "react-redux";
import { uiSlector } from ".";

export const useLoading = () => {
    const loading = useSelector(uiSlector.getLoading);
    return loading;
};
