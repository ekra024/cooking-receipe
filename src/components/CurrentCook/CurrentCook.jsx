import React from 'react';
import Current from '../Current/Current';

const CurrentCook = ({current, time, calori}) => {
  return (
    <>
      <h1 className='font-bold mt-10'>Want to Cook: {current.length}</h1>
          <table className=''>
            <tr className='h-15 font-semibold'>
              <th className='font-light text-sm' >Name</th>
              <th className='font-light text-sm px-20'>Time</th>
              <th className='font-light text-sm'>Calories</th>
            </tr>

            {
            current.map((currentItem, idx) => <Current key={idx} time={time} calori={calori} currentItem={currentItem}> </Current> )
           }
            
        </table>
        <p>Total Minintes: {time} minutes</p>
        <p>Total Calories: {calori} calories</p>
    </>
  );
};

export default CurrentCook;