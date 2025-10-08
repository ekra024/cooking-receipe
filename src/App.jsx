
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Description from './components/Description/Description'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CurrentCook from './components/CurrentCook/CurrentCook'


function App() {

  

  const [cooks, setCooks] = useState([]);
  const [time, setTime] = useState(0);
  const [calori, setCalori] = useState(0);

  const [current, setCurrent] = useState([])
  
  const handleOnCook = (receipe) => {
    const id = receipe.recipe_id;
   
    const having = cooks.filter((cook) => (cook.recipe_id === id) );
    
    if(having.length > 0) {
      alert('already have')
      return;
    }
    else {
      const newReceipe = [...cooks, receipe];
      setCooks(newReceipe);
    }
   
  }

  const handleOnPreparing = (cooking, id, preparing_time, calories) => {
    const newPreparing = [...current,cooking];
    setCurrent(newPreparing);
    setTime(time+preparing_time);
    setCalori(calori+calories);
   
    const Remaining = cooks.filter((cook) => (cook.recipe_id != id))
    setCooks(Remaining);

  }


  return (
    <div className='main'>
      
      <Header></Header>
      <Banner></Banner>
      <Description></Description>
     
      <div className='w-11/12 mx-auto lg:flex'>
        <div className='3/5'>
          <Main handleOnCook={handleOnCook}></Main>
        </div>
         
        <div className='w-max mx-auto mt-5 lg:mt-0'>
        <div className='border-2 border-gray-200 rounded-lg ml-4 text-center'>
          <Cook handleOnPreparing={handleOnPreparing} cooks={cooks} ></Cook>
          <CurrentCook current={current} time={time} calori={calori} ></CurrentCook>                 
        </div>
        </div>
        

      
      </div>
      
    </div>
  )
}

export default App
