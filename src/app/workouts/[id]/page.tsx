import ScrollToTop from '@/components/ScrollToTop';
import WorkoutActions from '@/components/WorkoutActions';
import { FitLogContext } from '@/context/FitLogContext';
import Image from 'next/image';
import React, { useContext } from 'react';




const getData = async () => {
    const datas = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await datas.json()
    return data
}


const WorkoutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const data = await getData()

    const exactData = data.find((da: libraryType) => {
        return da.id === parseInt(id)
    }) as libraryType

    if (!exactData) {
        return (
            <main className="min-h-screen bg-[#0d0f12] flex items-center justify-center px-6 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Workout not found</h1>
                    <p className="mt-2 text-gray-400">
                        The workout you're looking for doesn't exist.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <>
            <ScrollToTop></ScrollToTop>
            <div className="container mx-auto mt-[48px]">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-9">

                    {/* ================= IMAGE ================= */}
                    <div className="relative w-full h-[700px] overflow-hidden rounded-[9px] bg-[#171a20]">
                        <Image
                            src={exactData.image}
                            alt={exactData.name}
                            fill
                            className="object-cover lg:h-[700px]"
                        />
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="flex flex-col">

                        {/* Title */}
                        <h1 className="text-white font-[Arial,sans-serif] text-[36px] font-extrabold uppercase leading-[1.05] tracking-[-0.7px] md:text-[36px]">
                            {exactData.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-[520px] text-[16px] leading-[1.55] text-[#9CA3AF]">
                            {exactData.description}
                        </p>

                        {/* Muscle groups */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {exactData.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#CCFF00] px-3 py-[5px] text-[12px] font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= STATS CARD ================= */}
                        <div className="mt-8 mb-2 overflow-hidden rounded-[10px] border border-[#252932] bg-[#171a20]">

                            <WorkoutStat
                                label="EQUIPMENT"
                                value={exactData.equipment}
                            />

                            <WorkoutStat
                                label="DIFFICULTY"
                                value={exactData.difficulty}
                            />

                            <WorkoutStat
                                label="SETS"
                                value={exactData.sets}
                            />

                            <WorkoutStat
                                label="REPS"
                                value={exactData.reps}
                            />

                            <WorkoutStat
                                label="DURATION"
                                value={`${exactData.duration} min`}
                            />

                            <WorkoutStat
                                label="CALORIES"
                                value={`${exactData.caloriesBurned} kcal`}
                            />

                            <WorkoutStat
                                label="RATING"
                                value={exactData.rating}
                                last
                            />

                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <section className="mt-6">
                            <h2 className="text-white text-[16px] font-extrabold uppercase tracking-[0.3px]">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-3 space-y-3">
                                {exactData.instructions.map(
                                    (instruction: string, index: number) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-[14px] leading-[1.5] text-[#a0a2a8]"
                                        >
                                            <span className="min-w-[12px] text-[#D1D5DB]">
                                                {index + 1}.
                                            </span>

                                            <span>{instruction}</span>
                                        </li>
                                    )
                                )}
                            </ol>
                        </section>

                        {/* ================= BUTTONS ================= */}
                            
                            <WorkoutActions workout={exactData}></WorkoutActions>
                    </div>
                </div>
            </div>
        </>
    );
};


/* ================= STAT COMPONENT ================= */

const WorkoutStat = ({ label, value, last = false, }: {
    label: string;
    value: string | number;
    last?: boolean;
}) => {
    return (
        <div
            className={`flex min-h-[38px] items-center justify-between px-4 ${!last ? "border-b border-[#282c34]" : ""
                }`}
        >
            <span className="uppercase text-[12px] font-bold tracking-[0.5px] text-[#9CA3AF]">
                {label}
            </span>

            <span className="text-[14px] font-medium text-[#e2e3e5]">
                {value}
            </span>
        </div>
    );
};
export default WorkoutDetails;