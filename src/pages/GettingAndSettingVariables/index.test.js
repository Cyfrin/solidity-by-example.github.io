import React from "react"
import { shallow } from "enzyme"
import GettingAndSettingVariables from "./index"

test("it renders", () => {
  const component = shallow(<GettingAndSettingVariables />)

  expect(component).toMatchSnapshot()
})
