import React from "react";

const HomePage = () => {
  return (
    <section
      className=" bg-no-repeat bg-center  max-[1024px]:overflow-hidden max-[1024px]:bg-[position:center_150px]"
      style={{ backgroundImage: "url(/img/home-bg.png" }}
    >
      <div className="my-container h-[703px] max-[1600px]:overflow-x-hidden max-[1600px]:overflow-y-clip flex items-end justify-between max-[1024px]:flex-col max-[1024px]:h-auto  max-[1024px]:items-center max-[1024px]:text-center ">
        <div className="max-w-[545px] max-[1024px]:max-w-screen ">
          <h1 className="text-[54px] max-w-[545px] max-[1024px]:max-w-full leading-[114%] text-extrabold max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:w-full max-[480px]:text-[44px] max-[400px]:text-[32px]">
            <span className="font-(family-name:--font-family) ">Создаём сайты</span>
            <span className="font-(family-name:--font-family) text-[#2cb7c6]">“под ключ”</span>
            <span className=" font-thin"> для роста вашего бизнеса</span>
          </h1>
          <div className="font-(family-name:--font-family) pt-4 pb-10  text-[#2a2a3c]">
            <h4 className="font-bold">Сайты, которые работают на вас:</h4>
            <h4 className="font-normal">
              быстрая разработка, SEO и привлечение клиентов
            </h4>
          </div>
          <div className="flex items-center max-[1024px]:hidden gap-8 max-[1200px]:flex-col-reverse max-[1200px]:items-start">
            <button className="bg-[#02c5c3] rounded-[12px] flex items-center  p-[19px_23px]">
              <img src="/svg/home-btn-1.svg" alt="" />
              <div className="flex-1"></div>
              <span className="pl-[22px]  pr-[14px] text-[14px] text-white">
                <span className="font-bold">Получить бесплатную</span> <br />
                <span className="font-medium">консультацию</span>
              </span>
              <img className="self-start" src="/svg/home-btn-2.svg" alt="" />
            </button>
            <div className="text-[#2a2a3c] max-w-[225px] text-[14px]">
              <span className="font-extrabold">
                96% компаний теряет до 99% потенциальных клиентов,{" "}
              </span>
              <span> из-за не продающего сайта</span>
            </div>
          </div>
        </div>
        <div className="max-w-[55%] max-[1024px]:max-w-full max-[1200px]:max-w-[50%] w-full object-[77/67] relative">
          <img src="img/home-bg-2.png" alt="" className="scale-125 max-[1024px]:scale-125" />
          <div className="absolute top-0 right-[200px] max-[1300px]:-top-[100px] max-[1024px]:top-0  max-[1024px]:right-[30px] max-[480px]:scale-75 max-[480px]:-right-[30px]">
            <div className="relative">
              <img src="img/home-img-1.png" alt="" />
              <div className="absolute top-[115px] text-center left-[50%] -translate-x-[50%]">
                <h2 className="font-(family-name:--font-family) text-bold text-2xl text-[#2a2a3c]">
                  +10
                </h2>
                <span className=" font-(family-name:--font-family) text-normal text-[12px] text-[#2a2a3c]">
                  лет в маркетинге
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[50%] -translate-y-[50%] right-[0] max-[1024px]:top-[80%] max-[1024px]:right-[100px] max-[480px]:top-[130%] max-[480px]:right-0">
            <div className="relative">
              <img src="img/home-img-2.png" alt="" />
              <div className="absolute top-[115px] text-center left-[50%] -translate-x-[50%]">
                <h2 className="font-(family-name:--font-family) text-bold text-2xl text-[#2a2a3c]">
                  +250
                </h2>
                <span className=" font-(family-name:--font-family) text-normal text-[12px] text-[#2a2a3c]">
                  выполненных проектов
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[100px] max-[1300px]:left-0 max-[1300px]:bottom-0  left-[100px] max-[480px]:scale-75 max-[480px]:!-left-10 max-[480px]:-bottom-40">
            <div className="relative">
              <img src="img/home-img-3.png" alt="" />
              <div className="absolute top-[115px] text-center left-[50%] -translate-x-[50%]">
                <h2 className="font-(family-name:--font-family) text-bold text-2xl text-[#2a2a3c]">
                  +250
                </h2>
                <span className=" font-(family-name:--font-family) text-normal text-[12px] text-[#2a2a3c]">
                  выполненных проектов
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-center max-[1024px]:pt-[100px] gap-8 max-[1024px]:flex max-[560px]:flex-col max-[480px]:pt-[220px]">
            <button className="bg-[#02c5c3] rounded-[12px] flex items-center  p-[19px_23px]">
              <img src="/svg/home-btn-1.svg" alt="" />
              <div className="flex-1"></div>
              <span className="pl-[22px]  pr-[14px] text-[14px] text-white">
                <span className="font-bold">Получить бесплатную</span> <br />
                <span className="font-medium">консультацию</span>
              </span>
              <img className="self-start" src="/svg/home-btn-2.svg" alt="" />
            </button>
            <div className="text-[#2a2a3c] max-w-[225px] text-[14px]">
              <span className="font-extrabold">
                96% компаний теряет до 99% потенциальных клиентов,{" "}
              </span>
              <span> из-за не продающего сайта</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HomePage;
