import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import WeDo from "./components/WeDo";
import BottomNav from "./components/BottomNav";
import Tools from "./components/Tools";


const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#fd7967",
			contrastText: "#fff"
		}
	}
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Header />
					<WeDo />
					<Products />
					<Tools />
					<BottomNav />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
