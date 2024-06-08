import CardItem from "@/components/cardItem";
import ModalDetail from "@/components/modalDetail";
import { data } from "@/static/data";
import { Card, Dialog, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const handleName = (text: string) => {
    setName(text);
  };
  return (
    <main className="flex flex-col gap-10 items-center p-4 sm:p-10">
      <div className="flex flex-col items-center gap-2">
        <div className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-7xl text-transparent bg-gradient-to-r bg-clip-text from-white to-[#cc1e28] to-10%">
          Pundi Craft
        </div>
        <Typography className="font-poppins font-normal text-black text-base text-center">
          Asa, Karsa, Karya dari dalam diri yang berbudaya Indonesia
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((data, index) => (
          <div key={index} className="w-full sm:w-fit">
<CardItem data={data} handleName={handleName}/>
<ModalDetail name={name} handleName={handleName} data={data}/>
          </div>
        ))}
      </div>
    </main>
  );
}
