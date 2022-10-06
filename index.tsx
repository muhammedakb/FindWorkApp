import registerRootComponent from "expo/build/launch/registerRootComponent";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import Routes from "./src/Routes";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

registerRootComponent(App);
