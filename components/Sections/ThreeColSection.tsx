import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ThreeColSectionProps {
  title1: string;
  description1: string;
  image1: string;
  title2: string;
  description2: string;
  image2: string;
  title3: string;
  description3: string;
  image3: string;
}

const ThreeColSection: React.FC<ThreeColSectionProps> = ({
  title1,
  description1,
  image1,
  title2,
  description2,
  image2,
  title3,
  description3,
  image3,
}) => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container py-4 mx-auto my-0 ">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <Link href={'/'} className=" bg-white rounded-md  hover:border-b-8 border border-orange-500 hover:border-orange-500 p-4">
                <Image
                  className="w-full rounded-lg mb-4"
                  src={image1}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-zinc-900 mb-2">
                  {title1}
                </h2>
                <p className="text-sm text-zinc-900 mb-4 line-clamp-2">{description1}</p>
              </Link>
              <Link href={'/'} className=" bg-white rounded-md  hover:border-b-8 border border-orange-500 hover:border-orange-500 p-4">
                <Image
                  className="w-full rounded-lg mb-4"
                  src={image2}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-zinc-900 mb-2">
                  {title2}
                </h2>
                <p className="text-sm text-zinc-900 mb-4 line-clamp-2">{description2}</p>
              </Link>
              <Link href="/" className=" bg-white rounded-md hover:border-b-8 border border-orange-500 hover:border-orange-500 p-4">
                <Image
                  className="w-full rounded-lg mb-4"
                  src={image3}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-zinc-900 mb-2">
                  {title3}
                </h2>
                <p className="text-sm text-zinc-900 mb-4 line-clamp-2">{description3}</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreeColSection;
