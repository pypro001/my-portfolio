import Side from "./Side";
import styled from "styled-components";
import RightContent from "./RightContent";
import { useSelector, useDispatch } from "react-redux";

const Hobbies = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, data } = useSelector((store) => store.app);

  return (
    <Wrapper>
      <Side />
      <RightContent />
    </Wrapper>
  );
};
export default Hobbies;
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
