import React from "react"
import { shallow } from "enzyme"
import Function from "./index"

test("it renders", () => {
  const component = shallow(<Function />)

  expect(component).toMatchSnapshot()
})
