import Image from "next/image";
import React from "react";

const Express = () => {
  return (
    <section className="my-container max-[1024px]:overflow-x-hidden max-[1024px]:overflow-y-clip ">
      <div className="flex justify-center -translate-x-[50px]   max-[1024px]:scale-125 max-[1024px]:-translate-x-20 max-[769px]:-translate-x-5 max-[769px]:scale-[1.15]">
        <div className="relative mr-[110px]">
          <Image
            width={100}
            height={100}
            className="w-auto"
            src="/img/express-1.png"
            alt=""
          />
          <Image
            width={100}
            height={100}
            className="w-auto min-h-[652px] max-[1024px]:!min-h-[120%] max-[1024px]:max-h-[120%] max-[1024px]:h-[120%] absolute top-0 left-full "
            src="/img/express-2.png"
            alt=""
          />
        </div>
        <div className="pt-[80px] relative z-20 max-[769px]:w-[80%] max-[769px]:-translate-x-[20%] max-[769px]:translate-y-[15%]">
          <Image
            width={100}
            height={100}
            className="w-auto"
            src="/img/express-3.png"
            alt=""
          />
          <div className="pl-[79px] block max-[1024px]:hidden">
            <div className="flex gap-[25px] mb-[25px]">
              <div className="flex rounded-[5px] items-center gap-4">
                <span className="text-[40px] text-extrabold text-[#2a2a3c] font-(family-name:--font-family)">
                  5
                </span>
                <span className="border-[rgba(184,_184,_184,_0.3)] border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
                  дней
                </span>
              </div>
              <div className="flex rounded-[5px] items-center gap-4">
                <span className="text-[40px] text-extrabold text-[#2a2a3c] font-(family-name:--font-family)">
                  0
                </span>
                <span className="border-[rgba(184,_184,_184,_0.3)] border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
                  правок
                </span>
              </div>
              <div className="flex rounded-[5px] items-start gap-4 ">
                <div className="flex flex-col items-end relative ">
                  <span className="text-[40px] text-extrabold  text-[#2a2a3c] font-(family-name:--font-family)">
                    15 900
                  </span>
                  <span className="text-extrabold text-[24px] absolute top-full text-[#80808c] font-(family-name:--font-family) !line-through">
                    39 900
                  </span>
                </div>
                <span className="border-[rgba(184,_184,_184,_0.3)] block  border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
                  сомов
                </span>
              </div>
            </div>
            <div className="pt-[40px] flex gap-[55px] items-start">
              <div className="">
                <span className="text-[34px] pb-4 text-extrabold leading-[91%] text-[#2a2a3c] font-(family-name:--font-family)">
                  Акция <br /> дня
                </span>
                <p className="text-[16px] max-w-[177px] text-normal text-[rgba(42,_42,_60,_0.58)] font-(family-name:--font-family)">
                  Запустим сайт за рекордные сроки без компромиссов в качестве
                  дизайн, который продаёт: быстро, эффективно, с гарантией
                  результата
                </p>
              </div>
              <div className="flex flex-col gap-[18px]">
                <div className="relative cursor-pointer">
                  <Image width={100} height={100} className="w-auto" src="svg/express-1.svg" alt="" />
                  <input
                    placeholder="Ваш телефон"
                    className="absolute w-[calc(100%-74px)] outline-none focus:outline-none focus:ring-0 h-full block top-[50%] text-[#2a2a3c] text-[14px] -translate-y-[50%] left-[73px] font-(family-name:--font-family)"
                    type="text"
                  />
                </div>
                <div className="relative cursor-pointer">
                  <Image  width={100} height={100} className="w-auto" src="svg/express-2.svg" alt="" />
                  <span className="absolute  top-[50%] text-[#fff] leading-[112%] text-[16px] -translate-[50%] left-[50%] font-(family-name:--second-family)">
                    Отправить заявку
                  </span>
                </div>
                <p className="text-center text-[#c5c5c5] text-[14px] font-(family-name:--font-family)">
                  Нажимая на кнопку, вы соглашаетесь  <br />
                  <span className="!underline ">
                    с политикой конфиденциальности
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative z-50 max-[1024px]:flex flex-col items-center pt-30">
        <div className="flex gap-[25px] mb-[25px] max-[769px]:flex-wrap max-[769px]:justify-center">
          <div className="flex rounded-[5px] items-center gap-4">
            <span className="text-[40px] text-extrabold text-[#2a2a3c] font-(family-name:--font-family)">
              5
            </span>
            <span className="border-[rgba(184,_184,_184,_0.3)] border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
              дней
            </span>
          </div>
          <div className="flex rounded-[5px] items-center gap-4">
            <span className="text-[40px] text-extrabold text-[#2a2a3c] font-(family-name:--font-family)">
              0
            </span>
            <span className="border-[rgba(184,_184,_184,_0.3)] border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
              правок
            </span>
          </div>
          <div className="flex rounded-[5px] items-start gap-4 ">
            <div className="flex flex-col items-end relative ">
              <span className="text-[40px] text-extrabold  text-[#2a2a3c] font-(family-name:--font-family)">
                15 900
              </span>
              <span className="text-extrabold text-[24px] absolute top-full text-[#80808c] font-(family-name:--font-family) !line-through">
                39 900
              </span>
            </div>
            <span className="border-[rgba(184,_184,_184,_0.3)] block  border py-[10px] px-[19px] rounded-[5px] text-[18px] text-[#2a2a3c] font-(family-name:--font-family)">
              сомов
            </span>
          </div>
        </div>
        <div className="pt-[40px] flex gap-[55px] items-start max-[769px]:flex-col max-[769px]:w-full max-[769px]:text-center max-[769px]:items-center">
          <div className="">
            <span className="text-[34px] pb-4 block text-extrabold leading-[91%] text-[#2a2a3c] font-(family-name:--font-family)">
              Акция <br /> дня
            </span>
            <p className="text-[16px] max-w-[177px] text-normal text-[rgba(42,_42,_60,_0.58)] font-(family-name:--font-family) max-[769px]:max-w-[80%] mx-auto">
              Запустим сайт за рекордные сроки без компромиссов в качестве
              дизайн, который продаёт: быстро, эффективно, с гарантией
              результата
            </p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="relative">
              <Image  width={100} height={100}  className="w-auto" src="svg/express-1.svg" alt="" />
              <input
                placeholder="Ваш телефон"
                className="absolute w-full h-full block top-[50%] text-[#2a2a3c] text-[14px] -translate-y-[50%] left-[73px] font-(family-name:--font-family)"
                type="text"
              />
            </div>
            <div className="relative">
              <Image  width={100} height={100} className="w-auto" src="svg/express-2.svg" alt="" />
              <span className="absolute  top-[50%] text-[#fff] leading-[112%] text-[16px] -translate-[50%] left-[50%] font-(family-name:--second-family)">
                Отправить заявку
              </span>
            </div>
            <p className="text-center text-[#c5c5c5] text-[14px] font-(family-name:--font-family)">
              Нажимая на кнопку, вы соглашаетесь  <br />
              <span className="!underline ">
                с политикой конфиденциальности
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Express;
