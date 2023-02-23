import "./App.css";
import "./components/FontAwesome/index";
import Button from "./components/button/Button";
import InNumber from "./components/inNumber/InNumber";
import InText from "./components/textArea/TextArea";
import Card from "./components/card/Card";
import InfoText from "./Info/InfoText";
function App() {
	return (
		<div className='App'>
			<p>Hello button</p>

			<Button buttonLabel='Click me' buttonColor='red' buttonBColor='lime' />
			<p> Hello input</p>
			<InNumber
				inNumberBgColor='gray'
				inNumberColor='white'
				inNumberBorderSize='2px'
				inNumberBorderRadius='8px'
				inNumberBorderColor='blue'
			/>
			<p> Hello text area</p>
			<InText
				inNumberBgColor='white'
				inNumberColor='black'
				inNumberBorderSize='3px'
				inNumberBorderRadius='6px'
				inNumberBorderColor='yellow'
			/>

			<div>
				<p>Hello Card</p>
				<Card></Card>
			</div>
			<div>
				<p>Hello Card2</p>
				<InfoText />
			</div>
		</div>
	);
}

export default App;
