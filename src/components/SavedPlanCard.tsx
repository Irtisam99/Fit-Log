'use client';

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FitLogContext } from "@/context/FitLogContext";
import { toast } from "react-toastify";

const SavedPlanCard = ({ today }: { today: libraryType }) => {

    const context = useContext(FitLogContext);


    return (
        <div className="flex min-h-[190px] w-full flex-col rounded-[20px] border border-[#252A35] bg-[#13161D] p-4 sm:min-h-[180px] sm:p-5 lg:h-[125px] lg:min-h-0 lg:flex-row lg:items-center lg:rounded-[24px] lg:px-[28px] lg:py-0">


            {/* ================= EXERCISE ================= */}

            <div className="flex min-w-0 flex-1 items-center">


                {/* Exercise Image */}

                <div className="relative h-[90px] w-[105px] shrink-0 overflow-hidden rounded-[16px] sm:h-[100px] sm:w-[130px] lg:h-[100px] lg:w-[144px] lg:rounded-[20px]">

                    <Image
                        src={today.image}
                        alt={today.name}
                        fill
                        className="object-cover"
                    />

                </div>


                {/* Exercise Information */}

                <div className="ml-4 min-w-0 flex-1 sm:ml-5 lg:ml-[28px]">

                    {/* Exercise Name */}

                    <h2 className="truncate text-[14px] font-extrabold uppercase leading-none tracking-tight sm:text-[16px]">
                        {today.name}
                    </h2>


                    {/* Equipment */}

                    <p className="mt-[5px] truncate text-[11px] font-medium text-[#8A92A0] sm:text-[12px]">
                        {today.equipment}
                    </p>


                    {/* Exercise Stats */}

                    <div className="mt-[8px] flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4 lg:gap-[18px]">


                        {/* Duration */}

                        <div className="flex items-center gap-[6px] lg:gap-[9px]">

                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9.5"
                                    stroke="#B9FF00"
                                    strokeWidth="2"
                                />

                                <path
                                    d="M12 7V12L15 14"
                                    stroke="#B9FF00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span className="text-[10px] text-[#C5C9D1] sm:text-[12px]">
                                {today.duration} min
                            </span>

                        </div>


                        {/* Calories */}

                        <div className="flex items-center gap-[6px] lg:gap-[9px]">

                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="#B9FF00"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[18px] w-[18px] lg:h-[21px] lg:w-[21px]"
                            >
                                <path d="M13.5 2C14.2 5.2 12.7 7 11.2 8.5C9.7 10 9 11.4 9 13C9 14.4 9.8 15.6 11 16.2C10.4 14.3 11.4 12.8 13 11.5C12.9 14.5 15.2 15.2 15.2 17.3C15.2 18.5 14.6 19.5 13.7 20.2C16.3 19.6 18 17.3 18 14.8C18 10.8 15.4 7.8 13.5 2Z" />

                                <path d="M8.5 12.5C6.8 14.2 6 15.7 6 17.3C6 20 8.3 22 11.1 22C10 20.9 9.4 19.7 9.4 18.2C9.4 16.2 10.4 14.5 8.5 12.5Z" />
                            </svg>

                            <span className="text-[10px] text-[#C5C9D1] sm:text-[12px]">
                                {today.caloriesBurned} kcal
                            </span>

                        </div>


                        {/* Rating */}

                        <div className="flex items-center gap-[6px] lg:gap-[9px]">

                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
                            >
                                <path
                                    d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
                                    stroke="#B9FF00"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span className="text-[10px] text-[#C5C9D1] sm:text-[12px]">
                                {today.rating}
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= ACTIONS ================= */}

            <div className="mt-4 flex w-full items-center gap-2 sm:mt-4 sm:gap-3 lg:mt-0 lg:w-auto lg:shrink-0 lg:gap-[8px]">


                {/* View Details */}

                <Link
                    href={`/workouts/${today.id}`}
                    className="flex h-[34px] flex-1 items-center justify-center rounded-full border border-[#344052] px-4 text-[11px] text-[#E5E7EB] transition hover:bg-[#1A1E26] sm:flex-none sm:px-5 sm:text-[12px] lg:h-[34px] lg:px-[25px]"
                >
                    View Details
                </Link>


                {/* Close */}

                <button
                    onClick={() => {

                        context?.setSavedWorkouts(
                            context.savedWorkouts.filter(
                                (workout) => workout.id !== today.id
                            )
                        );

                        toast.success("Removed from Saved list");
                    }}
                    className="ml-1 flex h-[34px] w-[34px] shrink-0 items-center justify-center text-[#687180] transition hover:text-white lg:ml-[12px]"
                >

                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>

                </button>

            </div>

        </div>
    );
};

export default SavedPlanCard;
