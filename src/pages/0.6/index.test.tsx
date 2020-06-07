import React from "react"
import { shallow } from "enzyme"
import Home from "./index"

test("it renders", () => {
  const component = shallow(<Home />)

  expect(component).toMatchSnapshot()
})
