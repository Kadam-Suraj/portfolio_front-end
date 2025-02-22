"use client"

import React, { createContext, useContext, useState } from "react";

interface CategoryContextType {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

const BlogCategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [category, setCategory] = useState<string>("All")
    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

// custom hook to consume category

const useCategory = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error("useCategory must be used within a BlogCategoryProvider")
    }
    return context;
}

export { BlogCategoryProvider, useCategory }