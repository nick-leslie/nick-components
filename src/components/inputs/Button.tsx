import {cn} from "../../lib/utils.ts";
import {ReactNode} from "react";

export default function Button(props:{classname?:string,children:ReactNode,onClick:() => void}) {
    return(
        <div className={cn("px-5 py-2 primary w-fit rounded-2xl bg-button-primary select-none text-secondary hover:bg-button-hover active:bg-button-pressed",props.classname)} onClick={props.onClick}>
            {props.children}
        </div>
    )
}