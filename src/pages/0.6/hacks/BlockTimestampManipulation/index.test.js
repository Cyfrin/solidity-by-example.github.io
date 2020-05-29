import { shallow } from "enzyme"
import React from "react"
import Page from "./index"

test("it renders", () => {
  const component = shallow(<Page />)

  expect(component).toMatchSnapshot()
})
