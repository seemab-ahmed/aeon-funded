import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import CountUp from "react-countup";

// Variants for animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CareerTrading = ({ mode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  // progress now represents the profit rate in percentage
  const [progress, setProgress] = useState(7.8);
  // accountSize will be controlled by both plus/minus and the slider
  const [accountSize, setAccountSize] = useState(200000);
  const [animate, setAnimate] = useState(true);
  const accountSizePercent = accountSize * (progress / 100);

  const filledColor = mode === "dark" ? "#fc0" : "#1f1f1f";
  const trackColor =
    mode === "dark"
      ? "rgba(255,255,255,0.10)"
      : "rgba(31,31,31,0.10)";

  // Turn off the animation after the initial count up duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 4000); // 4 seconds matching the CountUp duration
    return () => clearTimeout(timer);
  }, []);

  const allowedValues = [10000, 25000, 50000, 100000, 200000];

  // Update slider change to use the index as its value.
  const handleSliderChange = (event) => {
    const newProgress = parseFloat(event.target.value);
    setProgress(newProgress);
    // setAccountSize(Math.round(newProgress * factor));
  };
  
  // Use the current accountSize to find its index and increment (if possible)
  const handleIncrement = () => {
    setAccountSize((prev) => {
      const currentIndex = allowedValues.indexOf(prev);
      // If not already at the highest value, go to the next one.
      if (currentIndex < allowedValues.length - 1) {
        return allowedValues[currentIndex + 1];
      }
      return prev;
    });
  };
  
  // Similarly, decrement by moving to the previous allowed value.
  const handleDecrement = () => {
    setAccountSize((prev) => {
      const currentIndex = allowedValues.indexOf(prev);
      if (currentIndex > 0) {
        return allowedValues[currentIndex - 1];
      }
      return prev;
    });
  };
  

  // Compute slider background style for filled portion
  const sliderBackground = {
    background: `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${
      (progress / 12) * 100
    }%, ${trackColor} ${(progress / 12) * 100}%, ${trackColor} 100%)`,
  };

  return (
    <section
      ref={ref}
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        {/* Wrap the two-column grid in a motion.div to stagger child animations */}
        <motion.div
          className="grid grid-cols-[.9fr_1fr] gap-20 items-center max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Account Size Card */}
          <motion.div
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset max-md:order-2 ${
              mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
            }`}
            variants={fadeInUp}
          >
            <div
              className={`relative h-full p-8 rounded-[18px] text-center border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-2.5 justify-between items-center ${
                mode === "dark" ? "bg-card-radial" : "bg-white"
              }`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className="flex items-center justify-between w-full font-inter">
                <h3 className="text-2xl font-semibold">Account Size</h3>
              </div>

              <div
                className={`w-full flex justify-between items-center gap-3 p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
                  mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
                }`}
              >
                
                <div
                  onClick={handleDecrement}
                  className={`select-none pb-2 text-[30px] leading-none flex items-center justify-center cursor-pointer rounded-full w-[40px] h-[40px] ${
                    mode === "dark"
                      ? "shadow-icon-white bg-[rgba(255,204,0,0.04)]"
                      : "shadow-icon-light bg-white"
                  }`}
                >
                  -
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className={`text-sm mb-3 block ${
                      mode === "dark"
                        ? "text-ivoryTint opacity-60"
                        : "text-dark1f"
                    }`}
                  >
                    Account Size
                  </span>
                  <span className="text-[20px] leading-tight font-semibold">
                    $
                    {animate ? (
                      <CountUp
                        start={0}
                        end={accountSize}
                        duration={4}
                        separator=","
                      />
                    ) : (
                      accountSize.toLocaleString()
                    )}
                  </span>
                </div>
                <div
                  onClick={handleIncrement}
                  className={`select-none pb-2 text-[30px] leading-none flex items-center justify-center cursor-pointer rounded-full w-[40px] h-[40px] ${
                    mode === "dark"
                      ? "shadow-icon-white bg-[rgba(255,204,0,0.04)]"
                      : "shadow-icon-light bg-white"
                  }`}
                >
                  +
                </div>
                
              </div>
              <div
                className={`w-full p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
                  mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
                }`}
              >
                <span
                  className={`text-sm mb-3 block ${
                    mode === "dark"
                      ? "text-ivoryTint opacity-60"
                      : "text-dark1f"
                  }`}
                >
                  Profit Rate
                </span>
                {/* Slider with filled background and label positioned above the thumb */}
                <div className="relative mt-2.5">
                  {/* Label above the slider thumb */}
                  <span
                    style={{
                      position: "absolute",
                      left: `${(progress / 12) * 100}%`,
                      top: "-20px",
                      transform: "translateX(-50%)",
                      fontSize: "6px",
                      padding: "2px 4px",
                    }}
                    className={
                      mode === "dark"
                        ? "bg-[#fc0] text-dark1f font-bold rounded-full"
                        : "bg-dark1f text-white font-bold rounded-full"
                    }
                  >
                    {progress.toFixed(1)}%
                  </span>
                  <input
                    type="range"
                    min="0.1"
                    max="12"
                    step="0.1"
                    value={progress}
                    onChange={handleSliderChange}
                    className="w-full h-[6px] appearance-none rounded-[100px] cursor-pointer"
                    style={sliderBackground}
                  />
                </div>
              </div>
              <div
                className={`p-4 w-full rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
                  mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
                }`}
              >
                <span
                  className={`text-sm mb-3 block ${
                    mode === "dark"
                      ? "text-ivoryTint opacity-80"
                      : "text-dark1f"
                  }`}
                >
                  Take Home
                </span>
                <span className="text-[20px] leading-tight font-semibold">
                  $
                  
                     {animate ? ( <CountUp end={accountSizePercent} duration={4} separator="," /> ) : accountSizePercent.toLocaleString()}
                  
                  /Month
                </span>
              </div>
              <div className="absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
              <div className="absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center max-md:order-1"
            variants={fadeInUp}
          >
            <Eyebrow
              text="A Full Time Career"
              theme={mode === "dark" ? "white" : "light"}
            />
            <h2
              className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl ${
                mode === "dark" ? "text-white" : "text-dark1f"
              }`}
            >
              How Much Can You Earn As A Aeon Trader?
            </h2>
            <p
              className={`text-sm leading-[1.71] mx-auto mt-[10px] ${
                mode === "dark" ? "text-ivoryTint" : "text-dark1f"
              }`}
            >
              On average our top traders earn 7.8% you take home 90% of those
              profits
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button
                to="http://trading.aeonfunded.com/"
                text="Start Trading"
                mode={mode}
                target="_blank"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Slider Thumb Styles */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${filledColor};
          cursor: pointer;
          margin-top: -2px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${filledColor};
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default CareerTrading;
