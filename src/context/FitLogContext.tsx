'use client';
import React, { useState } from 'react';
import { createContext } from 'react';
interface FitLogContextType {
    todayPlan:libraryType[],
    savedWorkouts:libraryType[],
    setTodayPlan:React.Dispatch<React.SetStateAction<libraryType[]>>,
    setSavedWorkouts:React.Dispatch<React.SetStateAction<libraryType[]>>
}
export const FitLogContext=createContext<FitLogContextType|null>(null)
const FitLogProvider = ({children}:{children:React.ReactNode}) => {
    const [todayPlan, setTodayPlan] = useState<libraryType[]>([])
    const [savedWorkouts,setSavedWorkouts] = useState<libraryType[]>([])
    
    const sharedData={
        todayPlan,
        savedWorkouts,
        setTodayPlan,
        setSavedWorkouts
    }
    return <FitLogContext.Provider value={sharedData}>
        {children}
    </FitLogContext.Provider>;
};

export default FitLogProvider;