import React from "react";
import Texture from "../assets/images/footer-texture.svg";
import TextureBlack from "../assets/images/texture-black.svg";
import FooterGradient from "../assets/images/footer-gradient.svg";
import Line from "../assets/images/line.svg";
import FooterBrand from "../assets/images/brand-new.svg";
import FooterbrandLight from "../assets/images/brand-new-light.svg";
import Powered from "../assets/icons/powered.svg";
import Propicks from "../assets/icons/propicks.svg";

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/aeonfunded" },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61573703901801",
  },
  { icon: <FaDiscord />, link: "https://discord.gg/6QfJng6pfs" },
  { icon: <BsTwitterX />, link: "https://twitter.com/aeonfunded" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Challenges", path: "/#plans" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Affiliate Program", path: "/affiliate-program" },
  { name: "Blog", path: "http://blog.aeonfunded.com/", target: "_blank" },
  { name: "FAQ", path: "http://Help.Aeonfunded.com", target: "_blank" },
];
const policyLinks = [
  { name: "Terms and Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Refund Policy", path: "/refund-policy" },
];

const Footer = ({ mode }) => {
  // Handles smooth scrolling for hash links
  const handleNavClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="relative py-[60px] max-lg:py-10"
      style={{
        background:
          mode === "dark"
            ? ""
            : "radial-gradient(165.19% 140% at 50% 10%, rgba(255, 255, 255, 0.00) 37.41%, #000 69.27%, #FFF 100%)",
      }}
    >
      <div className="container max-w-[982px] relative z-[5]">
        <div className="flex gap-8 items-center justify-between">
          <img
            src={Line}
            alt="line"
            loading="lazy"
            className="w-[40%] max-md:w-[30%]"
          />
          <Link to="/" className="min-w-24 max-lg:min-w-16">
            <img
              src={`${mode === "dark" ? FooterBrand : FooterbrandLight}`}
              alt="AEON"
            />
          </Link>
          <img
            src={Line}
            alt="line"
            loading="lazy"
            className="rotate-180 w-[40%] max-md:w-[30%]"
          />
        </div>
          
          <div>
            <ul className="flex items-center mt-10 mb-8 gap-[10px] justify-center max-md:flex-col">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.path}
                    target={nav.target}
                    onClick={(e) => handleNavClick(e, nav.path)}
                    className={`font-inter opacity-80 p-[10px] max-md:py-0 ${
                      mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-4 justify-center mb-7">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] text-2xl max-lg:flex-wrap 
                  max-md:w-10 max-md:h-10 max-md:p-2 max-md:text-xl ${
                    mode === "dark"
                      ? "text-primary shadow-icon-border bg-[rgba(255,204,0,0.04)]"
                      : "text-dark1f shadow-icon-light bg-[rgba(31,31,31,0.04)]"
                  }`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        <ul className="flex items-center my-8 gap-[10px] justify-center max-md:flex-col">
          {policyLinks.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.path}
                target={nav.target}
                onClick={(e) => handleNavClick(e, nav.path)}
                className={`font-inter opacity-80 p-[10px] max-md:py-0 text-sm ${
                  mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className={`text-base font-inter text-center block opacity-80 ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f"
          }`}
        >
          © 2025 AeonFunded. All rights reserved.
        </span>

        <p
          className={` py-8 text-base font-inter text-center block opacity-80 ${
            mode === "dark" ? "text-ivoryTint" : "text-dark1f"
          }`}
        >
          Aeon Funded L.L.C. FZ is not a financial broker, financial advisor, or
          financial representative. The company does not accept client deposits
          or provide access to live trading environments. All trading
          activities, profits, and losses occur within a simulated environment
          and do not involve real money. Aeon Funded L.L.C. FZ does not conduct
          any regulated financial services. Participation is for educational and
          entertainment purposes only. Please refer to our Terms of Use for full
          details.
        </p>
      </div>
      <div className=" hidden lg:flex gap-1.5 items-center absolute right-[5%] bottom-[10%] z-10 max-md:relative max-md:mx-auto max-md:mt-2 max-md:justify-center max-md:inset-0">
        <img
          src={Powered}
          alt="powered"
          className={`max-w-[90px] ${mode === "dark" ? "" : "filter invert"}`}
        />
        <img src={Propicks} alt="propicks" className={`max-w-[25px]`} />
      </div>

      {/* Footer Backgrounds */}
      <div
        className={`absolute w-full h-full inset-0 z-[1] ${
          mode === "dark" ? "" : "opacity-0"
        }`}
      >
        <img
          src={`${mode === "dark" ? Texture : TextureBlack}`}
          alt="Texture"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute w-full h-full inset-0 z-0 ${
          mode === "dark" ? "" : "opacity-0"
        }`}
      >
        <img
          src={FooterGradient}
          alt="FooterGradient"
          loading="lazy"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
};

export default Footer;
