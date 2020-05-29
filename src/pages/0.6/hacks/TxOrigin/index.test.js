import { shallow } from "enzyme"
import React from "react"
import TxOrigin from "./index"

test("it renders", () => {
  const component = shallow(<TxOrigin />)

  expect(component).toMatchSnapshot()
})
