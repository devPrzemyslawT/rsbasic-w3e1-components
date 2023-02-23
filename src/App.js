import "./App.css";
import "./components/FontAwesome/index";
import Button from "./components/button/Button";
import InNumber from "./components/inNumber/InNumber";
import InText from "./components/textArea/TextArea";

function App() {
	return (
		<div className='App'>
			<p>Hello</p>

			<Button buttonLabel='Click me' buttonColor='red' buttonBColor='lime' />
			<InNumber
				inNumberBgColor='gray'
				inNumberColor='white'
				inNumberBorderSize='2px'
				inNumberBorderRadius='8px'
				inNumberBorderColor='blue'
			/>
			<InText
				inNumberBgColor='white'
				inNumberColor='black'
				inNumberBorderSize='3px'
				inNumberBorderRadius='6px'
				inNumberBorderColor='yellow'
			/>
		</div>
	);
}

export default App;
