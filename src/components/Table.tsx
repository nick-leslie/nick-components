import {getValue, hasKey} from "../lib/utils.ts";
import  {isValidElement} from "react";

export default function Table<T extends object>(props:{data:T[]}) {

    function renderElement(dat:T,key:string) {
        if(hasKey(dat,key)) {
            const val = getValue(dat,key)
            if(typeof val === "string" || typeof val === "number" || isValidElement(val)) {
                return (
                    <div key={key+val.toString()} className={"bg-gray-300 text-black px-5 py-2 border-gray-500 border"}>
                        {
                            val
                        }
                    </div>
                )
            } else {
                const test = val as object
                return <div className={"bg-gray-300 text-black px-5 py-2"}>
                    <Table<typeof test> data={[test]}></Table>
                </div>
            }
        }
    }
    if(props.data.length >= 1) {
        return (
            <div className={"flex flex-col w-fit"}>
                <div className={"flex flex-row"}>
                    {Object.keys(props.data[0]).map((key) => {
                        return (
                                <div className={"flex flex-col w-fit"} key={key}>
                                    <div className={"bg-black text-white px-5 py-2"}>
                                        {key}
                                    </div>
                                    {props.data.map((dat) => {
                                        return(
                                            renderElement(dat,key)
                                        );
                                    })}
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return <div>
        No data
    </div>
}

