"use client"
import { useRouter } from "next/navigation";

export default function TopNavigation() {
    const router = useRouter();
    return (
        <div className="flex flex-row w-screen h-32 bg-transparent text-white px-36">
            <div className="flex basis-1/3 items-center font-semibold text-2xl">KORANTENG</div>
            <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
                <button onClick={()=>{router.push('/resume')}} className="border border-white rounded-lg p-2">Resume</button>
                <button className="">04. Contact</button>
                <button className="">03. Work</button>
                <button className="">02. Experience</button>
                <button className="">01. About</button>
            </div>
        </div>
    )
}