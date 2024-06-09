import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { languageData } from "@/static/data";
import instagram from "@/assets/instagram.png";
import tokopedia from "@/assets/tokopedia.png";
import Image from "next/image";
import pundiCraftLogo from "@/assets/pundiCraftLogo.jpg";

interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ language, setLanguage }: Props) => {
  return (
    <div className="md:relative w-full sm:w-3/4 flex flex-col items-center gap-2">
      <div className="flex justify-center items-center gap-2">
      <Image
          src={pundiCraftLogo}
          alt="pundiCraftLogo"
          width={100}
          height={100}
          className="rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
        />
        <div className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-7xl text-transparent bg-gradient-to-r bg-clip-text from-white to-[#cc1e28] to-[5%]">
          Pundi Craft
        </div>
      </div>

      <Typography className="font-poppins font-normal text-black text-base text-center">
        {language === "en"
          ? "Aspiration, Determination, and Creation from Within, Rooted in Indonesian Culture"
          : "Asa, Karsa, Karya dari dalam diri yang berbudaya Indonesia"}
      </Typography>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
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
          <Menu placement="bottom-end">
            <MenuHandler className="md:!absolute top-0 md:-right-10 xl:right-0 p-0 bg-transparent flex gap-1 shadow-none hover:shadow-none">
              <Button>
                <FiGlobe size={30} color="black" />
                <Typography className="font-poppins font-semibold text-black text-xl text-center uppercase">
                  {language}
                </Typography>
              </Button>
            </MenuHandler>
            <MenuList className="w-fit min-w-fit p-0 bg-transparent border-none shadow-none">
              {languageData
                .filter((item) => item !== language)
                .map((value, index) => (
                  <MenuItem
                    onClick={() => {
                      setLanguage(value);
                      localStorage.setItem('language',value)
                    }}
                    key={index}
                    className="font-poppins font-semibold text-black text-xl text-center uppercase p-0 w-fit bg-transparent focus:bg-transparent hover:bg-transparent active:bg-transparent focus:text-black hover:text-black active:text-black"
                  >
                    {value}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
