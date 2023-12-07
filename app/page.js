import TopNavigation from "@/components/TopNavigation";

export default function Home() {
  return (
    <div className="bg-black min-h-screen h-full text-white">
      <TopNavigation />

      <div className="flex flex-col px-10 py-44 gap-28">
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-2 flex flex-col">
            <p className="text-2xl text-slate-300 font-semibold"> 01. About Me</p>
            <p className="font-extralight">My name is Ayoub AIT DAHMANE. I am a Software Engineer from Morocco.
            I've worked using different technologies, both backend and frontend.
            I'm currently working using Spring Boot et JavaScript. My goal is to
            build highly performant applications that solve real-world problems
            and provide users with an awesome experience. You can read more
            about me on my LinkedIn page, or Check my Github for some cool
            things. Here are a few technologies I've been working with recently:
            </p>
          </div>
          <div className="rounded-lg p-28 bg-slate-200">
            my image here
          </div>
        </div>
      </div>
    </div>
  );
}
