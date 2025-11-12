"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface NewsListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItem[];
}

export interface CategoryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

export interface NewsItem {
  id: number;
  category: Category;
  tags: Tag[];
  author: Author;
  created_at: string; 
  updated_at: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  views: number;
  is_published: boolean;
}

export interface Category {
  id: number;
  count: number;
  created_at: string;
  updated_at: string;
  name: string;
}

export interface Tag {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
}

export interface Author {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

const Blog = () => {
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

  return (
    <section className="min-h-[40vh]">
      <div className="my-container">
        <h1 className="pt-[50px] pb-[20px] text-5xl leading-[120%] max-[550px]:text-4xl font-semibold font-(family-name:--second-family)">
          Блог HashTech Agency
        </h1>
        <ul className="flex items-center gap-4 overflow-x-auto overflow-y-clip no-scrollbar">
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

          {loading ? (
            <p className="text-center mt-8 ">Загрузка...</p>
          ) : (
            Categories.map((item, i) => (
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
            ))
          )}
        </ul>

        <div className="grid grid-cols-3 gap-[20px] pt-[20px] max-[1024px]:grid-cols-2 max-[550px]:grid-cols-1">
          {loading ? (
            <p className="text-center mt-8">Загрузка...</p>
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
