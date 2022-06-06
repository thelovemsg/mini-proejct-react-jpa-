import styled from "styled-components";

const BodyWrapper = styled.div`
  background-color: #443b38;
`;

const BodyLimitWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
`;

const NavBarWrapper = styled.div`
  width: 100%;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: #4b4543;
`;

const SiderStyle = styled.div`
  width: 25%;
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: red;
`;

const ContentStyle = styled.div`
  width: 75%;
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: green;
`;

const FooterStyle = styled.div`
  height: 10vh;
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: black;
`;

const MiddleWarpper = styled.div`
  height:75vh;
  width:100%;
  display: flex;
  justify:-content:space-between;
  align-item: center;
`;

export {
  HeaderStyle,
  SiderStyle,
  ContentStyle,
  FooterStyle,
  MiddleWarpper,
  BodyWrapper,
  NavBarWrapper,
  BodyLimitWrapper,
};
