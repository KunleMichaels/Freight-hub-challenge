import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<Header />);
  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Header", () => {
    it("should match snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
