import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { setLines } from "../../Features/app/appSlice";

const Info = () => {
  const dispatch = useDispatch();
  const { data, activeSubData } = useSelector((store) => store.app);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

 
  return (
    <Wrapper>
      <p ref={ref}>{activeSubData}</p>
    </Wrapper>
  );
};
export default Info;
const Wrapper = styled.section`
  margin: 0px;
  width: 50%;
  padding: 20px 0px;
  padding-right: 20px;
  height: 100vh;
  border-right: 1px solid var(--border);

  p {
    line-height: 25px;
    padding: 0px;
    margin: 0px;
  }
  @media (max-width: 1000px) {
    padding: 20px 20px;
    width: 100%;
    height: fit-content;
    overflow: scroll;
    border-bottom: 1px solid var(--border);
  }
`;
