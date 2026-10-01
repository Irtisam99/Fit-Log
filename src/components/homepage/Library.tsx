import React from 'react';
import LibraryCard from './LibraryCard';


const Library = async () => {
    const getApiData = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await getApiData.json()

    return (
        <div className='mt-[64px] container mx-auto'>
            <h3 className='text-white font-bold text-[30px]'>THE LIBRARY</h3>
            <h3 className='text-[#9CA3AF] text-[14px]'>Twelve lifts covering every major muscle group.</h3>
            <div className='mt-5 grid grid-cols-3 gap-[24px]'>
                {
                    data.map((singleData: libraryType) => {
                        return <LibraryCard key={singleData.id} singleData={singleData}></LibraryCard>
                    })
                }
            </div>

        </div>
    );
};

export default Library;