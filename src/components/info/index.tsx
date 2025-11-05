"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface FaqItemProps {
  i: number;
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ i, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={i}
      className={`w-full rounded-[20px]  ${i % 2 !== 0 ? "bg-[#f6f6f6]" : ""} `}
    >
      <div
        className={`flex gap-[50px] justify-between items-start py-[48px] pl-[40px] pr-[122px] cursor-pointer transition-colors duration-300 max-[1000px]:px-[30px] max-[769px]:px-4 max-[769px]:py-[28px]`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex gap-[64px] max-[769px]:gap-[20px]">
          <span className="max-[580px]:hidden">
            <Image
              width={100}
              height={100}
              className="w-auto"
              src="/svg/info.svg"
              alt="info"
            />
          </span>

          <span
            className={`max-w-[422px] ${
              open || "!underline"
            } text-[#2A2A3C] leading-[150%] font-medium`}
          >
            {question}
          </span>
        </div>

        <div
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            width="22"
            height="13"
            viewBox="0 0 22 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-0.000784268 1.56238L1.51966 0.000388979L10.8293 9.28344L11.8222 8.29346L11.8163 8.29908L20.0877 0.0509718L21.6309 1.58933C19.3455 3.86936 12.9633 10.2341 10.8293 12.3613C9.2437 10.7814 10.7891 12.322 -0.000784268 1.56238Z"
              fill="#2A2A3C"
            />
          </svg>
        </div>
      </div>

      {open && (
        <>
          <div className="w-full h-[1px] bg-[#c3c3c3]"></div>
          <div className="pl-[104px] pr-[122px] max-[1024px]:pl-4 pt-[20px] max-[1024px]:pr-4 pb-[40px] text-[#2A2A3C] text-[14px] leading-[160%] animate-fadeIn max-[580px]:px-0">
            <p className="font-(family-name:--font-family) text-[16px] leading-[160%] text-[#30424a]">
              {answer}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const faqs = [
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
  {
    question:
      "Вопрос какой-то там, но скорее всего это нужно \n для СЕО-продвижения, ведь верно?",
    answer:
      "Предлагаем это путешествие для всех, кто оценит красоту дикой природы Камчатки, а также возможность увидеть своими глазами последствия Большого трещинного Толбачинского извержения. Вы посмотрите на застывшие лавовые и шлаковые поля, невероятный марсианский пейзаж Мертвого леса и совершите пешее восхождение на Плоский Толбачик.",
  },
];

const Info = () => {
  return (
    <section className="py-[120px]">
      <div className="my-container">
        <div className="flex justify-between items-center pb-[43px] max-[1024px]:flex-col max-[1024px]:items-start">
          <div className="flex gap-[38px] mb-[20px]">
            <span className="max-[769px]:hidden">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.92334" cy="6.92334" r="6.92334" fill="#2A2A3C" />
              </svg>
            </span>
            <h2 className="text-[56px] leading-[104%] max-[1024px]:text-[42px] max-[480px]:text-[32px] max-[1024px]: tracking-[-0.04em] uppercase text-[#2a2a3c] font-(family-name:--font-family)">
              <span className="text-bold">дополнительная</span>
              <br />
              <span className="text-min">информация</span>
            </h2>
          </div>
          <button className="cursor-pointer text-[14px] font-(family-name:--font-family) py-[20px] bg-[#ededed] shadow-[0_1px_0_0_rgba(0,_0,_0,_0.15)] rounded-xl gap-4  items-center flex px-4">
            Задайте свой вопрос эксперту
            <span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.88973 6.74693V8.88979C8.88973 9.67879 8.25016 10.3184 7.46117 10.3184H1.74692C0.957948 10.3184 0.318359 9.67879 0.318359 8.88979V3.17551C0.318359 2.38653 0.957948 1.74694 1.74692 1.74694H3.88976M6.38975 4.24693L10.3184 0.318438M10.3184 0.318438L7.10403 0.318359M10.3184 0.318438V3.53265"
                  stroke="#2A2A3C"
                  strokeWidth="0.63673"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-[30px]">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              answer={item.answer}
              i={i}
              question={item.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
