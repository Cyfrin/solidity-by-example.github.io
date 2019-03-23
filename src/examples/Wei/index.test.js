import React from "react"
import { shallow } from "enzyme"
import Wei from "./index"

test("it renders", () => {
  const component = shallow(<Wei />)

  expect(component).toMatchSnapshot()
})
