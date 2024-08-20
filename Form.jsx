import React, { useState, useEffect } from 'react';

function Form() {
    const initialData = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(initialData);
    const [flag, setFlag] = useState(false); 

    useEffect(() => {   //useeffect
        if (flag) {
            console.log("Registered");
        }
    }, [flag]); 

    const handleData = (event) => {
        setInputData({ ...inputData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("Please fill all fields");
            return;
        }
        setFlag(true); 
    };

    return (
        <>
            <pre>
                {flag && (
                    <h2 className="ui-define">
                        Hello {inputData.name}, You Registered Successfully
                    </h2>
                )}
            </pre>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h1>Registration Form</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={inputData.name}
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={inputData.email}
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={inputData.password}
                            onChange={handleData}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Form;
