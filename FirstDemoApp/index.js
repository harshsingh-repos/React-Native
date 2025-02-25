import { registerRootComponent } from "expo";

import App from "./App";
import HelloWorld from "./components/helloWorld";
import HelloWorldStyle from "./components/helloWorld_Style";
import ScrollViewExample from "./components/ScrollView";
import FlatListExample from "./components/flatList";
import SectionListExample from "./components/sectionList";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(SectionListExample);
