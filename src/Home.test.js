import React from "react"
import { shallow } from "enzyme"
import Home from "./Home"

test("it renders", () => {
  const component = shallow(<Home />)

  expect(component).toMatchSnapshot()
})
