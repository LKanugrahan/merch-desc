import CardItem from "@/components/cardItem";
import ModalDetail from "@/components/modalDetail";
import { data } from "@/static/data";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Header from "@/components/header";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [category, setCategory] = useState<string>("all");
  const uniqueCategories = data.map(value=>value.category).filter((item, index) => data.map(value=>value.category).indexOf(item) === index);
  const handleName = (text: string) => {
    setName(text);
  };
  const handleCategory = (text: string) => {
    setCategory(text);
  };
  return (
    <main className="relative flex flex-col gap-10 items-center p-4 sm:p-10">
      <Header language={language} setLanguage={setLanguage} />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              className="font-poppins font-normal text-black text-base normal-case bg-white"
              onClick={() => handleCategory("all")}
            >
              All
            </Button>
            {uniqueCategories.sort().map((value, index) => (
              <Button
                key={index}
                size="sm"
                className="font-poppins font-normal text-black text-base capitalize bg-white"
                onClick={() => handleCategory(value)}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {category === "all"
            ? data.map((data, index) => (
                <div key={index} className="w-fit">
                  <CardItem data={data} handleName={handleName} />
                  <ModalDetail
                    name={name}
                    handleName={handleName}
                    data={data}
                    language={language}
                  />
                </div>
              ))
            : data
                .filter((item) => item.category === category)
                .map((data, index) => (
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
