import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Graphics = function ({ data, title, w, h }) {
  return (
    <Container>
      {title ? <span>{title}</span> : <></>}
      <BarChart width={w} height={h} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {title ? <Legend /> : <></>}
        <Bar dataKey="team" fill="#8884d8" />
        <Bar dataKey="auto" fill="#0000DE" />
      </BarChart>
    </Container>
  );
};
export default Graphics;
