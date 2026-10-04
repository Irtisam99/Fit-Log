'use client'
import SavedPlanCard from "@/components/SavedPlanCard";
import TodayPlanCard from "@/components/TodayPlanCard";
import { FitLogContext } from "@/context/FitLogContext";
import { Divide } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlan = () => {
    const context = useContext(FitLogContext)
    const totalCaloriesBurned = context?.todayPlan.reduce((acc, dataPlan) => {
        acc = acc + dataPlan.caloriesBurned
        return acc
    }, 0) ?? 0

    const totalDuration = context?.todayPlan.reduce((acc, dataPlan) => {
        acc = acc + dataPlan.duration
        return acc
    }, 0) ?? 0

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today')

    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration')

    const sortedTodayPlan = [...(context?.todayPlan ?? [])];

    sortedTodayPlan.sort((a, b) => {
        if (sortBy === 'duration') {
            return b.duration - a.duration
        }
        if (sortBy === 'calories') {
            return b.caloriesBurned - a.caloriesBurned
        }
        if (sortBy === 'rating') {
            return b.rating - a.rating
        }
        return 0

    })
    const sortedSavedWorkouts = [...(context?.savedWorkouts ?? [])];
    
    sortedSavedWorkouts.sort((a, b) => {
        if (sortBy === 'duration') {
            return b.duration - a.duration
        }
        if (sortBy === 'calories') {
            return b.caloriesBurned - a.caloriesBurned
        }
        if (sortBy === 'rating') {
            return b.rating - a.rating
        }
        return 0

    })

    return (
        <main className=" text-white container mx-auto mt-[40px]">

            {/* Header */}
            <section>
                <h1 className="text-[30px] font-extrabold uppercase tracking-tight">
                    MY PLAN
                </h1>

                <p className="mt-2 text-base text-[#8A92A0] text-[14px]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </section>

            {/* Statistics */}
            <section className="mt-6 h-[122px] rounded-[20px] border border-[#232732] bg-[#13161D] px-[32px] py-[24px]">

                <div className="grid h-full grid-cols-3">

                    {/* Exercises */}
                    <div className="flex flex-col justify-center border-r border-[#232732]">
                        <p className="text-[12px] text-[#8A92A0]">
                            Exercises
                        </p>

                        <p className="mt-2 text-[36px] font-extrabold leading-none text-[#B9FF00]">
                            {context?.todayPlan.length ?? 0}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col justify-center border-r border-[#232732] pl-[32px]">
                        <p className="text-[12px] text-[#8A92A0]">
                            Minutes
                        </p>

                        <p className="mt-2 text-[36px] font-extrabold leading-none">
                            {totalDuration}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col justify-center pl-[32px]">
                        <p className="text-[12px] text-[#8A92A0]">
                            Calories
                        </p>

                        <p className="mt-2 text-[36px] font-extrabold leading-none">
                            {totalCaloriesBurned}
                        </p>
                    </div>

                </div>

            </section>

            {/* Tabs + Sort */}
            <section className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="flex w-fit rounded-[15px] h-[42px] border border-[#252A35] bg-[#11141A] p-[4px]">
                    <button
                        onClick={() => setActiveTab('today')}
                        className={`${activeTab === 'today'
                            ? "rounded-[11px] border border-[#303642] bg-[#20242D] w-[108px] h-[30px]  text-[14px] font-semibold text-white shadow-sm"
                            : "rounded-[11px] w-[103px] h-[28px] text-[14px] text-[#9298A7]"} 
                            `}
                    >
                        Today’s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`${activeTab === 'saved'
                            ? "rounded-[11px] border border-[#303642] bg-[#20242D] w-[108px] h-[30px]  text-[14px] font-semibold text-white shadow-sm"
                            : "rounded-[11px] w-[103px] h-[28px] text-[14px] text-[#9298A7]"} 
                            `}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort */}
                <div className="flex items-center gap-3 h-[34px]">
                    <span className="text-[14px] text-[#9298A7]">
                        Sort By
                    </span>

                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 bg-[#13161D] text-white hover:bg-[#1c212b] border border-[#232732] border-b-0 shadow-none text-[14px]"
                        >
                            {sortBy === 'duration' && 'Duration'}
                            {sortBy === 'calories' && 'Calories'}
                            {sortBy === 'rating' && 'Rating'}
                            {' '}⬇️️
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black">
                            <li>
                                <button onClick={() => setSortBy('duration')}>
                                    Duration
                                </button>

                            </li>
                            <li>
                                <button onClick={() => setSortBy('calories')}>
                                    Calories
                                </button>
                            </li>

                            <li>
                                <button onClick={() => setSortBy('rating')}>
                                    Rating
                                </button>
                            </li>
                        </ul>
                    </div>


                    {/* 
                    <button className="flex items-center gap-3 rounded-[13px] border border-[#292F3A] bg-[#11141A] h-[34px] text-base text-white">
                        Duration

                        <span className="h-2 w-2 rotate-45 border-b border-r border-[#9298A7]" />
                    </button> */}
                </div>

            </section>

            {/* Empty State */}


            <section className="">

                {activeTab === 'today' ? (context?.todayPlan.length === 0 ? (
                    <div className="mt-4 rounded-[18px] border border-dashed border-[#292E38] bg-[#0E1015] px-6 flex flex-col items-center justify-center text-center h-[300px]">

                        <h2 className="text-[20px] font-extrabold uppercase tracking-wide sm:text-3xl">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-[12px] text-[#969BA8] sm:text-lg">
                            Browse the library and add a lift to get today moving.
                        </p>


                        <Link href='/'>
                            <button className="mt-6 rounded-full bg-[#B9FF00] px-6 py-2.5 text-[16px] font-semibold text-black shadow-[0_8px_25px_rgba(185,255,0,0.15)] transition hover:bg-[#c7ff29]">
                                Go to workouts
                            </button>
                        </Link>

                    </div>) :

                    (<div className="flex flex-col gap-4 mt-6">

                        {sortedTodayPlan.map((today) => {
                            return <TodayPlanCard key={today.id} today={today}></TodayPlanCard>
                        })}

                    </div>
                    )

                )



                    : (context?.savedWorkouts.length === 0 ? (
                        <div className="mt-4 rounded-[18px] border border-dashed border-[#292E38] bg-[#0E1015] px-6 flex flex-col items-center justify-center text-center h-[300px]">

                            <h2 className="text-[20px] font-extrabold uppercase tracking-wide sm:text-3xl">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 text-[12px] text-[#969BA8] sm:text-lg">
                                Browse the library and add a lift to get today moving.
                            </p>


                            <Link href='/'>
                                <button className="mt-6 rounded-full bg-[#B9FF00] px-6 py-2.5 text-[16px] font-semibold text-black shadow-[0_8px_25px_rgba(185,255,0,0.15)] transition hover:bg-[#c7ff29]">
                                    Go to workouts
                                </button>
                            </Link>

                        </div>) :

                        (<div className="flex flex-col gap-4 mt-6">

                            {sortedSavedWorkouts.map((today) => {
                                return <SavedPlanCard key={today.id} today={today}></SavedPlanCard>
                            })}

                        </div>
                        )

                    )


                }
            </section>

        </main>
    );
};

export default MyPlan;