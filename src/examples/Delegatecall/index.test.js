import React from "react"
import { shallow } from "enzyme"
import DelegateCall from "./index"

test("it renders", () => {
  const component = shallow(<DelegateCall />)

  expect(component).toMatchSnapshot()
})
