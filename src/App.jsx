import { useState } from 'react'
import './App.css'
import Card from './Components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <h1 className='bg-green-500  text-black p-4 rounded-xl mb-4'>Learning Tailwind With React And Props </h1>
         <div className='flex gap-20'>
         <div>
            <img
              src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
              alt="test"
              className="rounded-t-xl "
            />
         

          </div>
          <Card name="Mango juice" price={30}/>
          <Card name="orange juice" price={20}/>
         </div>

        {/* cards are here */}

        
        

    </>
  )
}

export default App
