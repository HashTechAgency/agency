import Image from "next/image";
import React from "react";

const Characteristics = () => {
  return (
    <section className="relative w-full mt-[160px]  max-w-[2100px] mx-auto ">
      <div className="absolute w-full top-[-31px] right-0">
        <Image
          width={100}
          height={100}
          className="w-full max-[769px]:h-[900px]"
          src="img/Characteristics-2.png"
          alt=""
        />
      </div>
      <div className="absolute z-50 max-[1900px]:w-[80%] max-[769px]:top-[100px] right-[-168px] max-[1440px]:w-full max-[1440px]:right-[-30%] max-[1160px]:right-[-50%] max-[769px]:w-[100%] max-[769px]:right-[-0%] max-[560px]:w-[120%] max-[560px]:right-[-15%] max-[380px]:top-[100px]">
        <Image
          width={100}
          height={100}
          className="w-full"
          src="img/Characteristics-1.png"
          alt=""
        />
      </div>
      <div className="my-container relative ">
        <h2 className="relative z-50 font-(family-name:--font-family) text-[44px] max-[769px]:text-[28px] max-[440px]:text-[24px] leading-[118%] text-extrabold uppercase tracking-[0.01em] text-[#0e7c88]">
          7 характеристик <br />
          <span className="text-min text-[#2a2a3c]">
            веб-сайта, который <br /> у вас будет
          </span>
        </h2>
        <div className="mt-[364px] max-[1160px]:mt-[200px] max-[650px]:mt-[300px] max-[380px]:mt-[250px] max-[769px]:mt-[400px] grid grid-rows-[50px_32px_149px_30px_149px_78px_377px] max-[1060px]:grid-rows-[51px_196px_189px_379px_93px_214px_144px] max-[769px]:grid-rows-[266px_196px_189px_344px_245px_155px_180px] gap-x-4 gap-y-[33px] max-[480px]:flex max-[480px]:flex-col relative">
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[2/3] max-[769px]:col-[1/4] max-[1060px]:row-[2/3] max-[1060px]:col-[2/5]  p-4 flex flex-col border-[#0e7c88] border rounded-[20px] row-[2/4] col-[1/3]">
            <div className="flex-1"></div>{" "}
            <h5 className="pb-2 mt-auto font-(family-name:--font-family) text-extrabold text-[20px] leading-[150%] text-[#0e7c88]">
              Простой и логичный
            </h5>
            <p className="max-w-[230px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#2a2a3c]">
              Легко использовать как для пользователей, так и для
              администраторов. Контент обновляется за пару кликов
            </p>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[1/2] max-[769px]:col-[2/4] max-[1060px]:row-[1/3] max-[1060px]:col-[5/8] p-4 flex flex-col border-[#0e7c88] border rounded-[20px] bg-[#0e7c88] row-[1/4] col-[3/4]">
            <div className="flex-1"></div>{" "}
            <h3 className="pb-2 mt-auto  font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#fff]">
              Никто не будет <br /> ждать! 
            </h3>
            <p className="max-w-[188px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#fff]">
              Легко использовать как для пользователей, так и для
              администраторов. Контент обновляется за пару кликов
            </p>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[5/7] max-[769px]:col-[1/3] max-[1060px]:row-[5/8] max-[1060px]:col-[7/9] p-4 flex flex-col relative items-start border-[#0e7c88] border rounded-[20px] bg-[#0e7c88] row-[2/6] col-[5/6]">
            <div className="flex-1"></div>{" "}
            <div className="ml-auto absolute right-0 top-0">
              <Image
                width={100}
                height={100}
                className="w-auto"
                src="/img/Characteristics-3.png"
                alt=""
              />
            </div>
            <div className="relative z-50">
              <h3 className="pb-2 mt-auto font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#fff]">
                Под <br /> присмотром
              </h3>
              <p className="max-w-[188px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#fff]">
                Предаставляем тех поддержку 24/7 выручим в любой компитентной
                ситуации{" "}
              </p>
            </div>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[3/4] max-[769px]:col-[1/4] max-[1060px]:row-[3/4] max-[1060px]:col-[3/7] p-4 flex flex-col border-[#0e7c88] border rounded-[20px] row-[4/6] col-[2/4]">
            <div className="flex-1"></div>{" "}
            <h3 className="pb-2 mt-auto font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#0E7C88]">
              Делаем как для себя!
            </h3>
            <p className="max-w-[188px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#2A2A3C]">
              Ваша страница выглядит потрясающе на любом устройстве, в
              соответствии с концепцией UX/UI
            </p>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[8/9] max-[769px]:col-[1/4] max-[1060px]:row-[6/7] max-[1060px]:col-[1/7] p-4 flex flex-col border-[#0e7c88] border rounded-[20px] row-[3/5] col-[4/5]">
            <div className="flex-1"></div>{" "}
            <h3 className="pb-2 mt-auto  font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#0E7C88]">
              Волшебный инструмент!
            </h3>
            <p className="max-w-[188px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#2A2A3C]">
              Сайт, который не просто привлекает посетителей, а превращает их в
              реальных клиентов
            </p>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[4/5] max-[769px]:col-[1/4] max-[1060px]:row-[4/5] max-[1060px]:col-[5/9] p-4 flex flex-col border-[#0e7c88] border rounded-[20px] bg-[#0e7c88] row-[5/7] col-[4/5]">
            <div className="flex-1"></div>{" "}
            <h3 className="pb-2 mt-auto font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#fff]">
              Уникальность <br /> <span className="text-min">привлекает! </span>
            </h3>
            <p className=" font-(family-name:--font-family) leading-[143%] text-[14px] text-[#fff]">
              Предаставляем тех поддержку 24/7 выручим в любой компитентной
              ситуации{" "}
            </p>
          </div>
          <div className="max-[769px]:shadow-2xl max-[769px]:overflow-hidden max-[769px]:block max-[769px]:pl-4 max-[769px]:pt-4  max-[769px]:row-[6/8] max-[769px]:col-[2/4] max-[1060px]:row-[4/6] max-[1060px]:col-[1/5] p-4 flex flex-col relative items-start border-[#0e7c88] border rounded-[20px] bg-[#0e7c88] row-[6/8] col-[3/4]">
            <div className="flex-1"></div>{" "}
            <div className="ml-auto mr-[-2px] absolute right-0 top-0">
              <Image
                width={100}
                height={100}
                className="w-auto"
                src="/img/Characteristics-4.png"
                alt=""
              />
            </div>
            <div className="mt-[-15px] relative z-50">
              <h3 className="pb-2 mt-auto font-(family-name:--font-family) text-extrabold text-[28px] leading-[107%] text-[#fff]">
                Удивление <br />{" "}
                <span>
                  концентрирует <br /> внимание.
                </span>{" "}
              </h3>
              <p className="max-w-[188px] font-(family-name:--font-family) leading-[143%] text-[14px] text-[#fff]">
                Предаставляем тех поддержку 24/7 выручим в любой компитентной
                ситуации{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
