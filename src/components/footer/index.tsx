import Image from "next/image";
import React from "react";

const menuData = [
  [
    "HashTech Agency",
    "О компании",
    "Кейсы",
    "Экспертиза",
    "Процессы",
    "Контакты",
  ],
  [
    "Экспертиза",
    "Продукты",
    "Недвижимость",
    "E-commerce",
    "Приложения",
    "No-code",
    "Стартапы",
  ],
  ["Соцсети", "Телеграм", "Ватсап", "Беханс", "Ютуб", "Дриббл", "Вконтакте"],
];

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url(/img/footer.png)" }}
      className="bg-no-repeat bg-cover pt-[200px] mt-[200px] max-[1440px]:mt-0 max-[1440px]:pt-[80px]"
    >
      <div className="my-container">
        <div className="px-[150px] py-[70px] rounded-[76px] bg-white flex justify-between max-[1440px]:px-[30px] max-[1440px]:py-[50px] max-[769px]:flex-col ">
          <div className="">
            <Image
              width={100}
              height={100}
              className="w-auto"
              src="/img/logo.png"
              alt=""
            />
          </div>
          <div className="flex gap-[75px] max-[1224px]:gap-4 max-[900px]:grid max-[900px]:grid-cols-2 max-[769px]:pt-10 max-[480px]:flex max-[480px]:flex-col max-[480px]:text-center max-[480px]:gap-[40px]">
            {menuData.map((item) => (
              <ul className="flex flex-col gap-[10px]" key={Math.random()}>
                {item.map((item, i) => (
                  <li
                    className={`${
                      i == 0
                        ? "text-[14px] text-[#b1b6b8] pb-[10px]"
                        : "cursor-pointer text-[16px] text-medium text-[#2a2a3c] text-hover"
                    } font-(family-name:--font-family)`}
                    key={Math.random()}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[14px]  cursor-pointer   text-[#b1b6b8] font-(family-name:--font-family) pb-[10px]">
                Связаться с нами
              </li>
              <li className="text-[16px]  cursor-pointer  text-hover text-medium text-[#2a2a3c] font-(family-name:--font-family)">
                +7 (996) 99 47 46
              </li>
              <li className="text-[16px]  cursor-pointer  text-hover text-medium text-[#2a2a3c] font-(family-name:--font-family)">
                +996 (999) 99 47 46
              </li>
              <li className="text-[16px]  cursor-pointer  text-hover text-medium text-[#2a2a3c] font-(family-name:--font-family)">
                hello@az-creativite.com
              </li>
            </ul>
          </div>
        </div>
        <div className="max-[600px]:items-center gap-[10px] max-[600px]:flex-col flex justify-around font-(family-name:--font-family) text-white pt-[31px] pb-[30px] text-[12px]">
          <p className="cursor-pointer text-hover">© 2024, HashTech Agency </p>
          <p className="cursor-pointer text-hover">Диджитал новой школы  Политика</p>
          <p className="cursor-pointer text-hover">конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
