import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";
export const ContactMe = () => {
  return (
    <Wrapper>
      <LeftSide />
      <RightSide />
      <div className="footer">
        <p>
          Made with ❤ by pypro001 :)
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  position: relative;
  .footer{
    display:hidden;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: max-content;
  .footer > p{
    text-align:center;
  }
  }
`;
