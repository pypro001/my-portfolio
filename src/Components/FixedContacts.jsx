import {
  AiOutlineCaretDown,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import styled from "styled-components";
export const FixedContacts = () => {
  return (
    <Wrapper>
      <p className="title">
        <AiOutlineCaretDown />
        contacts
      </p>
      <div className="contacts">
        <p>
          {" "}
          <AiOutlineMail />
          mail.vivek.maurya@gmail.com
        </p>
      </div>
    </Wrapper>
  );
};

export default FixedContacts;

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
