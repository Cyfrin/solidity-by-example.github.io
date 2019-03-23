import React from "react"
import { shallow } from "enzyme"
import Footer from "./Footer"

test("it renders", () => {
  const component = shallow(<Footer />)

  expect(component).toMatchSnapshot()
})
