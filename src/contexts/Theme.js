import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
    if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem("theme");
        if (!theme) {
            window.localStorage.setItem("theme", "dark");
            return "dark";
        } else {
            return theme;
        }
    }
    return "dark";
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme);

    function toggleTheme() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    useEffect(() => {
        (() => {
            document.documentElement.setAttribute('data-theme', theme);
            if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
        })();
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
