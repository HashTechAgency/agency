"use client";

import { NewsItem, NewsListResponse } from "@/lib/type";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
}
const Cards = () => {
  const [News, setNews] = useState<NewsItem[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios<NewsListResponse>(
          "https://hashtechkg.pythonanywhere.com/api/v1/news/?ordering=-&page_size=9"
        );
        setNews(res.data.results);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="pt-[100px] pb-[198px] max-[769px]:pt-[60px] max-[769px]:pb-[100px]">
      <div className="my-container grid grid-cols-[repeat(auto-fit,minmax(370px,_1fr))]  max-[1024px]:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] max-[769px]:grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-[48px_24px]">
        {!loading
          ? News?.map((item, index) => (
              <div key={index} className="">
                <div className="w-full aspect-[47/46] rounded-[20px]">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full object-cover  rounded-[20px]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="pt-[24px]">
                  <h6 className="text-[18px] font-(family-name:--font-family) leading-[156%] text-[#213c49] text-bold line-clamp-3 break-words">
                    {item.name}
                  </h6>
                  <p className="my-3 text-[14px] font-(family-name:--font-family) leading-[171%] text-[#213c49] line-clamp-1 break-words">
                    {item.description}
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    {item.tags.map((item) => (
                      <button
                        key={item.id}
                        className="cursor-pointer rounded-[20px] border border-[rgba(14,_124,_136,_0.25)] px-[14px] py-2 text-[#213c49] text-light font-(family-name:--third-family)"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : [...Array(9)].map((item, index) => (
              <div key={index} className="">
                <div className="w-full aspect-[47/46] rounded">
                  <Skeleton className="w-full h-full" />
                </div>
                <div className="pt-[24px]">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-[40%] h-4 mt-4" />
                  <Skeleton className="w-full h-3 mt-6" />
                  <div className="flex gap-4 pt-[18px] flex-wrap">
                    <Skeleton className="w-[110px] h-[39px] !rounded-2xl" />
                    <Skeleton className="w-[140px] h-[39px] !rounded-2xl" />
                    <Skeleton className="w-[150px] h-[39px] !rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
      </div>
      <Link href={"/blog"} className="my-container block !pt-[67px]">
        <div className="flex cursor-pointer justify-center items-center gap-[45px] max-[480px]:text-[16px] max-[480px]:gap-4 w-full py-[33px] border border-[#0e7c88] rounded-[20px] text-[24px] text-[#0e7c88] text-extrabold">
          Посмотреть все статьи
          <svg
            width="25"
            height="17"
            viewBox="0 0 25 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000212428 8.5109H23M23 8.5109L16.1742 15.3367M23 8.5109L16.1742 1.68506"
              stroke="#0E7C88"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
};

export default Cards;
