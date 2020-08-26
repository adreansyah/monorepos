import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "../src/Theme";
import { normalize } from "../src/Theme/_normalize";
import { reset } from "../src/Theme/_reset";
import "../src/Theme/index.css";
import { addParameters, addDecorator, configure } from "@storybook/react";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}

  .sbdocs {
      &&&{
        &-content {
          max-width: 1400px;
          width: 90%;
        }
    }
  }
`;

const styles = {
  padding: 16
};

addDecorator(withKnobs);
addDecorator(story => (
  <Router>
    <ThemeProvider theme={theme}>
      <div style={styles}>
        <React.Fragment>
          <GlobalStyle />
          {story()}
        </React.Fragment>
      </div>
    </ThemeProvider>
  </Router>
));
