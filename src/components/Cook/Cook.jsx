import React from 'react';
import Item from '../Item/Item';

const Cook = ({cooks, handleOnPreparing}) => {
  
  return (
          <>
          <h1 className='mb-2 font-bold'>Want to Cook: {cooks.length} </h1>
          <div className='w-2/3 mx-auto border border-[rgba(40,40,40,0.15)]'></div>
          <table className='cooking-font text-[rgba(40,40,40,0.7)]'>
            <tr className='h-15'>
              <th className='text-sm'>Name</th>
              <th className='text-sm'>Time</th>
              <th className='text-sm'>Calories</th>
            </tr>
            

           {
            cooks.map((cook, idx) => <Item handleOnPreparing={handleOnPreparing} key={idx} cook={cook} ></Item> )
           }
              
            
          </table>
       </>
        
  );
};

export default Cook;