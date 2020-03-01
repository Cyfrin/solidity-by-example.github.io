import React from "react"
import { shallow } from "enzyme"
import MerkleTree from "./index"

test("it renders", () => {
  const component = shallow(<MerkleTree />)

  expect(component).toMatchSnapshot()
})
