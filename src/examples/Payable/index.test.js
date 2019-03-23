import React from "react"
import { shallow } from "enzyme"
import Payable from "./index"

test("it renders", () => {
  const component = shallow(<Payable />)

  expect(component).toMatchSnapshot()
})
