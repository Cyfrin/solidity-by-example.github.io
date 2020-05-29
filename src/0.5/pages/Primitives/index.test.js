import React from "react"
import { shallow } from "enzyme"
import Primitives from "./index"

test("it renders", () => {
  const component = shallow(<Primitives />)

  expect(component).toMatchSnapshot()
})
