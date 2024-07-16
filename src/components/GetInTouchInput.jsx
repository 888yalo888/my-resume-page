import React from 'react';
import '../styles/GetInTouchInput.css';

function GetInTouchInput({ name, placeholder, type, required, error, icon }) {
    return (
        <div className="form-input-container">
            <div className="form-icon-container error message">
                <input
                    className="email"
                    placeholder={placeholder}
                    type={type}
                    id="email"
                    name={name}
                    required={required}
                />
                {icon}
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default GetInTouchInput;
