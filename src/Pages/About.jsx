import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Personal from "../Components/AboutMe/Personal";

const About = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, data, activeSubData } = useSelector(
    (store) => store.app
  );


  return (
    <Wrapper className="about">
      <Personal />
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.main`
  display: flex;
  height:100vh;
  width: 100%;
  .small-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60px;
    border-right: 1px solid var(--border);
    button {
      background-color: transparent;
      color: var(--main-color-2);
      border: none;
      font-size: 25px;
      padding: 14px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      a:hover {
        color: white;
        transition: all 0.3s ease-in-out;
      }
    }
    button:hover {
      color: white;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .small-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid var(--border);
      button {
        background-color: transparent;
        color: var(--main-color-2);
        border: none;
        font-size: 25px;
        padding: 14px;
        cursor: pointer;

        a:hover {
          color: white;
        }
      }
      button:hover {
        color: white;
      }
    }
  }
  @media (max-width: 1000px) {
   height:max-content;
  }
`;
