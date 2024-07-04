import {cn} from "../../lib/utils.ts";
import {useState} from "react";

export function CheckBox(props:{classname?:string}) {
    const [active,setActive] = useState(false);
    return(
        <div onClick={() => {setActive(!active)}} className={cn(cn("border rounded-2xl border-black",{
            "bg-blue-500":active
        }),props.classname)}>

        </div>
    )
}