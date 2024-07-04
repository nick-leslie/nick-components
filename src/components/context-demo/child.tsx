import {ChildTwo} from "./childTwo.tsx";

export function Child(props:{num:number}) {
    return (
        <div className={"flex flex-col"}>
            child 1
            <ChildTwo num={props.num}/>
        </div>
    )
}