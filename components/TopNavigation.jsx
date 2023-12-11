"use client"
import { useRouter } from "next/navigation";

export default function TopNavigation({navigate}) {
    const router = useRouter();
    return (
        <div className="flex flex-row w-screen h-32 bg-transparent text-white px-36">
            <a href="/" className="flex basis-1/3 items-center font-semibold text-2xl">KORANTENG</a>
            <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
                <button onClick={()=>{
                    router.replace('/resume');
                    }} className="hover:scale-105 hover:border-slate-500 border-2 transition-all border-white rounded-lg p-2 font-normal">Resume</button>
                <button onClick={()=>{
                    router.replace('/#Contact');
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">04. Contact</button>
                <button onClick={()=>{
                    router.replace('/#Work');
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">03. Work</button>
                <button onClick={()=>{
                    router.replace('/#Experience');
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">02. Experience</button>
                <button onClick={()=>{
                    router.replace('/#About');
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">01. About</button>
            </div>
        </div>
    )
}