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

interface Props {
  language: string;
  setLanguage:React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ language, setLanguage }: Props) => {
  return (
    <div className="sm:relative w-full sm:w-3/4 flex flex-col items-center gap-2">
      <div className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-7xl text-transparent bg-gradient-to-r bg-clip-text from-white to-[#cc1e28] to-10%">
        Pundi Craft
      </div>
      <Typography className="font-poppins font-normal text-black text-base text-center">
        {language==='en'
          ? "Aspiration, Determination, and Creation from Within, Rooted in Indonesian Culture"
          : "Asa, Karsa, Karya dari dalam diri yang berbudaya Indonesia"}
      </Typography>
      <Menu placement="bottom-end">
        <MenuHandler className='sm:!absolute top-0 sm:-right-10 xl:right-0 p-0 bg-transparent flex gap-1 shadow-none hover:shadow-none'>
          <Button>
            <FiGlobe size={30} color="black" />
            <Typography className="font-poppins font-semibold text-black text-xl text-center uppercase">{language}</Typography>
          </Button>
        </MenuHandler>
        <MenuList className="w-fit min-w-fit p-0 bg-transparent border-none shadow-none">
          {languageData
            .filter((item) => item !== language)
            .map((value, index) => (
              <MenuItem onClick={()=>{setLanguage(value)}} key={index} className="font-poppins font-semibold text-black text-xl text-center uppercase p-0 w-fit bg-transparent focus:bg-transparent hover:bg-transparent active:bg-transparent focus:text-black hover:text-black active:text-black">{value}</MenuItem>
            ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Header;
