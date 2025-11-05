import Image from "next/image";
import React from "react";

const Technical = () => {
  return (
    <section>
      <div className="flex relative items-start justify-between my-container max-[1440px]:flex-col">
        <div className="relative z-50 max-[1440px]:w-full">
          <div className="pb-[117px] max-[1440px]:pb-[30px]">
            <h2 className="font-(family-name:--font-family) text-[90px] max-[480px]:text-[32px] max-[1440px]:text-[56px] max-[1024px]:text-[48px] text-extrabold uppercase text-[#30424a] leading-[101%]">
              Отправьте нам <br /> техническое <br /> задание{" "}
            </h2>
            <p className="max-w-[358px] pt-[9px] font-(family-name:--font-family) text-[16px] uppercase text-[#30424a] leading-[150%]">
              Мы познакомимся, зададим вопросы, расскажем всё о наших процессах
              и дадим предварительную оценку вашего проекта
            </p>
          </div>
          <div className="max-[769px]:hidden">
            <Image
              width={100}
              height={100}
              className="w-auto"
              src="/img/technical-2.png"
              alt=""
            />
            <p className="max-w-[235px] pt-[28px] pb-[24px]">
              Это Александр, наш менеджер. Он с радостью ответитна все ваши
              вопросы
            </p>
            <button className="cursor-pointer  font-(family-name:--second-family) text-[16px] text-[#2a2a3c] border border-[#2a2a3c] px-[32px] py-[14px] rounded-[15px] flex items-center gap-2">
              <svg
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.06608 13.053C8.93952 10.434 12.8536 8.70768 14.813 7.87237C20.4067 5.48962 21.5692 5.07618 22.3286 5.06268C22.4942 5.05931 22.8661 5.10149 23.1083 5.30231C23.3114 5.47106 23.3676 5.70056 23.3942 5.86087C23.4208 6.02118 23.4551 6.38737 23.4286 6.67256C23.1255 9.93449 21.813 17.8489 21.1473 21.5006C20.863 23.0464 20.3083 23.5644 19.7692 23.6167C18.6005 23.7264 17.7114 22.8236 16.5786 22.0642C14.8051 20.8746 13.8036 20.1337 12.0833 18.9727C10.0942 17.6295 11.3833 16.8921 12.5176 15.6872C12.8145 15.3716 17.9676 10.5724 18.0676 10.1353C18.0801 10.0813 18.0911 9.87881 17.9739 9.77249C17.8567 9.66449 17.6817 9.70162 17.5567 9.73031C17.3786 9.77249 14.5473 11.6878 9.05983 15.4813C8.25671 16.0466 7.52858 16.3217 6.87546 16.3082C6.15671 16.2913 4.7739 15.8897 3.74421 15.5488C2.48327 15.1269 1.48171 14.9076 1.56765 14.1937C1.61452 13.8225 2.11452 13.4428 3.06765 13.053H3.06608Z"
                  fill="#2A2A3C"
                />
              </svg>
              Написать в телеграм
            </button>
          </div>
        </div>
        <div className="max-[1440px]:flex max-[769px]:order-1 max-[1440px]:p-10 max-[769px]:mt-0 max-[1024px]:flex-col max-[1440px]:gap-[100px] max-[1024px]:gap-[20px] max-[1440px]:w-full max-[1440px]:max-w-[calc(100vw-30px)] max-[1440px]:min-w-[calc(100vw-30px)] max-w-[377px] relative z-50 p-[20px_24px] mt-[160px] rounded-[20px] bg-[#f6f6f6] max-[1440px]:mt-[60px] ">
          <div className="pb-[33px] max-[1024px]:text-center">
            <h3 className="max-[1024px]:mb-[14px] max-[480px]:text-[28px] font-(family-name:--font-family) max-[1024px]:text-[48px] pb-2 text-extrabold text-[37px] leading-[92%] text-[#2a2a3c]">
              Оставьте свои <br className="max-[1024px]:hidden" /> контакты
            </h3>
            <p className="font-(family-name:--font-family) text-[16px] leading-[124%] text-[#2a2a3c]">
              Оставьте свои контакты, и мы свяжемся с вами{" "}
              <br className="max-[1024px]:hidden" /> в ближайшее время
            </p>
          </div>
          <div className="flex flex-col gap-[10px]  flex-1 my-grid-areas">
            <div className="my-grid-areas-1">
              <input
                className="px-[24px] py-[16px] rounded-[10px] w-full    shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25),_0_1px_1px_0_rgba(0,_0,_0,_0.25),_0_4px_2px_0_rgba(0,_0,_0,_0.05)]"
                type="text"
                placeholder="Как вас зовут ?"
              />
            </div>
            <div className="my-grid-areas-2">
              <input
                className="px-[24px] py-[16px] rounded-[10px] w-full    shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25),_0_1px_1px_0_rgba(0,_0,_0,_0.25),_0_4px_2px_0_rgba(0,_0,_0,_0.05)]"
                type="text"
                placeholder="Телефон или месенджер"
              />
            </div>
            <div className="my-grid-areas-3">
              <textarea
                className="px-[24px] py-[16px] rounded-[10px] w-full  h-full  shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25),_0_1px_1px_0_rgba(0,_0,_0,_0.25),_0_4px_2px_0_rgba(0,_0,_0,_0.05)]"
                placeholder="Кратко опишите задачу"
                id=""
              ></textarea>
            </div>
            <div className="my-grid-areas-4">
              <button className="cursor-pointer shadow-[0_1px_0_0_rgba(0,_0,_0,_0.15)] relative py-[18px]  bg-[#01c6c4] rounded-[10px] w-full font-(family-name:--font3) text-[16px] text-[#f6f6f6]">
                <Image
                  width={100}
                  height={100}
                  className="w-auto absolute top-[-14px] left-[10px]"
                  src="/img/Technical-3.png"
                  alt=""
                />
                Написать нам
              </button>
            </div>
          </div>
        </div>
        <div className="absolute max-[769px]:static max-[769px]:w-full max-[769px]:translate-x-0 left-[50%] w-[40%] max-[1440px]:left-[unset] max-[1024px]:w-[70%] max-[1024px]:right-[0] max-[1024px]:translate-x-[40%] right-0 max-[1440px]:translate-0 max-[1440px]:top-[0px] top-[204px] translate-x-[-50%]">
          <Image
            width={100}
            height={100}
            className="w-auto max-[769px]:hidden"
            src="/img/technical.png"
            alt=""
          />
          <Image
            width={100}
            height={100}
            className="max-[769px]:block hidden w-full"
            src="/img/technical-0.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Technical;
