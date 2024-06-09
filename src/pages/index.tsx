import CardItem from "@/components/cardItem";
import ModalDetail from "@/components/modalDetail";
import { data } from "@/static/data";
import {
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import instagram from "@/assets/instagram.png";
import tokopedia from "@/assets/tokopedia.png";
import Header from "@/components/header";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const handleName = (text: string) => {
    setName(text);
  };
  return (
    <main className="relative flex flex-col gap-10 items-center p-4 sm:p-10">
      <Header language={language} setLanguage={setLanguage} />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Typography className="font-poppins font-normal text-black text-base text-center">
            {language === "en"
              ? "For more details, check it out!"
              : "Untuk detail lebih lanjut, cek aja!"}
          </Typography>
          <div className="flex gap-2">
            <a href={"https://www.instagram.com/pundicraft/"} target="_blank">
              <Image src={instagram} alt="instagram" width={30} />
            </a>
            <a href={"https://www.tokopedia.com/pundicraft"} target="_blank">
            <Image src={tokopedia} alt="tokopedia" width={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((data, index) => (
            <div key={index} className="w-fit">
              <CardItem data={data} handleName={handleName} />
              <ModalDetail
                name={name}
                handleName={handleName}
                data={data}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
