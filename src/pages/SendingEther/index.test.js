import React from "react"
import { shallow } from "enzyme"
import SendingEther from "./index"

test("it renders", () => {
  const component = shallow(<SendingEther />)

  expect(component).toMatchSnapshot()
})
