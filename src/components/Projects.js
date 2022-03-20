import Card from 'react-bootstrap/Card';
import Project from './Project';
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<div className='projects'>
			<div className='cards'>
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/wordle' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="wordle.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Wordle Game</Card.Title>
					    <Card.Text className='cardText'>
					      Fun words game, using React and Redux.<br/>
					    	<a href='https://hebrewordle.herokuapp.com' target='-blank' className='cardBtn'>See the Game </a>
					    	<a href='https://github.com/binyaalex/DI_bootcamp/tree/main/wordle' target='-blank' className='cardBtn'>Github</a>
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<Project link='https://github.com/binyaalex/DI_bootcamp/tree/main/finalProject' title='Chat App' text='Very easy using chat, create by React, Node.js and Socket.io.' />
				{/*<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/finalProject' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="chat-app.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Chat App</Card.Title>
					    <Card.Text className='cardText'>
					      Very easy using chat, create by React, Node.js and Socket.io.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>*/}
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/hackathon' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="liars-dice.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Liar's Dice</Card.Title>
					    <Card.Text className='cardText'>
					      Nice dice game for two players, using JavaScript.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/week8/day5/memory-game' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="memory-game.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Memory Game</Card.Title>
					    <Card.Text className='cardText'>
					      Great memory game, using React and fetch api.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/week10/day2/weather' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="weather.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Weather App</Card.Title>
					    <Card.Text className='cardText'>
					      Simple weather app, using React and Redux.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/week9/day5/movie' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="imdb.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>IMDB</Card.Title>
					    <Card.Text className='cardText'>
					     Movies app for searching details , using React and Redux.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
			</div>
		</div>
	)
}
export default Projects