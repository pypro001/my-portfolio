import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";
export const ContactMe = () => {
  return (
    <Wrapper>
      <LeftSide />
      <RightSide />
      <div className="contact-footer">
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
  .contact-footer{
    display:none;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: max-content;
  .contact-footer > p{
    text-align:center;
  }
  }
`;
