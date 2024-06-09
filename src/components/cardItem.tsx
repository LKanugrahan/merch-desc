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
    className="flex flex-col gap-2 sm:justify-center items-center w-fit md:w-64 md:h-64 p-2"
    onClick={() => handleName(data.name)}
  >
    <Image
      src={data.image}
      alt={data.name}
      className="object-contain w-40 md:w-52 h-40 md:h-52"
    />
    <Typography className="font-poppins  font-semibold text-lg text-black text-center">
      {data.name}
    </Typography>
  </Card>
  )
}

export default CardItem