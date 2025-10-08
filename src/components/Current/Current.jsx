import React from 'react';

const Current = ({currentItem}) => {
  
  const {recipe_name, calories, preparing_time} = currentItem;
  
  return (
    <tr className='bg-[rgba(40,40,40,0.03)] h-18 text-sm cooking-font text-[rgba(40,40,40,0.7)]'>
      <td>{recipe_name}</td>
      <td className='px-30'>{preparing_time} minutes</td>
      <td>{calories} minutes</td>
    </tr>
   
  );
};

export default Current;