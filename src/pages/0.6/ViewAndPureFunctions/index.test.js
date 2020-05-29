import React from "react"
import { shallow } from "enzyme"
import ViewAndPureFunctions from "./index"

test("it renders", () => {
  const component = shallow(<ViewAndPureFunctions />)

  expect(component).toMatchSnapshot()
})
