import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <section className="pt-[100px] pb-[198px] max-[769px]:pt-[60px] max-[769px]:pb-[100px]">
      <div className="my-container grid grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))]  max-[1024px]:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] max-[769px]:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[48px_24px]">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="">
            <div className="w-full aspect-[47/46] rounded">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src="/img/cards.png"
                alt=""
              />
            </div>
            <div className="pt-[24px]">
              <h6 className="text-[18px] font-(family-name:--font-family) leading-[156%] text-[#213c49] text-bold">
                Разработали сайт для риэлтора, увеличив число обращений на 40%
              </h6>
              <p className="py-3 text-[14px] font-(family-name:--font-family) leading-[171%] text-[#213c49] ">
                Эффективный лендинг для агентства недвижимости
              </p>
              <div className="flex gap-1 flex-wrap">
                <button className="cursor-pointer rounded-[20px] border border-[rgba(14,_124,_136,_0.25)] px-[14px] py-2 text-[#213c49] text-light font-(family-name:--third-family)">
                  Landing
                </button>
                <button className="cursor-pointer rounded-[20px] border border-[rgba(14,_124,_136,_0.25)] px-[14px] py-2 text-[#213c49] text-light font-(family-name:--third-family)">
                  Маркетинг
                </button>
                <button className="cursor-pointer rounded-[20px] border border-[rgba(14,_124,_136,_0.25)] px-[14px] py-2 text-[#213c49] text-light font-(family-name:--third-family)">
                  Недвижимость
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-container !pt-[67px]">
        <button className="flex cursor-pointer justify-center items-center gap-[45px] max-[480px]:text-[16px] max-[480px]:gap-4 w-full py-[33px] border border-[#0e7c88] rounded-[20px] text-[24px] text-[#0e7c88] text-extrabold">
          Посмотреть все работы
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
        </button>
      </div>
    </section>
  );
};

export default Cards;
