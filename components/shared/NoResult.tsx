import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src={"/assets/images/DOOR.jpg"}
        alt="No result found"
        width={270}
        height={200}
        className="block rounded-full object-contain"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-[#4c4b4b] px-4 py-3 text-light-900 hover:bg-[#ffffff] hover:text-dark-400 dark:bg-[#4c4b4b] dark:text-light-900 dark:hover:bg-primary-500 dark:hover:text-dark-500">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
