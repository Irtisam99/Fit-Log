import React from 'react';

const loading = () => {
    return (
        <div className="container mx-auto mt-[64px]">
            {/* Heading skeleton */}
            <div className="h-9 w-52 animate-pulse rounded bg-[#25282F]"></div>
            <div className="mt-2 h-4 w-72 animate-pulse rounded bg-[#25282F]"></div>

            {/* Cards skeleton */}
            <div className="mt-5 grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="overflow-hidden rounded-xl bg-[#1D2026]"
                    >
                        {/* Image */}
                        <div className="h-[192px] w-full animate-pulse bg-[#25282F]"></div>

                        {/* Content */}
                        <div className="p-5">
                            <div className="h-6 w-3/4 animate-pulse rounded bg-[#25282F]"></div>

                            <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-[#25282F]"></div>

                            <div className="mt-5 flex gap-2">
                                <div className="h-6 w-16 animate-pulse rounded-full bg-[#25282F]"></div>
                                <div className="h-6 w-20 animate-pulse rounded-full bg-[#25282F]"></div>
                            </div>

                            <div className="mt-5 h-10 w-full animate-pulse rounded bg-[#25282F]"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default loading;