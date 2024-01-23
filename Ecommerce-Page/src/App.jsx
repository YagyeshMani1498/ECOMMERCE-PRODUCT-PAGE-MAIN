import { useState } from "react";

import { TopBar } from "./components/TopBar/TopBar";
import { ImageComponent } from "./components/ImageCompoenet/ImageComponent";
import { ProductInformationWrapper } from "./components/ProductInfo/ProductInfoWrapper";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <TopBar />
        <ProductInformationWrapper>
          <ImageComponent />
          <ProductInfo />
        </ProductInformationWrapper>
      </RecoilRoot>
    </>
  );
}

export default App;
