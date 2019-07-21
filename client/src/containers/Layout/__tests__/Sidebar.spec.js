import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sidebar from "../Sidebar";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<Sidebar />);
  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Sidebar", () => {
    it("should match snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
