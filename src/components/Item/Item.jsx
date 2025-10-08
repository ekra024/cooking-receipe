import React from 'react';

const Item = ({cook,handleOnPreparing}) => {
 
  const {recipe_name, calories, preparing_time,recipe_id} = cook;
  return (
    <tr className='bg-[rgba(40,40,40,0.03)]'>
      <td>{recipe_name}</td>
      <td className='px-10'>{preparing_time} minutes</td>
      <td className='pr-15'>{calories} calories</td>
      <button onClick={() => handleOnPreparing(cook, recipe_id, preparing_time, calories)} className='btn'>Preparing</button>
    </tr>
  );
};

export default Item;