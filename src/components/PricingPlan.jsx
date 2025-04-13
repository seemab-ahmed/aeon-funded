import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { Link } from "react-router-dom";
import Check from "../assets/icons/check-circle.svg";
import PricingBg from "../assets/images/pricing-bg.svg";

const planDetailsTwo = [
  { icon: Check, title: "7 days payout", value: "3 Days" },
  { icon: Check, title: "Profit Split up to 95%", value: "up to 95%" },
  { icon: Check, title: "Max  Drawdown up to 12%", value: "Trailing" },
  { icon: Check, title: "Reset Discount", value: "100%" },
];

const pricingData = {
  "One Phase": {
    Classic: {
      pricingOptions: [
        { amount: "$5K", fee: "$69", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$119", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$219", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$379", target: "$5,000", maxDrawdown: "12%" },
        {
          amount: "$100K",
          fee: "$519",
          target: "$10,000",
          maxDrawdown: "12%",
          popular: "Popular",
        },
        {
          amount: "$200K",
          fee: "$1,019",
          target: "$20,000",
          maxDrawdown: "14%",
        },
      ],
      description: "ONE-phase, ONE-step challenge to test your trading skill.",
      addons: [
        [
          { icon: Check, title: "Minimum Trading Days", value: "3 Days" },
          { icon: Check, title: "Profit Target", value: "8%" },
          { icon: Check, title: "Max Daily Loss", value: "3%" },
          { icon: Check, title: "Max loss", value: "5%"},
          { icon: Check, title: "Leverage", value: "1:100" },
          { icon: Check, title: "Trade Through News", value: "yes" },
          { icon: Check, title: "Profit Split", value: "-" },
          { icon: Check, title: "Reset Discount", value: "10%" },
        ],
         [
          { icon: Check, title: "Minimum Trading Days", value: "10 working days for first payout" },
          { icon: Check, title: "Profit Target", value: "-" },
          { icon: Check, title: "Max Daily Loss", value: "3%" },
          { icon: Check, title: "Max loss", value: "5%"},
          { icon: Check, title: "Leverage", value: "1:50" },
          { icon: Check, title: "Trade Through News", value: "5 min rules" },
          { icon: Check, title: "Profit Split", value: "80-95%" },
          { icon: Check, title: "Reset Discount", value: "-" },
        ],
      ],
    },
    Plus: {
      pricingOptions: [
        { amount: "$5K", fee: "$59", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$99", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$199", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$349", target: "$5,000", maxDrawdown: "12%" },
        { amount: "$100K",
          fee: "$499",
          target: "$10,000",
          maxDrawdown: "12%",
          popular: "Popular",
        },
        { amount: "$200K", fee: "$999", target: "$20,000", maxDrawdown: "14%" },
      ],
      description:
        "Traditional two-step evaluation process for experienced traders.",
        addons: [
          [
            { icon: Check, title: "Minimum Trading Days", value: "5 Days" },
            { icon: Check, title: "Profit Target", value: "10%" },
            { icon: Check, title: "Max Daily Loss", value: "2%" },
            { icon: Check, title: "Max loss", value: "8%"},
            { icon: Check, title: "Leverage", value: "1:100" },
            { icon: Check, title: "Trade Through News", value: "yes" },
            { icon: Check, title: "Profit Split", value: "-" },
            { icon: Check, title: "Reset Discount", value: "10%" },
          ],
         [
            { icon: Check, title: "Minimum Trading Days", value: "10 working days for first payout" },
            { icon: Check, title: "Profit Target", value: "-" },
            { icon: Check, title: "Max Daily Loss", value: "2%" },
            { icon: Check, title: "Max loss", value: "8%"},
            { icon: Check, title: "Leverage", value: "1:50" },
            { icon: Check, title: "Trade Through News", value: "5 min rules" },
            { icon: Check, title: "Profit Split", value: "80-95% " },
            { icon: Check, title: "Reset Discount", value: "-" },
          ],
        ],
    },
  },
  "Two Phase": {
    Classic: {
      pricingOptions: [
        { amount: "$5K", fee: "$49", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$99", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$199", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$349", target: "$5,000", maxDrawdown: "12%" },
        {
          amount: "$100K",
          fee: "$499",
          target: "$10,000",
          maxDrawdown: "12%",
          popular: "Popular",
        },
        { amount: "$200K", fee: "$999", target: "$20,000", maxDrawdown: "14%" },
      ],
      description: "Two-phase, two-step challenge to test your trading skill.",
      addons: [
        [
          { icon: Check, title: "Minimum Trading Days", value: "3 Days" },
          { icon: Check, title: "Profit Target", value: "8%" },
          { icon: Check, title: "Max Daily Loss", value: "5%" },
          { icon: Check, title: "Max loss", value: "8%"},
          { icon: Check, title: "Leverage", value: "1:100" },
          { icon: Check, title: "Trade Through News", value: "Yes" },
          { icon: Check, title: "Profit Split", value: "-" },
          { icon: Check, title: "Reset Discount", value: "20%" },
        ],
        [
          { icon: Check, title: "Minimum Trading Days", value: "3 Days" },
          { icon: Check, title: "Profit Target", value: "5%" },
          { icon: Check, title: "Max Daily Loss", value: "5%" },
          { icon: Check, title: "Max loss", value: "8%"},
          { icon: Check, title: "Leverage", value: "1:100" },
          { icon: Check, title: "Trade Through News", value: "Yes" },
          { icon: Check, title: "Profit Split", value: "-" },
          { icon: Check, title: "Reset Discount", value: "-" },
        ], [
          { icon: Check, title: "Minimum Trading Days", value: "10 working days for first payout" },
          { icon: Check, title: "Profit Target", value: "-" },
          { icon: Check, title: "Max Daily Loss", value: "5%" },
          { icon: Check, title: "Max loss", value: "8%"},
          { icon: Check, title: "Leverage", value: "1:50" },
          { icon: Check, title: "Trade Through News", value: "5 min rules" },
          { icon: Check, title: "Profit Split", value: "80-95%" },
          { icon: Check, title: "Reset Discount", value: "-" },
        ],
      ],
    },
    Plus: {
      pricingOptions: [
        { amount: "$5K", fee: "$99", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$149", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$299", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$449", target: "$5,000", maxDrawdown: "12%" },
        {
          amount: "$100K",
          fee: "$599",
          target: "$10,000",
          maxDrawdown: "12%",
          popular: "Popular",
        },
        {
          amount: "$200K",
          fee: "$1,199",
          target: "$20,000",
          maxDrawdown: "14%",
        },
      ],
      description:
        "Traditional two-step evaluation process for experienced traders",
        addons: [
         [
            { icon: Check, title: "Minimum Trading Days", value: "1 Days" },
            { icon: Check, title: "Profit Target", value: "10%" },
            { icon: Check, title: "Max Daily Loss", value: "5%" },
            { icon: Check, title: "Max loss", value: "10% up to 12%"},
            { icon: Check, title: "Leverage", value: "1:50" },
            { icon: Check, title: "Trade Through News", value: "yes" },
            { icon: Check, title: "Profit Split", value: "-" },
            { icon: Check, title: "Reset Discount", value: "20%" },
          ],
          [
            { icon: Check, title: "Minimum Trading Days", value: "1 Days" },
            { icon: Check, title: "Profit Target", value: "5%" },
            { icon: Check, title: "Max Daily Loss", value: "5%" },
            { icon: Check, title: "Max loss", value: "10% up to 12%"},
            { icon: Check, title: "Leverage", value: "1:50" },
            { icon: Check, title: "Trade Through News", value: "yes" },
            { icon: Check, title: "Profit Split", value: "-" },
            { icon: Check, title: "Reset Discount", value: "-" },
          ], [
            { icon: Check, title: "Minimum Trading Days", value: "10 working days for first payout" },
            { icon: Check, title: "Profit Target", value: "-" },
            { icon: Check, title: "Max Daily Loss", value: "5%" },
            { icon: Check, title: "Max loss", value: "10% up to 12%"},
            { icon: Check, title: "Leverage", value: "1:50" },
            { icon: Check, title: "Trade Through News", value: "5 min rules" },
            { icon: Check, title: "Profit Split", value: "80-95%" },
            { icon: Check, title: "Reset Discount", value: "-" },
          ],
        ],
    },
  },
  Instant: {
    Classic: {
      pricingOptions: [
        { amount: "$5K", fee: "$199", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$399", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$999", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$1999", target: "$5,000", maxDrawdown: "12%" }
      ],
      description: "INSTANT ACCOUNT",
      addons: [
        [
          { icon: Check, title: "Minimum Trading Days", value: "10 working days for first payout" },
          { icon: Check, title: "Profit Target", value: "-" },
          { icon: Check, title: "Max Daily Loss", value: "3%" },
          { icon: Check, title: "Max loss", value: "5%"},
          { icon: Check, title: "Leverage", value: "1:30" },
          { icon: Check, title: "Trade Through News", value: "5 min rules" },
          { icon: Check, title: "Profit Split", value: "55% up tp 95%" },
          { icon: Check, title: "Reset Discount", value: "-" },
        ]
      ],
    },
  },
};
const pricingCategory = ["One Phase", "Two Phase", "Instant"];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

// New card variant for PlanCard container
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const PricingPlan = ({ mode }) => {
  const [selectedAmount, setSelectedAmount] = useState("$5K");
  const [activeTab, setActiveTab] = useState("Classic");
  const [category, setCategory] = useState("One Phase");
  
  const plan = useMemo(()=> pricingData?.[category]?.[activeTab] , [category , activeTab]);
  const selectedPlan = plan?.pricingOptions.find(
    (option) => option.amount === selectedAmount
  );
  const numAddons = plan?.addons?.length;
  
  const gridColsClass =
  numAddons === 1 ? "lg:grid-cols-1" :
  numAddons === 2 ? "lg:grid-cols-2" :
  "lg:grid-cols-3";
  const pricingTabs = pricingData?.[category];


  return (
    <motion.section
      id="plans"
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20"
      style={{
        background:
          mode === "dark" ? `url(${PricingBg}) no-repeat center / cover` : "",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container max-w-[920px]">
        <motion.div
          className="text-center flex items-center flex-col"
          variants={fadeInUp}
        >
          <Eyebrow text="Planning" />
          <h2
            className={`text-[50px] leading-relaxed font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white " : "text-dark1f"
            }`}
          >
            Pricing Plan
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[644px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint " : "text-dark1f opacity-80"
            }`}
          >
            We appreciate that every trader and trading style is different. With
            that in mind we offer the opportunity to customize your trading
            accounts at the checkout.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-[60px] gap-5 mb-10 justify-center max-md:flex-wrap"
          variants={fadeInUp}
        >
          {pricingCategory.map((tab) => (
            <motion.button
              key={tab}
              className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center 
            transition-all duration-500 ease-in-out font-inter text-sm leading-none font-semibold opacity-1
            max-md:px-4 max-md:h-10  ${
              category === tab
                ? mode === "dark"
                  ? "bg-white text-black"
                  : "bg-dark1f text-white"
                : mode === "dark"
                ? "text-white bg-transparent"
                : "text-dark1f"
            }`}
              onClick={() => {
                setCategory(tab);
                if(tab ==="Instant") {
                  setActiveTab("Classic");
                  setSelectedAmount("$5K");
                }
              }}
              variants={popIn}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
       {category !== "Instant" && <div
          className="flex gap-5 mb-10 justify-center max-md:flex-wrap"
          variants={fadeInUp}
        >
          {Object.keys(pricingTabs).map((tab) => (
            <button
              key={tab}
              className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center 
                transition-all duration-500 ease-in-out font-inter text-sm leading-none font-semibold 
                max-md:px-4 max-md:h-10
                 ${
                   activeTab === tab
                     ? mode === "dark"
                       ? "bg-white text-black"
                       : "bg-dark1f text-white"
                     : mode === "dark"
                     ? "text-white bg-transparent"
                     : "text-dark1f"
                 }`}
              onClick={() => setActiveTab(tab)}
              variants={popIn}
            >
              {tab}
            </button>
          ))}
        </div>}

        <div
          className={`p-[10px] rounded-[24px] border border-[rgba(255,255,255,0.05)] shadow-card-inset ${
            mode === "dark" ? "bg-[#050505]" : "bg-[#F1F1F1]"
          }`}
        >
          <motion.div
            className={`p-6 rounded-[20px] border border-[rgba(255,255,255,0.10)] flex flex-col gap-5 ${
              mode === "dark" ? "bg-card-gradient" : "bg-white"
            }`}
            variants={fadeInUp}
          >
            <motion.div
              className="grid grid-cols-3 gap-x-2.5 gap-y-5 text-center font-inter text-sm leading-none max-lg:grid-cols-2"
              variants={containerVariants}
            >
              {plan?.pricingOptions?.map((item, index) => (
                <button
                  key={index}
                  className={`rounded-[100px] p-[10px] cursor-pointer border flex items-center justify-center gap-2.5 ${
                    selectedAmount === item.amount
                      ? mode === "dark"
                        ? " border-[rgba(255,204,0,0.10)] bg-[rgba(255,204,0,0.10)] text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]"
                        : " border-[rgba(31,31,31,0.10)] bg-[rgba(31,31,31,0.10)] text-dark1f"
                      : "border-transparent"
                  } ${plan && 'opacity-100'}`}
                  onClick={() => setSelectedAmount(item.amount)}
                  variants={popIn}
                >
                  {item?.amount}

                  {item?.popular && (
                    <span
                      className={`hidden lg:flex text-[12px] font-inter relative h-[26px] max-w-max items-center justify-center gap-2 rounded-[100px] py-2 px-[10px]  ${
                        mode === "dark"
                          ? "text-ivoryTint bg-[#FCF0F01A]"
                          : "text-dark1f bg-[#F1F1F1]"
                      }`}
                    >
                      {item?.popular}
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`hidden lg:grid ${gridColsClass} text-center  border-opacity-5 py-7
          ${
            mode === "dark"
              ? "text-[#FBF6EC] bg-[#050505] border-white"
              : "text-dark1f"
          }`}
          >
           {category !== "Instant" && <span className="font-medium font-inter text-sm">Phase 1</span> }
            { category === "Two Phase" && <span className="font-medium font-inter text-sm">Phase 2</span>}
             <span className="font-medium font-inter text-sm">Funded</span>
          </motion.div>
          <motion.div variants={fadeInUp} className={`my-5 block lg:hidden`}>
            <Link
              to="/"
              className={`rounded-[100px] px-8 py-[10px] text-sm leading-none font-semibold h-20 
                flex items-center justify-center gap-2 max-md:px-4 ${
                  mode === "dark"
                    ? "bg-[#FFD221] text-black"
                    : " bg-white text-dark1f"
                }`}
            >
              Start trading now
              <span className={`text-[32px] leading-none font-semibold `}>
                {selectedPlan?.fee}{" "}
              </span>
              <span className={`text-sm font-normal leading-none opacity-80 `}>
                one time fee <span className="w-12"></span>
              </span>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`grid grid-cols-1 ${gridColsClass} gap-2.5`}
          >
            {plan?.addons?.map((item, index) => (
              
              <PlanCard data={item} mode={mode} keyValue={index} />
              
            ))}
          </motion.div>
          <motion.div variants={fadeInUp} className={`my-5 hidden lg:block`}>
            <Link
              to="https://trading.aeonfunded.com/auth/sign-up/"
              target="_blank"
              className={`rounded-[100px] px-8 py-[10px] text-sm leading-none font-semibold h-20 
                flex items-center justify-center gap-2 max-md:px-4 ${
                  mode === "dark"
                    ? "bg-[#FFD221] text-black"
                    : " bg-white text-dark1f"
                }`}
            >
              Start trading now
              <span className={`text-[32px] leading-none font-semibold `}>
                {selectedPlan?.fee}{" "}
              </span>
              <span className={`text-sm font-normal leading-none opacity-80 `}>
                one time fee <span className="w-12"></span>
              </span>
            </Link>
          </motion.div>
          <motion.div
            className={` hidden font-inter font-semibold rounded-[20px] px-6 pb-6 border border-[rgba(255,255,255,0.10)] ${
              mode === "dark"
                ? "text-white bg-plan-card"
                : "text-dark1f bg-[#F1F1F1]"
            }`}
            style={{ backdropFilter: "blur(7.5px)" }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex flex-wrap items-center justify-between md:pb-5 md:pt-10 border-b border-dashed border-[rgba(226,234,253,0.10)] max-md:gap-0"
              variants={fadeInUp}
            >
              {planDetailsTwo?.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between max-md:border-b max-md:border-dashed border-[rgba(226,234,253,0.10)] max-md:py-5 max-md:w-full"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      loading="lazy"
                      className={`w-6 h-6 ${
                        mode === "dark" ? "" : "filter invert grayscale"
                      }`}
                    />
                    <span className="text-sm leading-none">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const PlanCard = ({ data, mode , keyValue }) => {
  return (
    <motion.div
      className={`font-inter font-semibold rounded-[20px] p-3 border border-[rgba(255,255,255,0.10)] ${
        mode === "dark" ? "text-white bg-plan-card" : "text-dark1f bg-[#F1F1F1]"
      }`}
      key={keyValue}
      style={{ backdropFilter: "blur(7.5px)" }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-[10px]">
            <img
              src={item.icon}
              alt={item.title}
              loading="lazy"
              className={`w-6 h-6 ${
                mode === "dark" ? "" : "filter invert grayscale"
              }`}
            />
            <span className="text-sm leading-none"> {item.title} </span>
          </div>
          <div className="flex items-center gap-[10px]">
            {item.value && (
              <span className="text-sm leading-none"> {` ${item.value}`} </span>
            )}
            {item.percentage && (
              <span className="text-sm leading-none p-[10px] font-medium rounded-[100px] bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.10)]">
                {item.percentage}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PricingPlan;
