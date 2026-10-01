import React from 'react';
import { Clock3, Flame, Star } from "lucide-react";
import Image from 'next/image';

const LibraryCard = ({singleData}:{singleData:libraryType}) => {
    return (
 <div className="w-full overflow-hidden rounded-[28px] border border-[#292C34] bg-[#15171D]">

      {/* IMAGE */}
      <div className="relative h-[250px] w-full">
        <Image
          src={singleData.image}
          alt={singleData.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="px-10 pb-7 pt-9">

        {/* MUSCLE GROUPS */}
        <div className="flex flex-wrap items-center gap-3">
          {singleData.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#B7FF00] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* NAME */}
        <h2 className="mt-7 text-[18px] font-extrabold uppercase tracking-wide text-white">
          {singleData.name}
        </h2>

        {/* EQUIPMENT */}
        <p className="mt-1 text-[12px] text-[#9CA3AF]">
          {singleData.equipment}
        </p>

        {/* DIVIDER */}
        <div className="my-7 h-px w-full bg-[#292C34]" />

        {/* STATS */}
        <div className="flex items-center gap-8 text-[#A7ADB9]">

          {/* DURATION */}
          <div className="flex items-center gap-3">
            <Clock3 className="h-6 w-6 stroke-[1.8]" />

            <span className="text-[12px]">
              {singleData.duration} min
            </span>
          </div>

          {/* CALORIES */}
          <div className="flex items-center gap-3">
            <Flame className="h-6 w-6 fill-current stroke-[1.8]" />

            <span className="text-[12px]">
              {singleData.caloriesBurned} kcal
            </span>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 stroke-[1.8]" />

            <span className="text-[12px]">
              {singleData.rating}
            </span>
          </div>

        </div>
      </div>
    </div>
    );
};

export default LibraryCard;