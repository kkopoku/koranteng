"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion"

export default function TopNavigation({ navigate }) {
  useEffect(() => {
    isMobile();
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  const [mobile, setMobile] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const buttons = [
    {
      name: "Resume",
      route: "/resume",
      hash: "",
    },
    {
      name: "04. Contact",
      route: "",
      hash: "#Contact",
    },
    {
      name: "03. Work",
      route: "",
      hash: "#Work",
    },
    {
      name: "02. Experience",
      route: "",
      hash: "#Experience",
    },
    {
      name: "01. About",
      route: "",
      hash: "#About",
    },
  ];

  const buttonVariants = {
    open: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 300, damping: 24} },
    closed: {opacity: 0, y: 20, transition: {duration: 0.2 } }
  }

  const buttonSytle =
    "hover:scale-105 hover:border-slate-500 border-2 transition-all border-white rounded-lg p-2 font-normal";
  const buttonListStyle =
    "hover:scale-105 transition-all rounded-lg font-normal";

  function isMobile() {
    let result = window.innerWidth < 1024;
    setMobile(result);
  }

  function handleNavigation(button) {
    if (button.hash === "") {
      if (mobile === true ) return window.open('https://drive.google.com/file/d/1yBuqKKIfEAbgLFiCMlcr3r1bTpqMrCvN/view?usp=sharing', '_blank');
      router.replace(button.route);
    } else {
      window.location.hash = button.hash;
      navigate();
    }
  }

  const router = useRouter();

  //   COMPONENTS
  const MobileMenuComponent = () => {
    return (
      <motion.div initial={{x: -500}}  animate={{x: 0}} transition={{duration: 0.6}} 
      onClick={()=>setIsMobileMenuOpen(false)} className="flex fixed inset-0 z-40 flex-col-reverse bg-black bg-opacity-90 items-center justify-center gap-7">
        {buttons.map((button) => (
          <motion.button variants={buttonVariants} initial={{x:10}} animate="open" 
            key={button.name}
            onClick={() => 
                {
                    handleNavigation(button);
                    setIsMobileMenuOpen(false);
                }
            }
            className={button.hash === "" ? buttonSytle : buttonListStyle}
          >
            {button.name}
          </motion.button>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="fixed flex flex-row w-screen py-5 bg-black text-white px-3 lg:px-36 z-50">
      <button
        onClick={() => router.replace("/")}
        className="flex basis-1/3 items-center text-base"
      >
        KORANTENG
      </button>

      {mobile !== "" && (
        <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
          {!mobile ? (
            <>
              {buttons.map((button) => (
                <button
                  key={button.name}
                  onClick={() => handleNavigation(button)}
                  className={button.hash === "" ? buttonSytle : buttonListStyle}
                >
                  {button.name}
                </button>
              ))}
            </>
          ) : (
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <RxHamburgerMenu className="text-xl border rounded-full p-1" />
            </button>
          )}
        </div>
      )}
      {isMobileMenuOpen && <MobileMenuComponent />}
    </div>
  );
}
