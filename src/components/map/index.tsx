import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = () => {
  return (
    <section className="py-[120px] max-[769px]:pb-[0] overflow-x-hidden overflow-y-visible   ">
      <div className="my-container flex flex-col items-center">
        <div className="text-center max-[769px]:-mb-10">
          <h2 className="font-(family-name:--font-family) text-[44px] max-[769px]:text-[28px] max-[769px]:text-start uppercase leading-[113%] ">
            <span className="text-[#0e7c88] text-min">Наши клиенты</span> <br />
            <span className="text-extrabold text-[#2a2a3c]">ПО ВСЕМУ МИРУ</span>
          </h2>
          <p className="pt-3 max-[769px]:text-start">
            Мы гордимся работой с компаниями, которые{" "}
            <br className="max-[769px]:hidden" /> задает правила игры на своих
            рынках
          </p>
        </div>
        <div className="text-start relative max-[769px]:w-full">
          <Image
            width={100}
            height={100}
            className="w-auto max-[1440px]:scale-110 max-[1024px]:scale-125 translate-y-[60px]  object-cover max-[769px]:hidden"
            src="img/map.png"
            alt=""
          />
          <Image
            width={100}
            height={100}
            className="w-full max-[769px]:block hidden"
            src="img/map-2.png"
            alt=""
          />
          <div className="flex gap-20 max-[769px]:-mt-50 max-[500px]:!-mt-20 justify-center absolute items-center bottom-0 left-[50%] translate-x-[-50%] max-[769px]:flex-col max-[769px]:gap-[34px] max-[769px]:static max-[769px]:items-center max-[769px]:translate-x-0">
            <div className="relative">
              <span className="font-(family-name:--font-family) text-[91px] tracking-[-0.012em] text-[#0e7c88] leading-[99%] text-extrabold">
                250
              </span>
              <span className="pb-[10px] font-(family-name:--font-family) text-[16px] tracking-[-0.012em] text-[#2a2a3c] leading-[137%] block pt-3">
                Всего проектов
              </span>
              <svg
                className="absolute top-0 left-0 -translate-x-full -translate-y-[50%]"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6669 28.0985V17.67H0.238281V11.3405H10.6669V0.972168H16.9963V11.3405H27.3647V17.67H16.9963V28.0985H10.6669Z"
                  fill="#0E7C88"
                />
              </svg>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.20231 8.20098C5.19434 8.22486 5.11858 8.5331 5.03269 8.86852C4.9468 9.20395 4.86236 9.52387 4.84502 9.57942C4.75538 9.86703 4.83536 10.2099 5.0385 10.4088C5.37923 10.7423 5.97116 10.6411 6.16883 10.2156C6.20579 10.136 6.3471 9.64351 6.48283 9.12118L6.7296 8.17153H5.97322C5.39816 8.17153 5.21867 8.15201 5.20231 8.20098Z"
                  fill="#2A2A3C"
                />
                <path
                  d="M7.43083 0.674673C7.28516 0.742909 7.12564 0.91416 7.07165 1.06025C7.04181 1.14093 6.54923 3.02113 5.97552 5.24416C5.85431 5.71376 5.74754 6.1254 5.73821 6.15896C5.72247 6.21577 5.77369 6.21995 6.48385 6.21995C6.90324 6.21995 7.24637 6.2126 7.24637 6.20357C7.24637 6.18757 7.80001 4.04634 8.24114 2.35624C8.36687 1.87462 8.46246 1.43718 8.46205 1.3456C8.45959 0.811144 7.90696 0.451601 7.43083 0.674673Z"
                  fill="#2A2A3C"
                />
                <path
                  d="M4.13936 6.51175C4.10753 6.59814 3.76606 7.90876 3.76606 7.94462C3.76606 7.95546 5.05469 7.95999 6.62972 7.95466C9.34027 7.94553 9.49949 7.94156 9.60782 7.88064C9.95497 7.68545 10.1092 7.2468 9.95284 6.89952C9.87739 6.73193 9.79572 6.64031 9.62302 6.52962L9.49337 6.44647L6.83198 6.43675L4.17062 6.42703L4.13936 6.51175Z"
                  fill="#2A2A3C"
                />
                <path
                  d="M0.505743 6.48484C0.242861 6.58406 0.015018 6.91335 0.0156262 7.19323C0.0162682 7.50315 0.275738 7.79484 0.539363 7.90476C0.722705 7.9609 1.77535 7.99655 1.80647 7.94462C1.82165 7.87974 1.905 7.57684 1.9922 7.25996L1.99223 7.25987C2.0991 6.8715 2.21174 6.46216 2.21174 6.44428C2.21174 6.43591 1.8582 6.43016 1.42613 6.43149C0.82627 6.43337 0.608666 6.44598 0.505743 6.48484Z"
                  fill="#2A2A3C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.256 0.65122C4.0974 0.708373 3.94034 0.845088 3.87009 0.9871C3.81356 1.10141 3.32699 2.91555 3.32699 3.01205C3.31527 3.03605 3.44507 3.03493 3.69904 3.03274C3.80661 3.03181 3.93646 3.03069 4.08726 3.03121H4.82634L5.02184 2.28194C5.14129 1.82419 5.21769 1.46095 5.21819 1.34832C5.22046 0.841464 4.72466 0.482234 4.256 0.65122ZM2.78616 5.02286C2.78616 5.04451 2.66614 5.50992 1.90574 8.43663C1.71662 9.1645 1.57008 9.79674 1.57048 9.88289C1.5715 10.089 1.66844 10.2961 1.82725 10.4314C2.16271 10.7172 2.66898 10.6415 2.90101 10.2709C2.95274 10.1883 3.07141 9.79577 3.22485 9.19959C3.35805 8.68208 3.65597 7.53584 3.88685 6.65243C4.11777 5.769 4.30669 5.03583 4.30669 5.02321C4.30669 5.01192 4.03792 5.01204 3.67976 5.0122C3.63658 5.01222 3.5921 5.01223 3.54663 5.01223C3.12406 5.01223 2.78616 5.01223 2.78616 5.02286Z"
                  fill="#2A2A3C"
                />
                <path
                  d="M8.21002 3.29802C8.15163 3.46303 7.83201 4.74372 7.84394 4.76498C7.88858 4.77196 9.2509 4.79544 9.44495 4.7525C9.76291 4.68217 10.0156 4.35978 10.0156 4.02442C10.0156 3.74277 9.81458 3.36054 9.59494 3.3257C9.52402 3.31444 8.24336 3.29085 8.21002 3.29802Z"
                  fill="#2A2A3C"
                />
                <path
                  d="M0.49939 3.31481C0.241374 3.40912 0.0157952 3.74012 0.0157952 4.02442C0.0157952 4.29168 0.181262 4.55752 0.434582 4.69733L0.57295 4.77369L3.22779 4.78341L5.88263 4.79314L6.07496 4.05157C6.18072 3.64369 6.26709 3.29822 6.26688 3.28387C6.26665 3.26951 5.00062 3.25898 3.4535 3.26048C1.06087 3.26282 0.619444 3.27094 0.49939 3.31481Z"
                  fill="#2A2A3C"
                />
              </svg>
            </div>
            <Link
              className="flex w-[276px] gap-[43px] p-[20px] items-center bg-[#0e7c88] rounded-[10px]"
              href={""}
            >
              <span className="font-(family-name:--second-family) text-[16px] leading-[112%] text-white">
                Написать в телеграм
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

export default Map;
