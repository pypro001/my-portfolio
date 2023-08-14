import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../Features/app/appSlice";
import resume from '../../assets/vivek_resume.pdf'
const Navbar = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((store) => store.app);
  const checkActive = (tab) => {
    if (tab === activePage) {
      return "active-tab";
    } else return;
  };
  return (
    <div className="nav-line">
      <Wrapper className="">
        <div className="left">
          <ul>
            <li className="name">
              <Link to="/" onClick={() => {
              const element = document.body.querySelector(".landing");
              element.scrollIntoView({ behavior: "smooth", block: "end"});
            }}>
                _vivek_maurya
              </Link>
            </li>
            <li>
              <Link
                to="#home"
                onClick={() => {
                  const element = document.body.querySelector(".landing");
                  element.scrollIntoView({ behavior: "smooth", block: "end"});
                  dispatch(changePage("landing"))
                }}
                className={checkActive("landing")}
              >
                _hello
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                onClick={() => {
                  const element = document.body.querySelector(".about");
                  element.scrollIntoView({ behavior: "smooth", block: "end"});
                  dispatch(changePage("about"))
                }}
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
                  element.scrollIntoView({ behavior: "smooth", block: "end"});
                  dispatch(changePage("projects"))
                }}
                className={checkActive("projects")}
              >
                _projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <Link
            to="#contact"
            onClick={() => {
              const element = document.body.querySelector(".contact");
              element.scrollIntoView({ behavior: "smooth", block: "end"});
              dispatch(changePage("contact"))
            }}
            className={checkActive("contact")}
          >
            _contact_me
          </Link>
          <Link
            to=""
            onClick={() => {window.open(resume, '_blank');}}
          >
            _resume
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
export default Navbar;
const Wrapper = styled.main`
  z-index: 20;
  height: 50px;
  width:100%;
  display: flex;
  position: fixed;
  top: 0px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  z-index: 100000;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  a {
    color: var(--nav-text-color-inactive);
  }
  a:hover {
    color: white;
    background-color: var(--hover-shade);
  }
  .left ul {
    display: flex;
    justify-content: space-between;
    .name {
      width: 270px;
      a {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
    li {
      height: 45px;
      a {
        padding-left: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid var(--border);
        padding-right: 20px;
        font-size: 15px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      padding-right: 20px;
      display: flex;
      align-items: center;
      height: 100%;
      border-left: 1px solid var(--border);
      padding: 0px 20px;
      font-size: 15px;
    }
  }
  .active-tab {
    border-bottom: 2px solid rgb(204, 145, 35);
    color: white;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
