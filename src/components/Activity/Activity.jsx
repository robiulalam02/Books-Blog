import React from 'react';

const Activity = ({ data }) => {
    return (
        <div className='flex flex-col gap-2'>
                {
                    data.map(dat=> <div key={dat.id} className='text-center bg-slate-300 p-2 rounded-md'><p>{dat.title} <small className='text-[#422ad5]'>Bookmarked Successfully ✔️</small></p></div>)
                }
        </div>
    );
};

export default Activity;