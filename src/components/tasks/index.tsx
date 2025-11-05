import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tasks = () => {
  return (
    <section className="my-container !pr-[37px] max-[1440px]:!pr-[15px] ">
      <div className="rounded-[20px] flex flex-col justify-between bg-[#f6f6f6] relative max-[769px]:h-[879px] max-[480px]:h-[743px]">
        <div className="p-[56px_0_64px_72px] max-[769px]:pb-[21px] max-[1024px]:pl-[20px] relative z-40 max-[1440px]:p-[76px_0_84px_72px] max-[769px]:pt-[26px]">
          <h2 className="font-(family-name:--font-family) leading-[103%] text-[48px] max-w-[668px] max-[1440px]:text-[36px] max-[1024px]:text-[32px] max-[1440px]:max-w-[500px] max-[768px]:text-[28px]">
            <span className="text-extrabold text-[#353f4e]">
              Пришлите нам задание
            </span>{" "}
            <span className="text-min text-[#0e7c88]">в любом формате</span>{" "}
            <br />
            <span className="text-min">и мы сделаем</span>{" "}
            <span className="text-extrabold text-[#353f4e]">
              бесплатный дизайн-концепт
            </span>{" "}
            <span className="text-min text-[#353f4e]">всего</span>
            <br />
            <span className="text-min text-[#0e7c88]">за 2 дня</span>{" "}
          </h2>
          <p className="font-(family-name:--font-family) text-[16px] leading-[150%] text-[#353f4e] max-w-[358px] py-[24px] pl-3">
            Мы уверены в своих навыках и поэтому знаем, что вы станете нашим
            клиентом, после того, как мы сделаем для вас бесплатный концепт
            дизайна.
          </p>
          <div className="flex items-center gap-[66px]">
            <button className="relative cursor-pointer ">
              <svg
                width="276"
                height="67"
                viewBox="0 0 276 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.77832"
                  width="276"
                  height="66"
                  rx="10"
                  fill="#0E7C88"
                />
                <g filter="url(#filter0_d_108_1218)">
                  <path
                    d="M240.13 39.9477L243.094 36.9834L244 37.8887C244.926 38.8154 245.39 39.2787 245.888 39.1694C246.386 39.06 246.612 38.4451 247.065 37.2152L248.577 33.1137C249.48 30.6603 249.932 29.4337 249.3 28.8014C248.668 28.1692 247.441 28.6211 244.988 29.525L240.886 31.0361C239.656 31.4892 239.042 31.7157 238.932 32.2138C238.823 32.7118 239.286 33.1752 240.213 34.102L241.118 35.0071L238.154 37.9716C237.847 38.2784 237.693 38.432 237.623 38.6031C237.528 38.8314 237.528 39.0878 237.623 39.3162C237.693 39.4873 237.847 39.6409 238.154 39.9477C238.461 40.2547 238.614 40.4081 238.785 40.4791C239.014 40.5736 239.27 40.5736 239.498 40.4791C239.67 40.4081 239.823 40.2547 240.13 39.9477Z"
                    stroke="white"
                    strokeWidth="1.12957"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    shapeRendering="crispEdges"
                  />
                </g>
                <g opacity="0.5" filter="url(#filter1_d_108_1218)">
                  <path
                    d="M255.617 34.5285C255.617 28.8513 255.617 26.0127 253.854 24.249C252.09 22.4854 249.251 22.4854 243.574 22.4854C237.897 22.4854 235.058 22.4854 233.295 24.249C231.531 26.0127 231.531 28.8513 231.531 34.5285C231.531 40.2056 231.531 43.0443 233.295 44.8079C235.058 46.5717 237.897 46.5717 243.574 46.5717C249.251 46.5717 252.09 46.5717 253.854 44.8079C255.617 43.0443 255.617 40.2056 255.617 34.5285Z"
                    stroke="white"
                    strokeWidth="1.12957"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_108_1218"
                    x="236.987"
                    y="27.9424"
                    width="13.1719"
                    height="13.7371"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.564784" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_108_1218"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_108_1218"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_108_1218"
                    x="230.966"
                    y="21.9204"
                    width="25.2158"
                    height="25.7806"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.564784" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_108_1218"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_108_1218"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="absolute left-0 top-0 w-full h-full flex justify-center items-center font-(family-name:--font-family) text-[16px] leading-[112%] text-white">
                Отправить тз
              </span>
            </button>
            <div className="flex gap-[24px] items-center max-[769px]:hidden">
              <Link href="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.4239 5.60709C30.8283 2.01139 26.0476 0.03125 20.9627 0.03125C15.8777 0.03125 11.097 2.01139 7.50127 5.60709C3.90557 9.2028 1.9255 13.9834 1.9255 19.0683C1.9255 22.2895 2.74089 25.4548 4.28862 28.2586L0.258789 39.7722L11.7723 35.7425C14.5762 37.29 17.7415 38.1055 20.9626 38.1055C26.0476 38.1055 30.8283 36.1253 34.4238 32.5297C38.0195 28.934 39.9998 24.1534 39.9998 19.0683C39.9998 13.9833 38.0195 9.20272 34.4239 5.60709Z"
                    fill="#24CB60"
                  />
                  <path
                    d="M28.1878 28.2596L30.3856 26.0618C30.8408 25.6066 30.8408 24.8687 30.3855 24.4135L27.6384 21.6663C27.1832 21.2111 26.4452 21.2111 25.99 21.6663L24.3417 23.3146C20.9663 21.7157 18.2484 18.9979 16.6495 15.6225L18.2978 13.9742C18.753 13.519 18.753 12.781 18.2978 12.3258L15.5507 9.57867C15.0955 9.12352 14.3575 9.12352 13.9023 9.57867L11.7046 11.7764C9.88392 13.5971 12.0979 18.7629 16.6496 23.3146C21.2013 27.8664 26.3672 30.0802 28.1878 28.2596Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19.8705"
                    cy="19.9017"
                    r="19.8705"
                    fill="#2BA2D4"
                  />
                  <path
                    d="M16.4029 22.76L16.0491 27.7786C16.2412 27.7803 16.431 27.7377 16.6039 27.654C16.7767 27.5703 16.928 27.4479 17.0458 27.2962L19.4394 25.0087L24.3993 28.6406C25.3088 29.148 25.9525 28.8805 26.195 27.8036L29.4481 12.5512C29.7363 11.2068 28.9614 10.6804 28.0752 11.0109L8.93892 18.3325C7.63337 18.8408 7.65322 19.569 8.71457 19.8987L13.6071 21.4208L24.9714 14.3097C25.5064 13.956 25.9922 14.1518 25.5927 14.5056L16.4029 22.76Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-[-37px]  bottom-0 max-[1440px]:right-[-269px] max-[769px]:static">
          <Image
            width={100}
            height={100}
            className="w-auto"
            src="img/tasks.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Tasks;
