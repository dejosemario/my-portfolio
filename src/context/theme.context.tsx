"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: ()=>void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps){
    const [theme, setTheme] = useState<Theme>("light");   
    
    // const toggleTheme = () => {
    //     if (theme === "light") {
    //       setTheme("dark");
    //       window.localStorage.setItem("theme", "dark");
    //       document.documentElement.classList.add("dark");
    //     } else {
    //       setTheme("light");
    //       window.localStorage.setItem("theme", "light");
    //       document.documentElement.classList.remove("dark");
    //     }
    //   };
    
    
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            
            // Update local storage and document class based on new theme
            window.localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            document.documentElement.classList.toggle("light", newTheme === "light");
            
            return newTheme; // Update the theme state
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );


}