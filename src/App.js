import {Wrapper} from "./App.styles";
import Header from "./components/header/index"
import Intro from "./components/intro/index";

function App() {
  return (
      <Wrapper>
        <Header/>
        <Intro/>
      </Wrapper>
  );
}

export default App;
