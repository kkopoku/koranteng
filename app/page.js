"use client";
import TopNavigation from "@/components/TopNavigation";
import { useState, useRef, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import data from "./data";

export default function Home() {
  function navigateComponents() {
    setTimeout(() => {
      if (window.location.hash === "#About") {
        scrollToSection(aboutRef);
      } else if (window.location.hash === "#Experience") {
        scrollToSection(experienceRef);
      } else if (window.location.hash === "#Work") {
        scrollToSection(workRef);
      } else if (window.location.hash === "#Contact") {
        scrollToSection(contactRef);
      }
    }, 100);
  }

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const { jobs, stuffBuilt } = { ...data };

  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    isMobile();
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  function isMobile() {
    let result = window.innerWidth < 1024;
    setMobile(result);
  }

  function selectJob(job) {
    if (job == 0) setSelectedJob(jobs[0]);
    if (job == 1) setSelectedJob(jobs[1]);
  }

  // COMPONENTS
  const StuffBuiltComponent = ({ record }) => {
    const ImageComp = () => {
      return (
        <div className="flex flex-col basis-1/2">
          <img
            alt=""
            src={record.image_url}
            className="rounded-lg hover:brightness-100 hover:scale-105 brightness-50 h-80 transition-all"
          />
          <div className="flex flex-row pt-3 gap-3">
            <a href={record.git_url} target="_blank">
              <FiGithub className="text-2xl hover:scale-110 hover:text-slate-400 transition-all" />
            </a>
            {(record.url !== "") | null ? (
              <a href={record.url} target="_blank">
                <FiExternalLink className="text-2xl hover:scale-110 hover:text-slate-400 transition-all " />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    };

    const DescriptionComp = () => {
      return (
        <div
          className={
            record.display == "normal"
              ? "flex flex-col basis-1/2 text-end gap-1 justify-center"
              : "flex flex-col basis-1/2 gap-1 justify-center"
          }
        >
          <p className="pb-1 text-sm">{record.type}</p>
          <p className="font-semibold text-xl">{record.title}</p>
          <div className="bg-slate-900 p-5 rounded shadow-lg font-extralight text-sm">
            {record.description}
          </div>
          <div className="flex flex-row justify-around font-extralight text-sm lg:text-base">
            {record.stacks.map((stack) => (
              <div key={stack}>{stack} | </div>
            ))}
          </div>
        </div>
      );
    };

    // Actual component rendering here!
    if (mobile) {
      return (
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full pb-28">
          <ImageComp />
          <DescriptionComp />
        </div>
      );
    } else {
      return (
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full pb-28">
          {record.display == "normal" ? <ImageComp /> : <DescriptionComp />}
          {record.display == "normal" ? <DescriptionComp /> : <ImageComp />}
        </div>
      );
    }
  };

  return (
    <div className="bg-black min-h-screen h-full text-white transition-all">
      <TopNavigation navigate={navigateComponents} />

      {/* Scaffolding Div */}
      <div className="flex flex-col lg:px-40 px-10 py-44 gap-32">
        {/* introduction */}
        <div className="lg:w-4/5">
          <p className="flex lg:text-xl font-extralight pb-3 lg:pb-10">
            Hi, my name is
          </p>
          <p className="text-3xl lg:text-6xl font-semibold">Kwame Koranteng</p>
          <p className="text-3xl lg:text-6xl font-semibold text-slate-300">
            I build innovative solutions for businesses.
          </p>
          <p className="text-base font-extralight pt-10">{`I am a Computer Engineering graduate specializing in Software Engineering, building highly performant applications that solve real-world problems and provide users with an awesome experience. I am currently working using NextJS, NodeJS and Laravel!`}</p>
        </div>

        {/* About Me */}
        <div ref={aboutRef} className="grid xl:grid-cols-3 grid-cols-1 gap-10">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <p className="text-2xl text-slate-300 font-semibold">
              01. About Me
            </p>
            <p className="font-extralight">
              My name is Kwame Koranteng Opoku. I am a Software Engineer from
              Accra, Ghana. I have worked using different technologies, both
              backend and frontend. I am currently working using PHP and
              JavaScript. My goal is to build highly performant applications
              that solve real-world problems and provide users with an awesome
              experience. You can read more about me on my{" "}
              <a
                href="https://www.linkedin.com/in/kwame-koranteng-opoku-362731214"
                target="_blank"
                className="hover:text-slate-400 hover:underline transition-all"
              >
                LinkedIn
              </a>{" "}
              page, or Check my{" "}
              <a
                href="https://github.com/kkopoku"
                target="_blank"
                className="hover:text-slate-400 hover:underline transition-all"
              >
                Github
              </a>{" "}
              for some cool things. Here are a few technologies I have been
              working with recently:
            </p>
            <div className="flex flex-row w-full">
              <ul className="basis-1/2 font-extralight list-disc">
                <li>NextJS</li>
                <li>Angular</li>
                <li>NodeJS</li>
                <li>Laravel</li>
              </ul>
              <ul className="basis-1/2 font-extralight list-disc">
                <li>Claris Filemaker</li>
                <li>Databases (MySQL and MongoDB)</li>
                <li>PhpMyadmin</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <div className="xl:col-span-1 lg:w-auto rounded-lg bg-white p-1 hover:scale-110 transition">
            <img alt="" src="/images/kkopoku01.png" className="h-full w-fit" />
          </div>
        </div>

        {/* Where Ive Worked */}
        <div
          ref={experienceRef}
          className="flex flex-row-reverse lg:pr-24 gap-10"
        >
          <div className="flex-col lg:w-3/4">
            <p className="lg:text-2xl text-slate-300 font-semibold pb-2">
              02. Where I have Worked
            </p>

            <div className="flex flex-row gap-8">
              <div className="flex basis-1/3">
                <ul className="gap-3 font-extralight">
                  {jobs.map((job) => (
                    <button
                      onClick={() => selectJob(job.id)}
                      className="hover:bg-slate-300 focus:bg-slate-300 focus:bg-opacity-25 hover:bg-opacity-25 w-full text-start lg:text-lg px-1 py-3"
                      key={job.id}
                    >
                      {job.companyName}
                    </button>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col basis-2/3 gap-4 lg:h-96">
                {/* Detialed Job View Here */}
                <div className="flex flex-row text-2xl font-semibold">
                  <p>{selectedJob.role}</p>
                  <a
                    href={selectedJob.url_string}
                    target="_blank"
                    className="hover:scale-110 text-slate-300 transition-all"
                  >
                    {"\u00a0"}@{"\u00a0"}
                    {selectedJob.abbreviation}
                  </a>
                </div>

                <p className="font-light text-sm">{selectedJob.period}</p>
                {/* Duty List */}
                <ul className="flex flex-col gap-2 list-disc">
                  {selectedJob.duties.map((duty) => (
                    <li
                      key={duty}
                      className="border-b border-white font-extralight text-lg pb-2"
                    >
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Some Things I have built */}
        <div ref={workRef} className="flex flex-col lg:pr-20 gap-5">
          <div className="flex flex-row text-2xl text-slate-300 font-semibold">
            03. Some Things I have Built
          </div>
          {stuffBuilt.map((instance) => (
            <StuffBuiltComponent record={instance} key={instance.image_url} />
          ))}
        </div>

        {/* Contact Me */}
        <div
          ref={contactRef}
          className="flex flex-col items-center text-center text-slate-200 gap-5"
        >
          <p className="font-light">04. What is Next?</p>
          <p className="font-semibold text-5xl">Get In Touch</p>
          <p>
            My inbox is always open. Whether you have a question or just want to
            create <br /> your next idea together!
          </p>
          <a href={`mailto:kk.opoku@outlook.com`}>
            <button className="py-4 px-10 border-2 rounded hover:scale-110 hover:text-black hover:bg-slate-700 transition-all font-semibold ">
              Say Hello
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
