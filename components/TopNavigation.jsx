export default function TopNavigation() {
    return (
        <div className="flex flex-row w-screen h-20 bg-transparent text-white p-10">
            <div className="flex basis-1/3 items-center text-xl">KORANTENG</div>
            <div className="flex flex-row-reverse basis-2/3 text-sm items-center gap-5 font-thin">
                <button className="border border-white rounded-lg p-2">Resume</button>
                <button className="">04. Contact</button>
                <button className="">03. Work</button>
                <button className="">02. Experience</button>
                <button className="">01. About</button>
            </div>
        </div>
    )
}