import React from 'react';
import { LuClock3 } from "react-icons/lu";
import { AiTwotoneFire } from "react-icons/ai";

const Receipe = ({receipe, handleOnCook}) => {
  const {recipe_image, recipe_name,  short_description, calories, preparing_time, ingredients} = receipe;
  
 

  return (     
      <div className='border-2 border-gray-200 rounded-lg shadow-lg p-4'>
      <img className='rounded-lg w-full mb-4' src={recipe_image} alt="" />
      <h1 className='cooking-font font-bold text-xl mb-2'>{recipe_name}</h1>
      <p className='mb-2 text-sm cooking-font text-[rgba(135,135,135,1)]'>{short_description}</p>
      
      <h3 className='cooking-font mt-4 mb-2 font-semibold'>Ingredients:{ingredients.length}</h3>

      <ul className='cooking-font list-disc list-inside text-[rgba(135,135,135,1)]'>
      {
          ingredients.map((ingredient, idx) => <span key={idx}>
            <li>{ingredient}</li>
          </span> )
        }
      </ul>
      
      <div className='flex my-4 gap-2 items-center justify-between pr-16'>
        <div className='flex items-center gap-2'>
          <LuClock3></LuClock3> <p className='cooking-font text-[rgba(135,135,135,1)]'>{preparing_time} minutes</p>
        </div>
        <div className='flex items-center gap-2'>
          <AiTwotoneFire></AiTwotoneFire> <p className='cooking-font text-[rgba(135,135,135,1)]'>{calories} calories</p>
        </div>
      </div>
      <button onClick={() => handleOnCook(receipe)} className='btn' 
      >Want to Cook</button>
      </div>
    
      
   
  );
};

export default Receipe;