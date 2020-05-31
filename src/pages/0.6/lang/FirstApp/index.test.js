import React from "react"
import { shallow } from "enzyme"
import FirstApp from "./index"

test("it renders", () => {
  const component = shallow(<FirstApp />)

  expect(component).toMatchSnapshot()
})
