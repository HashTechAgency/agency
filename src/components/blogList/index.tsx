"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DebouncedSearchInput from "../input/InputDebonce";
import { Category, CategoryListResponse, NewsItem, NewsListResponse } from "@/lib/type";

function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="rounded-3xl">
      {/* Фото */}
      <Skeleton className="w-full aspect-[84/46] rounded-[24px]" />

      <div className="pt-[16px] space-y-2">
        {/* Дата */}
        <Skeleton className="w-24 h-4" />

        {/* Заголовок строки */}
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-3/4 h-5" />
      </div>
    </div>
  );
}

const Blog = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Search:", debouncedValue);
    }
  }, [debouncedValue]);

  const [news, setNews] = useState<NewsItem[]>([]);
  const [Categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get<NewsListResponse>(
          "https://hashtechkg.pythonanywhere.com/api/v1/news/"
        );
        setNews(res.data.results);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchCategory = async () => {
      try {
        const res = await axios.get<CategoryListResponse>(
          "https://hashtechkg.pythonanywhere.com/api/v1/categories/"
        );
        setCategories(res.data.results);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = "https://hashtechkg.pythonanywhere.com/api/v1/news/";

        if (categoryParam) {
          url += `?category=${categoryParam}`;
        }
        if (searchParam) {
          url += categoryParam
            ? `&search=${searchParam}`
            : `?search=${searchParam}`;
        }

        const res = await axios.get<NewsListResponse>(url);
        setNews(res.data.results);
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [searchParams]);

  const categoryParam = searchParams.get("category"); // возвращает string | null
  const searchParam = searchParams.get("search") ?? "";

  return (
    <section className="min-h-[40vh]">
      <div className="my-container">
        <div className="flex justify-between items-center pt-[50px] pb-[20px] ">
          <h1 className="text-5xl leading-[120%] max-[550px]:text-4xl font-semibold font-(family-name:--second-family)">
            Блог HashTech Agency
          </h1>
          <div className="border h-12 max-w-[300px] w-full border-[#d7d3d3] rounded-[20px] flex justify-between items-center pr-3">
            <DebouncedSearchInput
              className="w-full h-full px-3 focus:outline-0"
              placeholder="поиск..."
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#d7d3d3"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
        </div>
        <ul className="flex items-center gap-4 overflow-x-auto overflow-y-clip no-scrollbar">
          {!loading ? (
            <li>
              <Link
                className={`block px-6 py-3 w-[125px] rounded-[16px] ${
                  !Number(categoryParam)
                    ? "bg-[#2cb7c6] text-white"
                    : "bg-[#f5f5f5] text-black  hover:bg-[#2cb7c6] hover:text-white"
                }`}
                href={`/blog/`}
              >
                Все статьи
              </Link>
            </li>
          ) : (
            ""
          )}

          {loading ? (
            <>
              <Skeleton className="w-[130px] h-[45px] !rounded-2xl" />
              <Skeleton className="w-[130px] h-[45px] !rounded-2xl" />
              <Skeleton className="w-[130px] h-[45px] !rounded-2xl" />
              <Skeleton className="w-[130px] h-[45px] !rounded-2xl" />
              <Skeleton className="w-[130px] h-[45px] !rounded-2xl" />
            </>
          ) : (
            Categories.map((item, i) => {
              if (item.count === 0) return;
              return (
                <li key={i}>
                  <Link
                    className={`block px-6 py-3 rounded-[16px] ${
                      Number(categoryParam) === item.id ||
                      (!categoryParam && item.id === 0)
                        ? "bg-[#2cb7c6] text-white"
                        : "bg-[#f5f5f5] text-black hover:bg-[#2cb7c6] hover:text-white"
                    }`}
                    href={`/blog/?category=${item.id}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })
          )}
        </ul>

        <div className="grid grid-cols-3 gap-[20px] pt-[20px] max-[1024px]:grid-cols-2 max-[550px]:grid-cols-1">
          {loading ? (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : (
            news.map((item, i) => {
              const date = new Date(item.created_at);

              const formatted = date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
              return (
                <div key={i} className="rounded-3xl">
                  <div className="rounded-[24px_24px_0_0] aspect-[84/46] w-full">
                    <Image
                      width={0}
                      height={0}
                      className="w-full h-full object-cover object-top rounded-[24px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="pt-[16px]">
                    <span className="text-[#b6b2b2]">{formatted}</span>
                    <h4 className="text-[18px] font-medium break-words hover:decoration-1 underline cursor-pointer line-clamp-3">
                      <Link href={`/blog/${item.id}`}>{item.name}</Link>
                    </h4>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
