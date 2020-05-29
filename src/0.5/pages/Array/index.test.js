import React from "react"
import { shallow } from "enzyme"
import Array from "./index"

test("it renders", () => {
  const component = shallow(<Array />)

  expect(component).toMatchSnapshot()
})
