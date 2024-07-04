import { createLazyFileRoute } from '@tanstack/react-router'
import {Child} from "../components/context-demo/child.tsx";
import {createContext, useState} from "react";

export const NumContext = createContext<{num:number,setContext:(data:number) => void }>({
    num: 0, setContext(data: number): void {
    }
})

export const Route = createLazyFileRoute('/context')({

  component: () => {
      const [useStateNum,setUseStateNum] = useState<number>(10)

    return(
        <NumContext.Provider value={{
            num:useStateNum,
            setContext:(num) => {
                setUseStateNum(num)
            }}}>
            <div className={"flex flex-row"}>
                <Child num={10}></Child>
              </div>
        </NumContext.Provider>
    );
    }
});