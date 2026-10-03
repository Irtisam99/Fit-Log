'use client';
import { FitLogContext } from '@/context/FitLogContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WorkoutActions = ({ workout }: { workout: libraryType }) => {
    const context = useContext(FitLogContext)

    const handlerPlan = () => {
        if (!context) return;

        const alreadyAdded = context.todayPlan.some((obj) => {
            return obj.id === workout.id
        })

        if (alreadyAdded === false) {
            toast.success("Added to Today's Plan!")
            context.setTodayPlan([...context.todayPlan, workout]);
        } else {
            toast.info("Workout is already in today's plan!");
        }

    }
    const handlerSaved = () => {
        if (!context) return;

        const alreadySaved = context.savedWorkouts.some((obj) => {
            return obj.id === workout.id;
        });

        if (!alreadySaved) {
            toast.success("Added to Today's Plan!")
            context.setSavedWorkouts([...context.savedWorkouts, workout]);

        } else {
            toast.info("Workout is already in today's plan!");
        }

    }

    return (
        <div className="mt-7 flex flex-wrap gap-4">

            <button
                onClick={handlerPlan}
                type="button"
                className="flex h-[30px] items-center gap-2 rounded-[7px] bg-[#CCFF00] px-4 py-5 text-[14px] font-bold text-black transition hover:bg-[#b8ed18ed] cursor-pointer"
            >
                <span className="text-[12px]">▣</span>
                Add to today's plan
            </button>

            <button
                onClick={handlerSaved}
                type="button"
                className="flex h-[30px] items-center gap-2 rounded-[7px] border-2 border-[#343842] bg-transparent px-4 py-5 text-[14px] font-medium text-[#d0d1d4] transition hover:bg-[#171a20] cursor-pointer"
            >
                <span className="text-[11px]">♡</span>
                Save for later
            </button>

        </div>
    );
};

export default WorkoutActions;