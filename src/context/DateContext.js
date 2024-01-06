"use client"
// context/DateContext.js
import React from 'react';

export const DateContext = React.createContext();

export function DateProvider({ children }) {
    const [date, setDate] = React.useState(null);

    return (
        <DateContext.Provider value={{ date, setDate }}>
            {children}
        </DateContext.Provider>
    );

}

export default DateContext;
