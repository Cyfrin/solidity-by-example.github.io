import React from "react"
import { shallow } from "enzyme"
import DataLocations from "./index"

test("it renders", () => {
  const component = shallow(<DataLocations />)

  expect(component).toMatchSnapshot()
})
