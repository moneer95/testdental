'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for your state and context
interface AppState {

}

interface AppContextType {
    cart: AppState;
    setCart: React.Dispatch<React.SetStateAction<AppState>>;
    slug: AppState;
    setSlug: AppState;
    chooseFilter: any;
    setChooseFilter: any;
    selectedPackage: any;
    setSelectedPackage: any;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize state
    const [cart, setCart] = useState<AppState>({ items: [] });
    const [slug, setSlug] = useState<AppState>(false);
    const [chooseFilter, setChooseFilter] = useState<any>('')
    const [selectedPackage, setSelectedPackage] = useState<string>('ORE Courses');
    return (
        <AppContext.Provider value={{ cart, setCart, slug, setSlug, chooseFilter, setChooseFilter, selectedPackage, setSelectedPackage }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
