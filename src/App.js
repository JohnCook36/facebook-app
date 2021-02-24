import {Wrapper} from "./App.styles";
import Header from "./components/header";
import Intro from "./components/intro";

function App() {
  return (
      <Wrapper>
        <Header/>
          <Intro/>
      </Wrapper>
  );
}

export default App;
