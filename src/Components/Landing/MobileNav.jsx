import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { openNavbar, closeNavbar } from "../../Features/app/appSlice";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import resume from '../../assets/vivek_resume.pdf'
const MobileNav = () => {
  const dispatch = useDispatch();
  const { isNavbarOpen, activePage } = useSelector((store) => store.app);
  const checkActive = (tab) => {
    if (tab === activePage) {
      return "active-tab";
    } else return;
  };
  return (
    <>
      <Wrapper className="container">
        <p>_vivek_maurya</p>
        {!isNavbarOpen && (
          <button onClick={() => dispatch(openNavbar())}>
            <AiOutlineMenu />
          </button>
        )}
        {isNavbarOpen && (
          <button onClick={() => dispatch(closeNavbar())}>
            <AiOutlineClose />
          </button>
        )}
      </Wrapper>
      {isNavbarOpen && (
        <Wrapper2>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() =>{ dispatch(closeNavbar())}}
                className={checkActive("landing")}
              >
                _hello
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                onClick={() =>{
                  const element = document.body.querySelector(".about");
                  element.scrollIntoView({ behavior: "smooth", block: "start"});
                  dispatch(closeNavbar())}}
                className={checkActive("about")}
              >
                _about_me
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                onClick={() =>{ 
                  const element = document.body.querySelector(".projects");
                  element.scrollIntoView({ behavior: "smooth", block: "start"});
                  dispatch(closeNavbar())}}
                className={checkActive("projects")}
              >
                _projects
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                onClick={() =>{
                  const element = document.body.querySelector(".contact");
                  element.scrollIntoView({ behavior: "smooth", block: "start"});
                  dispatch(closeNavbar())}}
                className={checkActive("contact")}
              >
                _contact_me
              </Link>
            </li>
            <li>
            <Link
            to=""
            onClick={() => {window.open(resume, '_blank');}}
          >
            _resume
          </Link>
            </li>
          </ul>
          <Footer />
        </Wrapper2>
      )}
    </>
  );
};
export default MobileNav;
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--main-color-2);
    font-size: 30px;
    cursor: pointer;
    z-index: 100;
    padding: 0px;
    height: 30px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
const Wrapper2 = styled.nav`
  position: absolute;
  top: 64px;
  width: 100%;
  height: 100%;
  /* height: calc(100vh - 240px); */
  z-index: 200;

  background-color: var(--main-color-1);
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    li {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      border-bottom: 1px solid var(--border);
    }
  }
  a {
    color: var(--main-color-2);
    width: 100%;
  }
  .active-tab {
    color: white;
  }
`;
