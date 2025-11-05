import Image from "next/image";
import Link from "next/link";
import React from "react";

const Approach = () => {
  return (
    <section className="pt-[120px] ">
      <div className="my-container">
        <div className="translate-x-[-400px] max-[1550px]:scale-x-[-1] max-[1600px]:mr-auto max-[1600px]:translate-x-[300px] max-[800px]:translate-x-[150px] max-[1024px]:w-[100%] max-[679px]:translate-x-10">
          <Image
            width={100}
            height={100}
            className="max-[1024px]:w-[150%] w-auto"
            src="/img/Approach.png"
            alt=""
          />
        </div>

        <div className="translate-x-[100px] translate-y-[-300px] max-[1024px]:translate-y-[-200px] max-[800px]:translate-y-[-100px] max-[1600px]:translate-x-0 max-[679px]:translate-0">
          <h2 className="font-(family-name:--font-family) text-extrabold tracking-[-0.04em] uppercase  text-[44px] max-[1024px]:text-[36px] max-[769px]:text-[32px] max-[480px]:text-[24px] leading-[100%] ">
            <span className="text-[#2a2a3c]">
              К каждому клиенту <br /> применяется
            </span>{" "}
            <br />
            <span className="text-[#0e7c88]">индивидуальный подход</span> <br />
            <span className="text-[#2a2a3c]">И ПРОФЕССИОНАЛЬНОЕ  </span>
            <br />
            <span className="text-[#0e7c88]">ИСПОЛНЕНИЕ</span>
            <span className="text-[#b1b6b8]">
              {" "}
              Среди широкого <br /> разнообразия всех проектов
            </span>
          </h2>
          <div className="">
            <div className="py-[48px] flex gap-[10px] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[500px]:grid-cols-1">
              <div className="bg-[#0e7c88] max-[1024px]:col-span-2 max-[500px]:col-span-1 rounded-[10px] p-[38px_23px_48px]">
                <h4 className="pb-[20px] text-extrabold font-(family-name:--font-family) text-[24px] max-[769px]:text-[18px] leading-[113%] tracking-[-0.04em] uppercase text-white">
                  Прозрачно рассчитываем стоимость проекта
                </h4>
                <p className="max-w-[241px] font-(family-name:--font-family) text-[14px] leading-[157%] text-white">
                  Зафиксировали цену каждого блока на сайте. что позволяет гибко
                  управлять стоимостью проекта
                </p>
              </div>
              <div className="border border-[rgba(217,_217,_217,_0.45)] rounded-[10px] p-[38px_23px_48px]">
                <h4 className="pb-[20px] text-extrabold font-(family-name:--font-family) text-[24px] max-[769px]:text-[18px] leading-[113%] tracking-[-0.04em] uppercase">
                  Умеем подстраиваться под клиента
                </h4>
                <p className="max-w-[241px] font-(family-name:--font-family) text-[14px] leading-[157%] ">
                  Находим альтернативные решения в процессе проекта
                  взаимодействия без вреда для результата
                </p>
              </div>
              <div className="border border-[rgba(217,_217,_217,_0.45)] rounded-[10px] p-[38px_23px_48px]">
                <h4 className="pb-[20px] text-extrabold font-(family-name:--font-family) text-[24px] max-[769px]:text-[18px] leading-[113%] tracking-[-0.04em] uppercase">
                  Работаем с большими командами
                </h4>
                <p className="max-w-[241px] font-(family-name:--font-family) text-[14px] leading-[157%] ">
                  Работаем с большими командами, в которых есть несколько лиц,
                  принимающих решения
                </p>
              </div>
            </div>
            <Link
              className="flex w-[276px] gap-[43px] p-[20px] items-center bg-[#0e7c88] rounded-[10px]"
              href={""}
            >
              <span className="font-(family-name:--second-family) text-[16px] leading-[112%] text-white">
                Рассчитать стоимость
              </span>
              <Image
                width={100}
                height={100}
                className="w-auto"
                src="svg/map.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
