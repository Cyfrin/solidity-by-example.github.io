import React from "react"
import { shallow } from "enzyme"
import Struct from "./index"

test("it renders", () => {
  const component = shallow(<Struct />)

  expect(component).toMatchSnapshot()
})
