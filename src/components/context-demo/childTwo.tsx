import React from "react";
import {ChildThree, childThree} from "./childThree.tsx";

export function ChildTwo(props:{num:number}) {
    return (
        <div className={"flex flex-col"}>
            child two
            <ChildThree num={props.num}/>
        </div>
    )
}