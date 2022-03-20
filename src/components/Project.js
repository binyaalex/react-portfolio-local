import Card from 'react-bootstrap/Card';

const project = (props) => {
	const {link, title, text} = props
	return (
		<a className='cardWrap' href={link} target='-blank'>
			<Card className='card'>
			  <Card.Img className='projectImg' variant="top" src="chat-app.jpg" />
			  <Card.Body>
			    <Card.Title className='title'>{title}</Card.Title>
			    <Card.Text className='cardText'>
			      {text}
			    </Card.Text>
			  </Card.Body>
			</Card>
		</a>
	)
}

export default project
