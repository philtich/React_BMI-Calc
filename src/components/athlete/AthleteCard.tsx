import React from 'react'

import { kilosType } from '../Main'

type AthleteCardProps = {
    athlete: kilosType;
    deleteById:(id: any) => void
}

const now = new Date();

export const AthleteCard = ({
    athlete: { kg, height, BMI, date, id },
    deleteById}: AthleteCardProps) =>{
  return (
    <div key={id}className='flex justify-center items-center gap-2 flex-col bg-blue-800 rounded-sm p-2 shadow-lg relative'>
            <h3 className={`${(BMI > 25 || BMI < 19)  ? "text-red-600" : "text-green-300"} text-2xl`}>BMI: {BMI}</h3>
            <div className='flex gap-2 text-white text-xs'>
                <p>Weight: {kg}kg</p>
                <span>Height: {height}cm</span>
                <span>Date: {now.toLocaleDateString()}</span>
            </div>
            <button onClick={() => deleteById(id)} className='absolute top-1 left-1 rounded-full flex items-center justify-center w-4 h-4 bg-white text-blue-600 text-sm font-thin'>X</button>

            </div>
  )
}
