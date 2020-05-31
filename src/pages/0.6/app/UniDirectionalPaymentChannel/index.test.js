import React from "react"
import { shallow } from "enzyme"
import Page from "./index"

test("it renders", () => {
  const component = shallow(<Page />)

  expect(component).toMatchSnapshot()
})
