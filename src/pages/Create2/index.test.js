import React from "react"
import { shallow } from "enzyme"
import Create2 from "./index"

test("it renders", () => {
  const component = shallow(<Create2 />)

  expect(component).toMatchSnapshot()
})
