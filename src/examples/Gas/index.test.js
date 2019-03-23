import React from "react"
import { shallow } from "enzyme"
import Gas from "./index"

test("it renders", () => {
  const component = shallow(<Gas />)

  expect(component).toMatchSnapshot()
})
