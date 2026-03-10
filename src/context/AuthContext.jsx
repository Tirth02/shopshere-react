import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser)
        {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    },[]);

    // login Function
    const login = async(formData) => {
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if(!response.ok)
        {
            throw new Error(data.message || "Login Failed");
        }

        localStorage.setItem("user",JSON.stringify(data));
        localStorage.setItem("token",data.token);

        setUser(data);
    }

    return(
        <AuthContext.Provider value={{user,login,loading}}>
            {children}
        </AuthContext.Provider>
    )
}