import React, { useState } from "react";
const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const handleLogin = () => {
        localStorage.setItem("user", "token");
        setIsAuth(prevState => !prevState);
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(prevState => !prevState);
    };
    return (
        <div>
            {<Component isAuth={isAuth} onLogIn={handleLogin} onLogOut={handleLogout} {...props} />}
        </div>
    );
};

export default withFunctions;
