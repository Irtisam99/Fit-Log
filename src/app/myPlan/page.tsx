import React from "react";

const MyPlan = () => {
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
                            0
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col justify-center border-r border-[#232732] pl-[32px]">
                        <p className="text-[12px] text-[#8A92A0]">
                            Minutes
                        </p>

                        <p className="mt-2 text-[36px] font-extrabold leading-none">
                            0
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col justify-center pl-[32px]">
                        <p className="text-[12px] text-[#8A92A0]">
                            Calories
                        </p>

                        <p className="mt-2 text-[36px] font-extrabold leading-none">
                            0
                        </p>
                    </div>

                </div>

            </section>

            {/* Tabs + Sort */}
            <section className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="flex w-fit rounded-[15px] h-[40px] border border-[#252A35] bg-[#11141A] p-1">
                    <button
                        className="rounded-[11px] w-[103px] h-[28px] text-[14px] text-[#9298A7]"
                    >
                        Today’s Plan
                    </button>

                    <button
                        className="rounded-[11px] border border-[#303642] bg-[#20242D] w-[108px] h-[30px]  text-[14px] font-semibold text-white shadow-sm"
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
                            Duration ⬇️️
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
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
            <section className="mt-4 flex h-[300px] items-center justify-center rounded-[18px] border border-dashed border-[#292E38] bg-[#0E1015] px-6">

                <div className="flex flex-col items-center text-center">

                    <h2 className="text-[20px] font-extrabold uppercase tracking-wide sm:text-3xl">
                        NOTHING HERE YET
                    </h2>

                    <p className="mt-2 text-[12px] text-[#969BA8] sm:text-lg">
                        Browse the library and add a lift to get today moving.
                    </p>


                    <button className="mt-6 rounded-full bg-[#B9FF00] px-6 py-2.5 text-[16px] font-semibold text-black shadow-[0_8px_25px_rgba(185,255,0,0.15)] transition hover:bg-[#c7ff29]">
                        Go to workouts
                    </button>

                </div>

            </section>

        </main>
    );
};

export default MyPlan;