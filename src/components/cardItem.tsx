import { Data } from '@/_interfaces/data.interface'
import { Card, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

interface Props{
data:Data
handleName:(text:string)=>void
}
const CardItem = ({data,handleName}:Props) => {
  return (
    <Card
    className="flex flex-row sm:flex-col gap-2 sm:justify-center items-center w-full sm:w-44 sm:h-44 p-2"
    onClick={() => handleName(data.name)}
  >
    <Image
      src={data.image}
      alt={data.name}
      className="object-contain w-20 sm:w-40 h-20 sm:h-40"
    />
    <Typography className="font-poppins font-semibold text-lg text-black">
      {data.name}
    </Typography>
  </Card>
  )
}

export default CardItem