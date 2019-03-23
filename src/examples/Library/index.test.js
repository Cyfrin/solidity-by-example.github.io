import React from "react"
import { shallow } from "enzyme"
import Library from "./index"

test("it renders", () => {
  const component = shallow(<Library />)

  expect(component).toMatchSnapshot()
})
