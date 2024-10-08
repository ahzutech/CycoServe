"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';



const menuItems = [
  {
    id:"1",
    title:"The Agency",
    url:"/about",
  },
  {
    id:"2",
    title:"Why Choose Us?",
    url:"/why-choose-us",
  },
  {
    id:"3",
    title:"Services",
    url:"/services",
  },
  {
    id:"4",
    title:"Podcasts",
    url:"/podcasts",
  },
  {
    id:"5",
    title:"Contact Us",
    url:"/contact-us",
  },
]

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="menu">
        <ul className="flex justify-between items-center gap-8 list-none">
          {/* Map over menu items to generate list items */}
          {menuItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Use Link component to navigate */}
              <Link href={item.url} className='hover:bg-orange-500'>
                <p className={`${scrolled ? "text-zinc-800 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-xl px-4 py-1 rounded-full hshadow-xl" : "text-white hover:bg-orange-500 hover:bg-opacity-15 rounded-full py-1  px-4"}`}>
                  {item.title}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
