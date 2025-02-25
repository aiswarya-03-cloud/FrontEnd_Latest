import { useState } from "react";

const CheckCookieButton = () => {
    const [cookieData, setCookieData] = useState(null);

    const checkCookie = () => {
        fetch("http://localhost:5000/check-cookie", {
            method: "GET",
            credentials: "include"  // Ensures cookies are sent
        })
        .then(response => response.json())
        .then(data => {
            console.log("Received Cookies:", data);
            setCookieData(data);
        })
        .catch(error => console.error("Error:", error));
    };

    return (
        <div>
            <button onClick={checkCookie}>Check Cookies</button>
            {cookieData && <pre>{JSON.stringify(cookieData, null, 2)}</pre>}
        </div>
    );
};

export default CheckCookieButton;
