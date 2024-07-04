import bwhLogo from "../assets/bwh-logo.svg"
import nick from "../assets/trash.jpg"

export function DatingSite() {
    return(
        <div className={"bg-primaryBlue w-fit px-10 py-5 rounded-2xl drop-shadow-2xl"}>
            <img className={"w-[200px] h-[100px]"} src={bwhLogo}></img>
            <div className={"text-white flex flex-row w-full"}>
                <div className={"grow"}></div>
                <h1 className={"text-4xl place-self-center"}>Patent Dateway</h1>
                <div className={"grow"}></div>
            </div>
            <div className={"p-5"}></div>
            <div className={"flex flex-row"}>
                <img className={"rounded-2xl"} src={nick}/>
            </div>
        </div>
    )
}