import React from 'react'
import { useState } from 'react'

import { v4 as uuid } from 'uuid';
import { Form } from './Form';
import { AthleteView } from './athlete/AthleteView';

export type kilosType = {
    id: any,
    kg: number,
    height: number,
    date: () => number;
    BMI: any
}

export const Main = () => {
    const [kilos, setKilos] = useState([
        {
            id: uuid(),
            kg: 80,
            height: 182,
            date: Date.now,
            BMI: (80/(182/100*182/100)).toFixed(2)
        }
    ])
    
    const deleteById = (id:any) => {
      const newKilosArray = kilos.filter((athlete: kilosType) => athlete.id !== id);
        setKilos(newKilosArray)
      }
  return (
    <section className='py-8 h-screen bg-blue-950 w-full flex justify-center items-start'>
        <div className='container mx-4'>
            <h1 className="text-4xl text-center text-white">BMI-Tracker</h1>
            <Form setKilos = {(arr: kilosType[]) => setKilos(arr)}
            allKilos={kilos}
            />
            <AthleteView allKilos={kilos}
             deleteById={(id: any) => deleteById(id)}/>
        </div>
    </section>
  )
}
