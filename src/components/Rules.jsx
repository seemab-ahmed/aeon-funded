import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "../ui/Eyebrow";
// import AboutBg from "../assets/images/about-bg.webp";
import ProfitTarget from "../assets/images/profit-target.svg";
import Drawdown from "../assets/images/drawdown.svg";
import OverallDrawdown from "../assets/images/overall-drawdown.svg";
import MinTrading from "../assets/images/min-trading.svg";
import Infinity from "../assets/images/infinity.svg";
import RefFee from "../assets/images/ref-fee.svg";

gsap.registerPlugin(ScrollTrigger);

const rulesData = [
  {
    title: "Profit Target",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "The Profit Target denotes the mandatory profit level that must be achieved during either Phase 1 (8%) or Phase 2 (4%) of the Challenge.",
    image: ProfitTarget,
    spanClass: "col-span-6 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between pt-6",
    imageClass: "max-lg:w-full max-lg:object-cover"
  },
  {
    title: "Max Daily Drawdown",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "Maximum daily loss limit of 5% of initial balance, reset daily at midnight (0:00 CET).",
    image: Drawdown,
    spanClass: "col-span-6 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between pt-6",
    imageClass: "max-lg:w-full max-lg:object-cover"
  },
  {
    title: "Max Overall Drawdown",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "Clarifies the 10% rule, including what counts towards the drawdown and the consequences of breaching it.",
    image: OverallDrawdown,
    spanClass: "col-span-5 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between pt-6",
    imageClass: "max-lg:w-full max-lg:object-cover"
  },
  {
    title: "Min Trading Days",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "Complete at least one trade on 3 days (non-consecutive).",
    image: MinTrading,
    spanClass: "col-span-7 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between py-6",
    imageClass: "max-lg:w-full max-lg:object-cover"
  },
  {
    title: "No Time Limits",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "No expiration date on your challenge. Trade at your own pace while meeting the minimum trading days requirement.",
    image: Infinity,
    spanClass: "col-span-6 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between py-6",
    imageClass: "max-lg:w-full max-lg:object-cover -mb-6"
  },
  {
    title: "Refundable Fee",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "100% of your challenge fee is refundable after 3rd payout",
    image: RefFee,
    spanClass: "col-span-6 max-md:col-span-12",
    layoutClass: "flex flex-col justify-between py-6",
    imageClass: "max-lg:w-full max-lg:object-cover -mb-6"
  },
];

const Rules = ({ mode }) => {
  useEffect(() => {
    // Animate the section heading always (Eyebrow, h2, paragraph)
    gsap.fromTo(
      ".section-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 90%",
          end: "top 70%",
          scrub: false,
        },
      }
    );

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    
    if (isDesktop) {
      // Desktop animation: Cards animate with rotation and lateral movement.
      gsap.utils.toArray(".rule-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            rotate: index % 2 === 0 ? -30 : 30,
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150,
          },
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 2,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 40%",
              scrub: false,
            },
          }
        );
      });
    } else {
      // Mobile animation: Cards move upward with a fade-in.
      gsap.utils.toArray(".rule-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 60%",
              scrub: false,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      className="py-[120px] max-xl:py-[80px] max-md:py-10 overflow-hidden"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(150.94% 139.8% at 60.26% 151.92%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -41.5px / 100% 109.422% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        {/* The heading container always animates */}
        <div className="section-heading text-center max-w-[842px] mx-auto flex items-center flex-col">
          <Eyebrow text="Rules" />
          <h2
            className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Trading <span className={`${mode === "dark" ? "text-primary" : "text-dark1f"}`}>Success</span> in Numbers
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[540px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f"
            }`}
          >
            A dynamic community where traders grow, earn, and succeed. See real results and take your trading journey to the next level.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-[60px] max-md:grid-cols-1">
          {rulesData.map((data, index) => (
            <RulesCard key={index} {...data} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RulesCard = ({
  title,
  bodyClass,
  description,
  image,
  spanClass,
  imageClass,
  layoutClass,
  mode,
}) => {
  return (
    <div
      className={`rule-card p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
        mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
      } ${spanClass || ""}`}
    >
      <div
        className={`relative h-full text-center rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] ${layoutClass} gap-5 items-center overflow-hidden ${
          mode === "dark" ? "bg-card-radial" : "bg-white"
        }`}
        style={{ backdropFilter: "blur(7.5px)" }}
      >
        <div className={`${bodyClass}`}>
          <h4
            className={`text-2xl leading-tight font-semibold font-inter mt-4 mb-[10px] ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-sm leading-[1.7] font-segoe ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="max-lg:w-full">
          <img
            src={image}
            alt="Success"
            loading="lazy"
            className={`${
              imageClass ? imageClass : "w-full h-auto max-h-[234px]"
            } ${mode === "dark" ? "" : "filter invert grayscale"}`}
          />
        </div>
        <div className="absolute top-[0] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
        <div className="absolute bottom-[0] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
      </div>
    </div>
  );
};

export default Rules;
