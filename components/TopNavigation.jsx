"use client"
import { useRouter } from "next/navigation";

export default function TopNavigation({navigate}) {
    const router = useRouter();
    return (
        <div className="flex flex-row w-screen h-32 bg-transparent text-white px-36">
            <div className="flex basis-1/3 items-center font-semibold text-2xl">KORANTENG</div>
            <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
                <button onClick={()=>{
                    router.replace('/resume');
                    }} className="border border-white rounded-lg p-2">Resume</button>
                <button onClick={()=>{
                    router.replace('/#Contact');
                    navigate();
                    }} className="">04. Contact</button>
                <button onClick={()=>{
                    router.replace('/#Work');
                    navigate();
                    }} className="">03. Work</button>
                <button onClick={()=>{
                    router.replace('/#Experience');
                    navigate();
                    }} className="">02. Experience</button>
                <button onClick={()=>{
                    router.replace('/#About');
                    navigate();
                    }} className="">01. About</button>
            </div>
        </div>
    )
}