import React from "react"
import { shallow } from "enzyme"
import Home from "./index"
import { ROUTES_BY_CATEGORY as routesByCategory_ver_0_5 } from "../../pages/0.5"
import { ROUTES_BY_CATEGORY as routesByCategory_ver_0_6 } from "../../pages/0.7"

test("0.6", () => {
  const props = {
    version: "0.6.10",
    routesByCategory: routesByCategory_ver_0_6,
  }

  const component = shallow(<Home {...props} />)

  expect(component).toMatchSnapshot()
})

test("0.5", () => {
  const props = {
    version: "0.5.16",
    routesByCategory: routesByCategory_ver_0_5,
  }

  const component = shallow(<Home {...props} />)

  expect(component).toMatchSnapshot()
})
