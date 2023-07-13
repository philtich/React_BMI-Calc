import React from 'react'
import { kilosType } from '../Main'
import { AthleteCard } from './AthleteCard'

type AthleteViewProps = {
    allKilos: kilosType[]
    deleteById:(id: any) => void
}


export const AthleteView =({ allKilos, deleteById }: AthleteViewProps) => {
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-900 shadow-md p-4 rounded-md'>
            {allKilos.map((el: kilosType) => (
            <AthleteCard key={el.id}
            athlete={el}
            deleteById={(id: any) => deleteById(id)}
            />
            ))}
        </div>
  )
}