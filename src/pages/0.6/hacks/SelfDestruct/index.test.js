import React from "react"
import { shallow } from "enzyme"
import SelfDestruct from "./index"

test("it renders", () => {
  const component = shallow(<SelfDestruct />)

  expect(component).toMatchSnapshot()
})
