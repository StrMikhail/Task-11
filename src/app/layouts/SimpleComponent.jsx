import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return (
        <div>
            {isAuth ? (
                <button
                    onClick={onLogIn}
                    className="btn btn-primary"
                >
                    Выйти из системы
                </button>
            ) : (
                <button
                    className="btn btn-secondary"
                    onClick={onLogOut}
                    >
                    Войти в систему
                </button>
            )}
        </div>
    );
};
SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
