import React from "react";
import Header from "./components/Header";
import Inline from "./components/Inline";
import Popup from "./components/Popup";



function App() {

	return (
		<div>
			<div>
				<Header></Header>
			</div>
			<div>
				<Inline></Inline>
			</div>
			<div>
				<Popup></Popup>
			</div>
		</div>
	);
}

export default App;