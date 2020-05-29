import React from "react"
import { shallow } from "enzyme"
import Visibility from "./index"

test("it renders", () => {
  const component = shallow(<Visibility />)

  expect(component).toMatchSnapshot()
})
