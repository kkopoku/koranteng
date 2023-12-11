"use client"
import { useRouter } from "next/navigation";

export default function TopNavigation({navigate}) {
    const router = useRouter();
    return (
        <div className="fixed flex flex-row w-screen h-32 bg-black bg-opacity-70 text-white px-36 z-50">
            <button onClick={()=>router.replace('/')} className="flex basis-1/3 items-center font-semibold text-2xl">KORANTENG</button>
            <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
                <button onClick={()=>{
                    router.replace('/resume')
                    }} className="hover:scale-105 hover:border-slate-500 border-2 transition-all border-white rounded-lg p-2 font-normal">Resume</button>
                <button onClick={()=>{
                    window.location.hash = "#Contact"
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">04. Contact</button>
                <button onClick={()=>{
                    window.location.hash = "#Work"
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">03. Work</button>
                <button onClick={()=>{
                    window.location.hash = "#Experience"
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">02. Experience</button>
                <button onClick={()=>{
                    window.location.hash = "#About"
                    navigate();
                    }} className="hover:scale-105 hover:text-slate-500 font-normal transition-all">01. About</button>
            </div>
        </div>
    )
}