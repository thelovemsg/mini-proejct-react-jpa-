import React from "react";
import CustomRight from "./components/page/structure/CustomRight.js";
import CustomFooter from "./components/page/structure/CustomFooter.js";
import CustomContent from "./components/page/structure/CustomContent.js";
import CustomHeader from "./components/page/structure/CustomHeader.js";
import {
  ContentStyle,
  FooterStyle,
  HeaderStyle,
  SiderStyle,
  MiddleWarpper,
  BodyWrapper,
  BodyLimitWrapper,
} from "./components/style/CusPageStyle.js";

let bool = true;
const App = () => (
  <BodyWrapper>
    <BodyLimitWrapper>
      <HeaderStyle>
        <CustomHeader />
      </HeaderStyle>
      <MiddleWarpper>
        <ContentStyle>
          {bool ? (
            <CustomContent title="text1" />
          ) : (
            <CustomContent title="text2" />
          )}
        </ContentStyle>
        <SiderStyle>
          <CustomRight />
        </SiderStyle>
      </MiddleWarpper>
      <FooterStyle>
        <CustomFooter />
      </FooterStyle>
    </BodyLimitWrapper>
  </BodyWrapper>
);

export default App;
