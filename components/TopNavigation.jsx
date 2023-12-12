"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";

export default function TopNavigation({ navigate, openMobileMenu }) {
  useEffect(() => {
    isMobile();
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  const [mobile, setMobile] = useState("");

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

  const buttonSytle =
    "hover:scale-105 hover:border-slate-500 border-2 transition-all border-white rounded-lg p-2 font-normal";
  const buttonListStyle =
    "hover:scale-105 transition-all rounded-lg p-2 font-normal";

  function isMobile() {
    let result = window.innerWidth < 1024;
    setMobile(result);
  }

  function handleNavigation(button) {
    if (button.hash === "") {
      router.replace(button.route);
    } else {
      window.location.hash = button.hash;
      navigate();
    }
  }

  const router = useRouter();
  return (
    <div className="fixed flex flex-row w-screen h-32 bg-black bg-opacity-70 text-white px-10 lg:px-36 z-50">
      <button
        onClick={() => router.replace("/")}
        className="flex basis-1/3 items-center font-semibold text-2xl"
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
            <button onClick={() => openMobileMenu}>
              <LuMenuSquare className="text-3xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
