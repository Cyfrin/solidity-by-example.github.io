import { shallow } from "enzyme"
import React from "react"
import HoneyPot from "./index"

test("it renders", () => {
  const component = shallow(<HoneyPot />)

  expect(component).toMatchSnapshot()
})
