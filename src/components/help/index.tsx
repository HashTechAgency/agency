import Image from "next/image";
import React from "react";

const Help = () => {
  return (
    <section className="pt-[84px] pb-[62px] max-[769px]:pb-[0]">
      <div className="my-container relative">
        <div className="pt-[35px] pb-[47px] max-[1440px]:pt-[65px] max-[1024]:!pt-[85px] max-[769px]:!pt-[55px] max-[480px]:!pt-10 max-[480px]:!pb-5">
          <h2 className="font-(family-name:--font-family) max-[480px]:text-[28px] text-[56px] max-[1024px]:text-[48px] max-[900px]:text-[36px] leading-[104%] text-extrabold text-[#2a2a3c] uppercase tracking-[-0.04em]">
            Мы помогли сотням <br /> партнеров, <br /> от стартапов до{" "}
            <br className="hidden max-[1024px]:block" /> крупных <br />{" "}
            предприятий, <br className="hidden max-[1024px]:block" /> достичь{" "}
            <br className="block max-[1024px]:hidden" />
            своих целей.
          </h2>
          <p className="pt-[18px] pb-[48px] font-(family-name:--font-family) text-[29px] max-[1024px]:text-[26px] max-[480px]:text-[20px] text-min leading-[184%] text-[#2a2a3c] uppercase tracking-[-0.04em]">
            И звездные отзывы - <br className="hidden max-[1024px]:block" /> это
            наша награда!
          </p>
        </div>

        <div className="absolute top-0 max-[550px]:hidden right-[-300px] max-[1440px]:right-[-300px] max-[1200px]:right-[-409px]">
          <Image
            width={100}
            height={100}
            className="w-auto max-[1440px]:hidden"
            src="img/Help.png"
            alt=""
          />
          <Image
            width={100}
            height={100}
            className="max-[1440px]:inline w-auto hidden"
            src="img/Help-2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Help;
