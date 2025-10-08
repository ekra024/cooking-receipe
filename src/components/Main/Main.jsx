import React, { useEffect } from 'react';
import { useState } from 'react';
import Receipe from '../Receipe/Receipe';


const Main = ({handleOnCook}) => {

  const [receipes, setReceipes] =useState([]);
  

  useEffect( () => {
    fetch('receipe.json')
    .then(res => res.json())
    .then(data => setReceipes(data))
  } )

  
  return (
    <>
    
      <div className='grid md:grid-cols-2 gap-4'>
      {
        receipes.map( (receipe, idx) => <Receipe key={idx} receipe={receipe} handleOnCook={handleOnCook} ></Receipe> )
      }
      </div>
      
      </>
  );
};

export default Main;