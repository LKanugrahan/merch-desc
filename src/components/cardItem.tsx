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
    className="flex flex-col sm:flex-col gap-2 sm:justify-center items-center w-full sm:w-64 sm:h-64 p-2"
    onClick={() => handleName(data.name)}
  >
    <Image
      src={data.image}
      alt={data.name}
      className="object-contain w-40 sm:w-64 h-40 sm:h-64"
    />
    <Typography className="font-poppins font-semibold text-lg text-black">
      {data.name}
    </Typography>
  </Card>
  )
}

export default CardItem