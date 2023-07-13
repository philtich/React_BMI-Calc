import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { kilosType } from './Main';

type FormProps = {
    allKilos: kilosType[]
    setKilos: (arr: kilosType[]) => void
}

export const Form = ({ allKilos, setKilos }: FormProps) => {
    const [kilogramm, setKilogramms] = useState(0)
    const [height, setHeight] = useState(0)
    const handleClick = (event: any) => {

        if (kilogramm != 0 && height != 0){
        event.preventDefault();
        const athlete = {
          id: uuid(),
          kg: kilogramm,
          height: height,
          date: Date.now,
          BMI: (kilogramm/(height/100*height/100)).toFixed(2)
        }
        setKilos([...allKilos, athlete])
        setKilogramms(0)
        setHeight(0)
    }
    else {
      alert("Please insert your data!")
    }
    }

  return (
    <div className="py-10 flex flex-col md:flex-row gap-6 justify-center items-center"> 
            <div className='flex flex-col gap-4 items-center justify-center'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col gap-1'>
                  <span className='showSpan'>Weight in kg</span>
                  <input value={kilogramm}className="p-2 rounded-3xl" type="number"
                    name="Kilogramm" placeholder='Kilogramm' onChange={(event) => {setKilogramms(event.target.valueAsNumber)}}>    
                  </input>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='showSpan'>Height in cm</span>
                  <input id="height"value={height} className="p-2 rounded-3xl"
                  type="number" placeholder='Height in cm' name="height" 
                  onChange={(event) => {setHeight(event.target.valueAsNumber)}} ></input>
                </div>
              </div>
              <button className="py-2 px-8 rounded-3xl bg-slate-200 text-slate-600 text-xs"onClick={handleClick}>Calculate BMI</button>
            </div>          
     </div>
  )


}