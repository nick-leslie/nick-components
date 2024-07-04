import {useContext} from "react";
import {NumContext} from "../../routes/context.lazy.tsx";

export function ChildThree(props:{num:number}) {
    const {num,setContext} = useContext(NumContext);
    function changeContext(dat:string) {
        setContext(parseInt(dat))
    }
    return(
        <div className={"flex flex-col"}>
            <h1>{props.num}</h1>
            <h1>{num}</h1>
            <input onChange={(val) => {changeContext(val.target.value)}}/>
            child 3
        </div>
    )
}