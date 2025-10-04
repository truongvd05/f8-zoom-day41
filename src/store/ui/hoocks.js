import { useSelector } from "react-redux";
import { uiSelector } from ".";

export const useLoading = () => {
    const loading = useSelector(uiSelector.getLoading);
    return loading;
};
