import "./App.css";
import Button from "./components/button/Button";
import "./components/FontAwesome/index";

function App() {
	return (
		<div className='App'>
			<p>Hello</p>

			<Button buttonLabel='Click me' buttonColor='red' buttonBColor='lime' />
		</div>
	);
}

export default App;
