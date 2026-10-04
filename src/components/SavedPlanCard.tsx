'use client';
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FitLogContext } from "@/context/FitLogContext";
import { toast } from "react-toastify";

const SavedPlanCard = ({ today }: { today: libraryType }) => {
    const context=useContext(FitLogContext)

    return (
        <div className="flex h-[125px] w-full items-center rounded-[24px] border border-[#252A35] bg-[#13161D] px-[28px]">

            {/* Exercise Image */}
            <div className="relative h-[100px] w-[144px] shrink-0 overflow-hidden rounded-[20px]">
                <Image
                    src={today.image}
                    alt={today.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Exercise Information */}
            <div className="ml-[28px] flex flex-1 flex-col justify-center">

                {/* Exercise Name */}
                <h2 className="text-[16px] font-extrabold uppercase leading-none tracking-tight">
                    {today.name}
                </h2>

                {/* Equipment */}
                <p className="mt-[5px] text-[12px] font-medium text-[#8A92A0]">
                    {today.equipment}
                </p>

                {/* Exercise Stats */}
                <div className="mt-[8px] flex items-center gap-[18px]">

                    {/* Duration */}
                    <div className="flex items-center gap-[9px]">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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

                        <span className="text-[12px] text-[#C5C9D1]">
                            {today.duration} min
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-[9px]">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="#B9FF00"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.5 2C14.2 5.2 12.7 7 11.2 8.5C9.7 10 9 11.4 9 13C9 14.4 9.8 15.6 11 16.2C10.4 14.3 11.4 12.8 13 11.5C12.9 14.5 15.2 15.2 15.2 17.3C15.2 18.5 14.6 19.5 13.7 20.2C16.3 19.6 18 17.3 18 14.8C18 10.8 15.4 7.8 13.5 2Z" />
                            <path d="M8.5 12.5C6.8 14.2 6 15.7 6 17.3C6 20 8.3 22 11.1 22C10 20.9 9.4 19.7 9.4 18.2C9.4 16.2 10.4 14.5 8.5 12.5Z" />
                        </svg>

                        <span className="text-[12px] text-[#C5C9D1]">
                            {today.caloriesBurned} kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-[9px]">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
                                stroke="#B9FF00"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-[12px] text-[#C5C9D1]">
                            {today.rating}
                        </span>
                    </div>

                </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-[8px]">

                {/* View Details */}
                <Link href={`/workouts/${today.id}`}>

                    <button className="h-[34px] rounded-full border border-[#344052] px-[25px] text-[12px] text-[#E5E7EB] transition hover:bg-[#1A1E26]">
                        View Details
                    </button>
                </Link>

                    {/* Close */}
                    <button 
                    onClick={()=>{
                        context?.setSavedWorkouts(
                            context.savedWorkouts.filter((workout)=>workout.id!==today.id)
                        )
                        toast.success("Removed from Saved list")
                    }}
                    className="ml-[12px] text-[#687180] transition hover:text-white">
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