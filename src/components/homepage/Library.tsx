import React from 'react';
import LibraryCard from './LibraryCard';

const Library = async () => {
    const getApiData = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await getApiData.json();

    return (
        <div className='container mx-auto mt-[64px] px-4 sm:px-5 lg:px-0'>
            
            <h3 className='text-white font-bold text-[30px]'>
                THE LIBRARY
            </h3>

            <h3 className='text-[#9CA3AF] text-[14px]'>
                Twelve lifts covering every major muscle group.
            </h3>

            <div className='mt-5 grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((singleData: libraryType) => {
                        return (
                            <LibraryCard
                                key={singleData.id}
                                singleData={singleData}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
};

export default Library;