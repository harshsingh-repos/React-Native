import { registerRootComponent } from "expo";

import App from "./App";
import HelloWorld from "./components/Hello_World";
import TextInputExample from "./components/InputC";
import CryptoAPI from "./components/coinloreAPI";
import CryptoAPIAsync from "./components/coinloreAsync";
import FlexDemo from "./components/stylesComponent";
import FlexLayout from "./components/FlexLayoutDemo";
import LayoutImageDemo from "./components/layoutsImageDemo";
import FetchData from "./components/axiosGet";
import PostData from "./components/axiosPost";
import FetchCoinLoreData from "./components/axiosCoinlore";
import PostDataReq from "./components/axiosPostData";
// import FlexLayout from "./components/FlexLayoutDemo";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(PostDataReq);
