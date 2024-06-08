import { Data } from "@/_interfaces/data.interface";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FiX } from "react-icons/fi";

interface Props {
  name: string;
  handleName: (text: string) => void;
  data: Data;
}

const ModalDetail = ({ name, handleName, data }: Props) => {
  return (
    <Dialog
      size="lg"
      open={name === data.name}
      handler={handleName}
      className=" absolute sm:relative bottom-0 sm:p-4 pb-20 pt-4 px-4 w-screen max-w-full h-screen m-0 rounded-b-none rounded-t-3xl sm:rounded-2xl"
      dismiss={{ enabled: false }}
      animate={{ mount: { y: 0 }, unmount: { y: 100 } }}
    >
      <DialogHeader className="flex justify-between p-0">
        <Typography className="font-poppins font-semibold text-lg text-black">
          {data.name}
        </Typography>
        <FiX
          onClick={() => {
            handleName("");
          }}
          className="cursor-pointer"
        />
      </DialogHeader>
      <DialogBody className="flex flex-col sm:flex-row justify-center items-center gap-4 px-0 sm:px-5">
        <Image
          src={data.image}
          alt={data.name}
          className="object-contain w-52 h-w-52"
        />
        <div className="overflow-auto h-96 sm:h-fit p-2">
          <Typography className="font-poppins font-normal text-base text-black text-justify">
            {data.id}
          </Typography>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ModalDetail;
