import React from "react";
import { Spinner } from 'reactstrap';
const Loading = () => (
  <Spinner
  color="success"
  className="my-4"
  style={{ width: "6rem", height: "6rem" }}
/>
);
export default Loading;
