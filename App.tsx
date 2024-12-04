import React from "react";
import Home from "./src/views/Home";
import { StatusBar } from "react-native";

const App: React.FC = () => (
	<>
		<StatusBar
			translucent
			backgroundColor='transparent'
			barStyle='light-content'
		/>
		<Home />
	</>
);

export default App;
