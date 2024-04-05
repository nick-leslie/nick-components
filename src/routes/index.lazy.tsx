import { createLazyFileRoute } from '@tanstack/react-router'
import Button from "../components/inputs/Button.tsx";
import Table from "../components/Table.tsx";

type test = {
  foo:string
  bar:string
}


export const Route = createLazyFileRoute('/')({
  component: () => <Index/>
})

function Index() {
  const testArr:test[] = []
  testArr.push({bar: "bar", foo: "foo"})
  testArr.push({bar: "bar2", foo: "foo2"})
  return (
      <div>
        Hello /!
        <Button onClick={() => {}}>
          gaming
        </Button>
        <Table<test> data={testArr}/>
      </div>
  )
}