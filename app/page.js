"use client";
import TopNavigation from "@/components/TopNavigation";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import data from "./data";

export default function Home() {
  const { jobs, stuffBuilt } = { ...data };
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
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
            src={record.image_url}
            className="rounded-lg hover:brightness-100 brightness-50 h-80 transition-all"
          />
          <div className="flex flex-row pt-2 gap-3">
            <a href={record.git_url} target="_blank">
              <FiGithub className="text-2xl hover:scale-110 hover:text-slate-400 transition-all" />
            </a>
            <a href={record.url} target="_blank">
              <FiExternalLink className="text-2xl hover:scale-110 hover:text-slate-400 transition-all " />
            </a>
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
          <div className="flex flex-row justify-around font-extralight">
            {record.stacks.map((stack) => (
              <div key={stack}>{stack}</div>
            ))}
          </div>
        </div>
      );
    };

    // Actual component rendering here!
    return (
      <div className="flex flex-row w-full pb-28">
        {record.display == "normal" ? <ImageComp /> : <DescriptionComp />}
        {record.display == "normal" ? <DescriptionComp /> : <ImageComp />}
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen h-full text-white transition-all">
      <TopNavigation />

      {/* Scaffolding Div */}
      <div className="flex flex-col lg:px-40 px-20 py-44 gap-28">
        {/* introduction */}
        <div className="w-4/5">
          <p className="flex font-extralight pb-10">Hi, my name is</p>
          <p className="text-6xl font-semibold">Kwame Koranteng</p>
          <p className="text-6xl font-semibold text-slate-300">
            I build innovative solutions for the web.
          </p>
          <p className="text-base font-extralight pt-10">{`I am a Computer Engineer graduate specializing in Software Engineering, building highly performant applications that solve real-world problems and provide users with an awesome experience. I'm currently working using NextJS and Laravel!`}</p>
        </div>

        {/* About Me */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-2 flex flex-col gap-4">
            <p className="text-2xl text-slate-300 font-semibold">
              01. About Me
            </p>
            <p className="font-extralight">
              My name is Kwame Korantenfg Opoku. I am a Software Engineer from
              Accra, Ghana. I've worked using different technologies, both
              backend and frontend. I'm currently working using PHP and
              JavaScript. My goal is to build highly performant applications
              that solve real-world problems and provide users with an awesome
              experience. You can read more about me on my LinkedIn page, or
              Check my Github for some cool things. Here are a few technologies
              I've been working with recently:
            </p>
            <div className="flex flex-row w-full">
              <ul className="basis-1/2 font-extralight list-disc">
                <li>NextJS</li>
                <li>AngularJS</li>
                <li>NodeJS</li>
                <li>Laravel</li>
              </ul>
              <ul className="basis-1/2 font-extralight list-disc">
                <li>Claris Filemaker</li>
                <li>Databases (NoSql and SQL)</li>
                <li>PhpMyadmin</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <div className="w-fit h-fit lg:w-auto justify-self-center rounded-lg p-28 bg-white hover:scale-110 transition justify-center content-center items-center">
            <img
              src="/images/kkopoku01.png"
              className="object-contain h-40 scale-150"
            />
          </div>
        </div>

        {/* Where Ive Worked */}
        <div className="flex flex-row-reverse lg:pr-24 gap-10">
          <div className="flex-col w-3/4">
            <p className="text-2xl text-slate-300 font-semibold pb-2">
              02. Where I've Worked
            </p>

            <div className="flex flex-row gap-8">
              <div className="flex basis-1/3">
                <ul className="gap-3 font-extralight">
                  {jobs.map((job) => (
                    <button
                      onClick={() => selectJob(job.id)}
                      className="hover:bg-slate-300 focus:bg-slate-300 focus:bg-opacity-25 hover:bg-opacity-25 w-full text-start text-lg px-1 py-3"
                      key={job.id}
                    >
                      {job.companyName}
                    </button>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col basis-2/3 gap-4 h-96">
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

        {/* Some Things I've built */}
        <div className="flex flex-col lg:pr-20 gap-5">
          <div className="flex flex-row text-2xl text-slate-300 font-semibold">
            03. Some Things I've Built
          </div>
          {stuffBuilt.map((instance) => (
            <StuffBuiltComponent record={instance} key={instance.image_url} />
          ))}
        </div>
      </div>
    </div>
  );
}
