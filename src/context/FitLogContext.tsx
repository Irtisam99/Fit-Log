'use client';
import React, { useState } from 'react';
import { createContext } from 'react';
interface FitLogContextType {
    todayPlan:libraryType[],
    savedWorkouts:libraryType[],
    completedWorkouts:number[],
    setTodayPlan:React.Dispatch<React.SetStateAction<libraryType[]>>,
    setSavedWorkouts:React.Dispatch<React.SetStateAction<libraryType[]>>
    setCompletedWorkouts:React.Dispatch<React.SetStateAction<number[]>>
}
export const FitLogContext=createContext<FitLogContextType|null>(null)
const FitLogProvider = ({children}:{children:React.ReactNode}) => {
    const [todayPlan, setTodayPlan] = useState<libraryType[]>([])
    const [savedWorkouts,setSavedWorkouts] = useState<libraryType[]>([])
    const [completedWorkouts,setCompletedWorkouts]=useState<number[]>([])
    
    const sharedData={
        todayPlan,
        savedWorkouts,
        completedWorkouts,
        setTodayPlan,
        setSavedWorkouts,
        setCompletedWorkouts
    }
    return <FitLogContext.Provider value={sharedData}>
        {children}
    </FitLogContext.Provider>;
};

export default FitLogProvider;