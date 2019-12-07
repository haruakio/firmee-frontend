import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Header from './components/Header';
import Body from './components/Body';

const customTheme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 42
        }
    },
    palette: {
        // primary: blue
        primary: {
            main: blue[50]
        }
    },
    props: {
        MuiCheckbox: {
            color: "primary"
        },
        MuiList: {
            dense: true
        },
        MuiRadio: {
            color: "primary"
        },
        MuiSwitch: {
            color: "primary"
        },
        MuiTable: {
            size: "small"
        },
        MuiTextField: {
            variant: "outlined"
            // InputProps: {
            //     style: {
            //         height: 38
            //     }
            // }
        }
    },
    typography: {
        // fontFamily: "Indie Flower",
        fontSize: 12,
        button: {
            textTransform: "none"
        }
    }
});
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={customTheme}>
      <Header></Header>
      <Body />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
