import ScrollToTop from '@/components/ScrollToTop';
import WorkoutActions from '@/components/WorkoutActions';
import Image from 'next/image';
import React from 'react';

const getData = async () => {
    const datas = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await datas.json();
    return data;
};

const WorkoutDetails = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {

    const { id } = await params;
    const data = await getData();

    const exactData = data.find((da: libraryType) => {
        return da.id === parseInt(id);
    }) as libraryType;

    if (!exactData) {
        return (
            <main className="min-h-screen bg-[#0d0f12] flex items-center justify-center px-6 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        Workout not found
                    </h1>

                    <p className="mt-2 text-gray-400">
                        The workout you're looking for doesn't exist.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <>
            <ScrollToTop />

            <div className="container mx-auto mt-6 px-4 sm:mt-8 sm:px-6 lg:mt-[48px] lg:px-0">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-9">

                    {/* ================= IMAGE ================= */}

                    <div className="relative h-[400px] w-full overflow-hidden rounded-[9px] bg-[#171a20] sm:h-[500px] lg:h-[700px]">

                        <Image
                            src={exactData.image}
                            alt={exactData.name}
                            fill
                            className="object-cover"
                        />

                    </div>


                    {/* ================= DETAILS ================= */}

                    <div className="flex flex-col">

                        {/* Title */}

                        <h1 className="text-[28px] font-extrabold uppercase leading-[1.05] tracking-[-0.7px] text-white sm:text-[32px] lg:text-[36px]">
                            {exactData.name}
                        </h1>


                        {/* Description */}

                        <p className="mt-3 max-w-[520px] text-[14px] leading-[1.55] text-[#9CA3AF] sm:text-[15px] lg:text-[16px]">
                            {exactData.description}
                        </p>


                        {/* Muscle groups */}

                        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">

                            {exactData.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#CCFF00] px-3 py-[5px] text-[11px] font-bold text-black sm:text-[12px]"
                                >
                                    {muscle}
                                </span>
                            ))}

                        </div>


                        {/* ================= STATS CARD ================= */}

                        <div className="mt-6 mb-2 overflow-hidden rounded-[10px] border border-[#252932] bg-[#171a20] sm:mt-7 lg:mt-8">

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

                        <section className="mt-5 sm:mt-6">

                            <h2 className="text-[15px] font-extrabold uppercase tracking-[0.3px] text-white sm:text-[16px]">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-3 space-y-3">

                                {exactData.instructions.map(
                                    (instruction: string, index: number) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-[13px] leading-[1.5] text-[#a0a2a8] sm:text-[14px]"
                                        >

                                            <span className="min-w-[12px] text-[#D1D5DB]">
                                                {index + 1}.
                                            </span>

                                            <span>
                                                {instruction}
                                            </span>

                                        </li>
                                    )
                                )}

                            </ol>

                        </section>


                        {/* ================= BUTTONS ================= */}

                        <WorkoutActions workout={exactData} />

                    </div>

                </div>

            </div>
        </>
    );
};


/* ================= STAT COMPONENT ================= */

const WorkoutStat = ({
    label,
    value,
    last = false,
}: {
    label: string;
    value: string | number;
    last?: boolean;
}) => {

    return (
        <div
            className={`flex min-h-[38px] items-center justify-between px-4 ${
                !last
                    ? "border-b border-[#282c34]"
                    : ""
            }`}
        >

            <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#9CA3AF] sm:text-[12px]">
                {label}
            </span>

            <span className="text-[13px] font-medium text-[#e2e3e5] sm:text-[14px]">
                {value}
            </span>

        </div>
    );
};

export default WorkoutDetails;
