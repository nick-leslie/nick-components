import {ReactElement, ReactNode} from "react";
import {cn} from "../../lib/utils.ts";

type dropDownProps<T> = {
    children: Array<ReactElement<DropDownElementProps<T>>>,
    handleSelect: (val:T) => void
    selected:T[]
    showSelected?:boolean
}

export function Dropdown<T>(props:dropDownProps<T>) {
    return(
        <div className={""}>
            dropdown
            <div className={"flex relative flex-col w-fit"}>
                {props.children.map((elm) => {
                    return(
                        <div onClick={() => {props.handleSelect(elm.props.value)}}>
                            {props.showSelected !== undefined ?
                                <div></div>
                                : <></> }
                            {elm}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//your mom :3
// get rekt noob

// incels beware <3 'w'
type DropDownElementProps<T> = {
    value:T
    children:ReactNode
    className?:string
}

export function DropDownItem<T>(props:DropDownElementProps<T>) {
    return(
        <div className={cn("bg-indigo-400 px-5 py-2 w-full",props.className)}>
            {props.children}
        </div>
    )
}