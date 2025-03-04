import React, { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { Link } from "react-router-dom";
import Check from "../assets/icons/check-circle.svg";
import PricingBg from "../assets/images/pricing-bg.svg";

const planDetailsTwo = [
  { icon: Check, title: "7 days payout", value: "3 Days" },
  { icon: Check, title: "Profit split up to 95%", value: "up to 95%" },
  { icon: Check, title: "Max  Drawdown up to 12%", value: "Trailing" },
  { icon: Check, title: "Reset discount", value: "100%" },
];

const pricingData = {
  plans: {
    "One Phase": {
      pricingOptions: [
        { amount: "$5K", fee: "$49", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$99", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$199", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$299", target: "$5,000", maxDrawdown: "12%" },
        { amount: "$100K", fee: "$499", target: "$10,000", maxDrawdown: "12%" },
        { amount: "$200K", fee: "$899", target: "$20,000", maxDrawdown: "14%" },
      ],
      description: "Two-phase, two-step challenge to test your trading skill.",
      addons: [
        [
          {
            icon: Check,
            title: "Minimum Trading Days",
            value: "3 Days",
            
          },
          { icon: Check, title: "Profit target", value: "8%" },
          { icon: Check, title: "Max daily loss", value: "5%" },
          {
            icon: Check,
            title: "Max loss",
            value: "10%",
          },
          { icon: Check, title: "Levrage", value: "1:100" },
          { icon: Check, title: "Trade Throught News", value: "No" },
          { icon: Check, title: "Profit split", value: "80%" },
          { icon: Check, title: "Reset discount", value: "20%" },
        ],
        [
          {
            icon: Check,
            title: "Minimum Trading Days",
            value: "3 Days",
            
          },
          { icon: Check, title: "Profit target", value: "4%" },
          { icon: Check, title: "Max daily loss", value: "5%" },
          {
            icon: Check,
            title: "Max loss",
            value: "10%",
          },
          { icon: Check, title: "Levrage", value: "1:100" },
          { icon: Check, title: "Trade Throught News", value: "No" },
          { icon: Check, title: "Profit split", value: "80%" },
        ],
        [
          {
            icon: Check,
            title: "Minimum Trading Days",
            value: "3 Days",
            
          },
          { icon: Check, title: "Profit target", value: "8%" },
          { icon: Check, title: "Max daily loss", value: "5%" },
          {
            icon: Check,
            title: "Max loss",
            value: "10%",
          },
          { icon: Check, title: "Levrage", value: "1:100" },
          { icon: Check, title: "Trade Throught News", value: "No" },
          { icon: Check, title: "Profit split", value: "80%" },
          { icon: Check, title: "First reward", value: "7 trading days then Bi-weekly" }, 
        ],
      ]
    },
    "Two Phase": {
      pricingOptions: [
        { amount: "$5K", fee: "$50", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$100", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$200", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$300", target: "$5,000", maxDrawdown: "12%" },
        { amount: "$100K", fee: "$500", target: "$10,000", maxDrawdown: "12%" },
        { amount: "$200K", fee: "$900", target: "$20,000", maxDrawdown: "14%" },
      ],
      description:
        "Traditional two-step evaluation process for experienced traders.",
        addons: [
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "8%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
            { icon: Check, title: "Reset discount", value: "20%" },
          ],
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "4%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
          ],
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "8%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
            { icon: Check, title: "First reward", value: "7 trading days then Bi-weekly" }, 
          ],
        ]
    },
    "Plus": {
      pricingOptions: [
        { amount: "$5K", fee: "$84", target: "$500", maxDrawdown: "8%" },
        { amount: "$10K", fee: "$119", target: "$1,000", maxDrawdown: "8%" },
        { amount: "$25K", fee: "$219", target: "$2,500", maxDrawdown: "10%" },
        { amount: "$50K", fee: "$314", target: "$5,000", maxDrawdown: "12%" },
        { amount: "$100K", fee: "$549", target: "$10,000", maxDrawdown: "12%" },
        {
          amount: "$200K",
          fee: "$1,098",
          target: "$20,000",
          maxDrawdown: "14%",
        },
      ],
      description:
        "Exclusive trading plan with higher flexibility and benefits.",
        addons: [
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "8%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
            { icon: Check, title: "Reset discount", value: "20%" },
          ],
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "4%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
          ],
          [
            {
              icon: Check,
              title: "Minimum Trading Days",
              value: "3 Days",
              
            },
            { icon: Check, title: "Profit target", value: "8%" },
            { icon: Check, title: "Max daily loss", value: "5%" },
            {
              icon: Check,
              title: "Max loss",
              value: "10%",
            },
            { icon: Check, title: "Levrage", value: "1:100" },
            { icon: Check, title: "Trade Throught News", value: "No" },
            { icon: Check, title: "Profit split", value: "80%" },
            { icon: Check, title: "First reward", value: "7 trading days then Bi-weekly" }, 
          ],
        ]    
    },
  },
};

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
  const [activeTab, setActiveTab] = useState("One Phase");
  // const [category, setcategory] = useState("One Phase");

  const plan = pricingData.plans[activeTab];
  const selectedPlan = plan.pricingOptions.find(
    (option) => option.amount === selectedAmount
  );

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
      <div className="container max-w-[900px]">
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
          className="flex gap-5 mt-[60px] mb-10 justify-center max-md:flex-col"
          variants={fadeInUp}
        >
          {Object.keys(pricingData.plans).map((tab) => (
            <motion.button
              key={tab}
              className={`px-8 py-[10px] h-12 rounded-[100px] flex items-center justify-center transition-all duration-500 ease-in-out font-inter text-sm leading-none font-semibold max-md:w-full ${
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
            </motion.button>
          ))}
        </motion.div>

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
              {plan.pricingOptions.map((item, index) => (
                <motion.button
                  key={index}
                  className={`rounded-[100px] p-[10px] cursor-pointer border ${
                    selectedAmount === item.amount
                      ? mode === "dark"
                        ? " border-[rgba(255,204,0,0.10)] bg-[rgba(255,204,0,0.10)] text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]"
                        : " border-[rgba(31,31,31,0.10)] bg-[rgba(31,31,31,0.10)] text-dark1f"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedAmount(item.amount)}
                  variants={popIn}
                >
                  {item.amount}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`grid grid-cols-3 text-center  border-opacity-5 p-7
          ${
            mode === "dark"
              ? "text-[#FBF6EC] bg-[#050505] border-white"
              : "text-dark1f"
          }`}
          >
            <span className="font-medium font-inter text-sm">Phase 1</span>
            <span className="font-medium font-inter text-sm">Phase 2</span>
            <span className="font-medium font-inter text-sm">Funded</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`grid grid-cols-3 gap-2.5`}
          >
            {
              plan.addons.map((item)=><PlanCard data={item} mode={mode} />)
            }
            
          </motion.div>
          <motion.div variants={fadeInUp} className={`my-5`}>
            <Link
              to="/"
              className={`rounded-[100px] px-8 py-[10px] text-sm leading-none font-semibold h-20 flex items-center justify-center gap-2 ${
                mode === "dark"
                  ? "bg-[#fc0] bg-opacity-40 text-white"
                  : " bg-white text-dark1f"
              }`}
            >
              Start trading now
              <span className={`text-[32px] leading-none font-semibold `}>
                {selectedPlan.fee}{" "}
              </span>
              <span className={`text-sm font-normal leading-none opacity-80 `}>
                one time fee
              </span>
            </Link>
          </motion.div>
          <motion.div
  className={`font-inter font-semibold rounded-[20px] px-6 pb-6 border border-[rgba(255,255,255,0.10)] ${
    mode === "dark" ? "text-white bg-plan-card" : "text-dark1f bg-[#F1F1F1]"
  }`}
  style={{ backdropFilter: "blur(7.5px)" }}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className="flex items-center justify-between pb-5 pt-10 border-b border-dashed border-[rgba(226,234,253,0.10)]"
    variants={fadeInUp}
  >
    {planDetailsTwo.map((item, index) => (
      <motion.div
        key={index}
        className="flex items-center justify-between border-[rgba(226,234,253,0.10)]"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-[10px]">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            className={`w-6 h-6 ${mode === "dark" ? "" : "filter invert grayscale"}`}
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

const PlanCard = ({ data, mode }) => {
  return (
    <motion.div
      className={`font-inter font-semibold rounded-[20px] p-6 border border-[rgba(255,255,255,0.10)] ${
        mode === "dark" ? "text-white bg-plan-card" : "text-dark1f bg-[#F1F1F1]"
      }`}
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
            <span className="text-sm leading-none">{item.title}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            {item.value && (
              <span className="text-sm leading-none">{item.value}</span>
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
