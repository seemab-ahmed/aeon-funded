import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Verified from "../assets/images/verified.svg";
import Payouts from "../assets/images/payout-img.webp";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Button from "../ui/Button";

const Secure = ({mode}) => {
  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20 max-md:py-10"
      style={{
        background: mode==='dark' ?
        "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  0px -173.5px / 100% 145.749% no-repeat"
        : ""
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Secure" />
          <h2 className={`text-[50px] leading-relaxed font-semibold tracking-[-0.5px] max-lg:text-4xl
          ${mode==='dark'?'text-white ':'text-dark1f'}`}>
            Instant and Secure Payouts
          </h2>
          <p className={`text-sm leading-[1.71] max-w-[644px] mx-auto mt-[10px]
          ${mode==='dark'?'text-ivoryTint ':'text-dark1f'}`}>
            Get paid quickly and securely with a smooth and reliable payout
            process.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[60px]
        max-lg:grid-cols-1">
          <div
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset 
              ${mode==='dark'? 'bg-black ': 'bg-[#F1F1F1]'}`}
          >
            <div
              className={`pt-10 pb-0 px-5 text-center relative h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col justify-between
                ${mode==='dark'? 'bg-card-radial ': 'bg-white'}`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className={``}>
                <h4
                  className={`text-2xl leading-tight font-semibold font-inter mt-4 mb-[10px]
                  ${mode==='dark'?'text-white ':'text-dark1f'}]`}
                >
                  Payouts Guaranteed with AEON
                </h4>
                <p className={`text-sm leading-[1.7] font-inter max-w-[450px] mx-auto
                ${mode==='dark'?'text-white ':'text-dark1f opacity-80'}`}>
                  The total amount of money paid out to traders over time,
                  showcasing overall earnings.
                </p>
              </div>
              <div className=" ">
                <img src={Verified} alt="Verified payout guarantee badge" loading="lazy" className={`mx-auto h-auto ${mode==='dark'?'':'filter  grayscale'}`} />
              </div>
            </div>
          </div>
          <div
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset 
              ${mode==='dark'? 'bg-black ': 'bg-[#F1F1F1]'}`}
          >
            <div
              className={`py-10 px-5 text-center relative h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col justify-between
                ${mode==='dark'? 'bg-card-radial ': 'bg-white'}`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className={``}>
                <h4
                  className={`text-2xl leading-tight font-semibold font-inter mt-4 mb-[10px] 
                    ${mode==='dark'?'text-white ':'text-dark1f'}`}
                >
                  Fast Reliable Payouts
                </h4>
                <p className={`text-sm leading-[1.7] font-inter max-w-[420px] mx-auto
                  ${mode==='dark'?'text-ivoryTint ':'text-dark1f opacity-80'}`}>
                  The total amount of money paid out to traders over time,
                  showcasing overall earnings.
                </p>
              </div>
              <div className="">
                <img src={Payouts} alt="Illustration of secure payouts" loading="lazy" className={`mx-auto h-auto ${mode==='dark'?'':'filter grayscale invert'}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] mt-11 items-center justify-center flex-wrap">
              <Button to="/" text="Get Funded" mode={mode} />
              <Button
                to="/"
                text="More Payouts"
                variant="gold"
                hasIcon={true}
                icon={ArrowRight}
                mode={mode}
              />
            </div>
      </div>
    </section>
  );
};

export default Secure;