"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { categoriesData } from "@/app/utils/data";
import { categoriesSlug } from "@/app/utils/data";
import { yearsData } from "@/app/utils/data";



const GenuineParts = ({ params }) => {
  const pathname = usePathname();
  const tempVariable = params.toyota;
  console.log('temp variable:', tempVariable);
  const tagsArray = findTags(categoriesData, tempVariable);

  // Function to check and log tags
  function findTags(categoriesData, tempVariable) {
    const matchingTags = [];
    for (const category of categoriesData) {
      if (category.name === tempVariable) {
        matchingTags.push(...category.tags);
      }
    }
    return matchingTags;
  }
  console.log("Tags Array:", tagsArray);
  // const carBrand = 'Toyota';

  const categoriesByLetter = tagsArray.reduce((acc, category) => {
    const firstLetter = category[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(category);
    return acc;
  }, {});
  // Call the function
  // const sortedCategoriesSlug = categoriesSlug.sort();

  // Call the categoriesByLetter function and pass the categoriesSlug and params to it
  //  const categorizedCategories = categoriesByLetter(categoriesSlug, params);

  const categoriesList = Object.entries(categoriesByLetter).map(
    ([letter, categories]) => (
      <div
        key={letter}
        className="w-full h-auto flex flex-wrap justify-start items-center text-[#009DD7]"
      >
        <h2 className="font-bold mr-4">{letter}</h2>
        {categories.map((category) => (
          <Link
            href={`${pathname}/${category}`}
            key={category}
            className="mr-4 my-2 hover:font-semibold"
          >
            {category}
          </Link>
        ))}
      </div>
    )
  );
  return (
    <>
      {/* main container */}
      <div className="lg:px-32 md:px-14 px-4">
        <div className="w-full h-auto flex flex-col gap-4 border-y-2 my-4 py-4">
          {/* heading */}
          <div className="w-auto h-auto flex flex-col lg:flex-row justify-start lg:items-center items-start gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium">Toyota</h1>
              <span>1966 - 2023</span>
            </div>
            <div className=" lg:flex hidden gap-4">
              <input
                type="search"
                name=""
                id=""
                placeholder="VIN or Frame number"
                className="rounded-md border-black border text-gray-600 flex-shrink-5"
              />
              <button className="py-2 px-6 border rounded-md bg-[#EFF2F6] flex-shrink-5">
                Find
              </button>
            </div>
          </div>

          {/* cars years  */}
          <div className="w-full h-auto flex flex-wrap items-center gap-4">
            <button className="bg-[#E1F2FD] p-1 text-sm text-gray-600">
              All
            </button>

            {/* years */}
            {yearsData?.map((data, index) => {
              return (
                <button
                  key={index}
                  className="hover:bg-[#FFF7E1] hover:text-blue-400 p-1 text-sm text-gray-600"
                >
                  <span className="border-b-2 border-black border-dotted">
                    {data.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* categories slug */}
        <div>{categoriesList}</div>
      </div>
    </>
  );
};

export default GenuineParts;
