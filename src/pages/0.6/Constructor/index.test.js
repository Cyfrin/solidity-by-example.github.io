import React from "react"
import { shallow } from "enzyme"
import Constructor from "./index"

test("it renders", () => {
  const component = shallow(<Constructor />)

  expect(component).toMatchSnapshot()
})
