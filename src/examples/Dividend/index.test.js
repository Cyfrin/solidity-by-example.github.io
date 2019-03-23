import React from "react"
import { shallow } from "enzyme"
import Dividend from "./index"

test("it renders", () => {
  const component = shallow(<Dividend />)

  expect(component).toMatchSnapshot()
})
