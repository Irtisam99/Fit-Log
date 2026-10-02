import React from 'react';
import { Clock3, Flame, Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const LibraryCard = ({ singleData }: { singleData: libraryType }) => {
    return (
        <Link href={`/workouts/${singleData.id}`}>
            <div className="w-full overflow-hidden rounded-[20px] border border-[#292C34] bg-[#15171D] lg:rounded-[28px]">

                {/* IMAGE */}
                <div className="relative h-[200px] w-full sm:h-[220px] lg:h-[250px]">
                    <Image
                        src={singleData.image}
                        alt={singleData.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6 lg:px-8 lg:pb-6 lg:pt-6">

                    {/* MUSCLE GROUPS */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {singleData.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#B7FF00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black sm:px-4 sm:py-1.5 sm:text-[11px]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* NAME */}
                    <h2 className="mt-4 text-[16px] font-extrabold uppercase tracking-wide text-white sm:mt-5 sm:text-[18px]">
                        {singleData.name}
                    </h2>

                    {/* EQUIPMENT */}
                    <p className="mt-1 text-[11px] text-[#9CA3AF] sm:text-[12px]">
                        {singleData.equipment}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-4 h-px w-full bg-[#292C34]" />

                    {/* STATS */}
                    <div className="flex flex-wrap items-center gap-4 text-[#A7ADB9] sm:gap-6 lg:gap-8">

                        {/* DURATION */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Clock3 className="h-5 w-5 stroke-[1.8] sm:h-6 sm:w-6" />

                            <span className="text-[11px] sm:text-[12px]">
                                {singleData.duration} min
                            </span>
                        </div>

                        {/* CALORIES */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Flame className="h-5 w-5 fill-current stroke-[1.8] sm:h-6 sm:w-6" />

                            <span className="text-[11px] sm:text-[12px]">
                                {singleData.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* RATING */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Star className="h-5 w-5 stroke-[1.8] sm:h-6 sm:w-6" />

                            <span className="text-[11px] sm:text-[12px]">
                                {singleData.rating}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;