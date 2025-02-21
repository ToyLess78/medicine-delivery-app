import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToShop = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, [navigate]);

    return null;
};

export default RedirectToShop;
