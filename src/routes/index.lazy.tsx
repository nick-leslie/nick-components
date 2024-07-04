import { createLazyFileRoute } from '@tanstack/react-router'
import Button from "../components/inputs/Button.tsx";
import {Dropdown, DropDownItem} from "../components/inputs/Dropdown.tsx";
import Table from "../components/Table.tsx";


type test = {
  foo:string
  bar:string
}
type test2 = {
    foo2:string
    bar2:string
    hello: {
        test:string
    }
}


export const Route = createLazyFileRoute('/')({
  component: () => <Index/>
})

function Index() {
  return (
      <div>
          <Button onClick={() => {alert("hello wolrld")}}>
              <h1>test</h1>
          </Button>
          <Table<{data:string}> data={{test:"test"}}>

          </Table>
          <Dropdown<{message:string}> handleSelect={(selected) => {alert(selected.message)}} selected={[]}>
              <DropDownItem value={{message:"test"}}>
                  test
              </DropDownItem>
              <DropDownItem value={{message:"test2"}}>
                  test2
              </DropDownItem>
          </Dropdown>
      </div>
  )
}