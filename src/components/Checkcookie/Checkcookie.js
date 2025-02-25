import { useEffect } from "react";

const CheckCookie = () => {
    useEffect(() => {
        fetch("http://localhost:5000/check-cookie", {
            method: "GET",
            credentials: "include"  // Ensures cookies are sent
        })
        .then(response => response.json())
        .then(data => console.log("Received Cookies:", data))
        .catch(error => console.error("Error:", error));
    }, []);

    return <h2>Check Console for Cookie Data</h2>;
};

export default CheckCookie;
