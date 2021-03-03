import {Wrapper} from "./App.styles";
import Header from "./components/header/index"
import Intro from "./components/intro/index";
import Wall from "./components/wall/index";
import {Global, css} from '@emotion/react'
import {IconsProvider} from "./sprite";

let globalStyles = css`
  :root {
    --white: #FFFFFF;
    --facebookBlack: #080808;
    --facebookBlue: #0572ef;
    --facebookGreen: #67BA6C;
    --facebookRed: #de3f4f;
    --pointer: #E30613;
    --facebookLightBlue: #e9f3fe;
    --facebookLightGrey: #e5e6eb;
    --facebookInputGrey: #f1f2f5;
    --facebookLineGrey: #CFD0D4;
    --facebookGrey: #66676b;
    --facebookGreyMedium: #8C939C;
  }

  body {
    margin: 0;
    font-size: 15px;
    color: #080808;
    background: rgba(240, 242, 245, 1);
    font-family: sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--facebookBlack);
  }

  img {
    //height: 100%;
    //width: auto;
    cursor: pointer;
  }

  //svg {
  //  width: 26px;
  //  height: 26px;
  //}

  button {
    border: none;
  }
`

function App() {
    return (
        <IconsProvider>
            <Wrapper>
                <Global
                    styles={globalStyles}
                />
                <Header/>
                <Intro/>
                <Wall/>
            </Wrapper>
        </IconsProvider>
    );
}

export default App;
