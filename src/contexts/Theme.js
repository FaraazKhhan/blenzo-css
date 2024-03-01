import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", "dark");
        return "dark";
    } else {
        return theme;
    }
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
            localStorage.setItem("theme", theme);
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
