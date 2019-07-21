import React from "react";
import { Spin } from 'antd';

const Loading = () => (
  <div className={`load`}>
    <Spin tip='Loading...' />
  </div>
);

export default Loading;
