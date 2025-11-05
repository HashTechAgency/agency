import React from "react";
const services = [
  {
    id: "001",
    title: "Landing page на Тильде",
    price: "от 69 000 р.",
    shortDescription: "Лендинг будет продающий, с упрощенным дизайном",
    fullDescription:
      "Сайт, призывающий пользователя совершить определенное целевое действие — оставить заявку, подписаться на рассылку, скачать презентацию, купить онлайн, рассчитать стоимость, презентовать услугу/продукт/компанию. Акцент на быструю загрузку и мобильный трафик.",
    term: "под ключ от 15 дней",
    details: [
      "Авторский копирайт",
      "Минималистичный дизайн",
      "Акцент на быструю загрузку и мобильный трафик",
    ],
  },
  {
    id: "002",
    title: "Уникальный продающий сайт",
    price: "от 229 000 р.",
    shortDescription:
      "Авторский или креативный дизайн, визуальные эффекты, нестандартная верстка",
    fullDescription:
      "Сайт, призывающий пользователя совершить определенное целевое действие — оставить заявку, подписаться на рассылку, скачать презентацию, купить онлайн, рассчитать стоимость, презентовать услугу/продукт/компанию. Подходит для тех, кто уверен в нише и хочет больше заявок с сайта. Сайт привлекает внимание с первой секунды. Акцент на визуальную составляющую и продающий текст.",
    term: "под ключ от 35 дней",
    details: [
      "Авторский копирайт",
      "Авторский или креативный дизайн",
      "Визуальные эффекты",
      "Нестандартная верстка",
    ],
  },
  {
    id: "003",
    title: "Корпоративный сайт",
    price: "от 350 000 р.",
    shortDescription:
      "Стильный, адаптивный, логичный — удобно на любом устройстве",
    fullDescription:
      "Акцент на фирменный стиль, продуманная иерархия внимания посетителя, выдержанная когнитивная нагрузка. Многостраничный сайт, который привлекает и продаёт.",
    term: "под ключ от 60 дней",
    details: [
      "Авторский копирайт",
      "Фирменный стиль интегрирован в дизайн",
      "Визуальные эффекты и анимации",
      "Нестандартная, современная верстка",
    ],
  },
  {
    id: "004",
    title: "Интернет-магазин",
    price: "от 179 000 р.",
    shortDescription: "Фокус на конверсию, масштабирование и стабильную работу",
    fullDescription:
      "Функциональный, адаптивный, быстрый — построен на логике, скорости и удобстве. Акцент на бренд, UX и простоту — всё, чтобы конвертировать просмотр в заказ. Интернет-магазин, готовый к продажам.",
    term: "под ключ от 60 дней",
    details: [
      "Дизайн и структура под вашу товарную матрицу",
      "Авторский UI-дизайн",
      "Визуальные эффекты, micro UX",
      "Интеграции, SEO, аналитика",
      "Анимации и визуальные акценты",
    ],
  },
];
const Price = () => {
  return (
    <section className=" mt-[-200px] max-[969px]:mt-10 max-[769px]:mt-20"> 
      <div className="my-container !max-w-[1800px]">
        <div>
          <h4 className="max-[769px]:text-[36px] text-min font-(family-name:--font-family) text-[44px] leading-[127%] uppercase text-[#30424a]">
            Стоимость <br /> создания{" "}
          </h4>
          <h2 className="max-[769px]:text-[60px] pt-2 pb-[10px] text-extrabold font-(family-name:--font-family) text-[90px] tracking-[-0.04em] leading-[127%] uppercase text-[#30424a]">
            САЙТов
          </h2>
          <p className="font-(family-name:--font-family) text-[16px] tracking-[-0.02em] leading-[150%] uppercase text-[#30424a]">
            Которые не оставляют вам <br /> шанса не получить результат
          </p>
        </div>
        <div className=" no-scrollbar overflow-x-auto pt-[93px]">
          <div className="flex flex-col gap-[10px]  max-[1590px]:w-[1500px] max-[769px]:w-auto  max-[1500px]:px-10 max-[769px]:px-0">
            {services.map((item) => (
              <div
                key={item.id}
                className="max-[769px]:flex-col max-[769px]:items-start flex pt-4 pb-4 justify-between gap-[15px] border-[#30424a] border-b items-start"
              >
                <div className="w-[270px]">
                  <h5 className="pb-[14px] text-extrabold font-(family-name:--second-family) text-[25px] leading-[117%] uppercase text-[#30424a]">
                    {item.title}
                  </h5>
                  <p className="font-(family-name:--second-family) text-[12px] tracking-[-0.01em] leading-[150%] uppercase text-[#30424a]">
                    {item.shortDescription}
                  </p>
                </div>

                <h5 className="w-[170px] font-(family-name:--second-family) text-[28px] tracking-[-0.04em] leading-[100%] uppercase text-[#30424a] text-bold">
                  {item.price}
                </h5>

                <p className="max-w-[306px] max-[769px]:max-w-full max-[1400px]:max-w-[220px] font-(family-name:--second-family) text-[11px] tracking-[-0.01em] leading-[143%] uppercase text-[rgba(53,63,78,0.6)]">
                  {item.fullDescription}
                </p>

                <h6 className="font-(family-name:--second-family) text-[12px] tracking-[-0.01em] leading-[143%] uppercase text-[#30424a] text-bold">
                  {item.term}
                </h6>

                <p className="max-w-[196px] font-(family-name:--second-family) text-[12px] tracking-[-0.01em] leading-[150%] uppercase text-[#30424a]">
                  {item.shortDescription}
                </p>

                <div>
                  <button className="cursor-pointer font-(family-name:--font-family) flex gap-[10px] text-[11px] leading-[130%] uppercase text-[#30424a] border p-[12px_22px] border-[#0e7c88] rounded-[2px]">
                    Подробнее
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4.46972H11.9572M11.9572 4.46972L7.76666 8.6601M11.9572 4.46972L7.76666 0.279297"
                        stroke="#0E7C88"
                        strokeWidth="0.788961"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
