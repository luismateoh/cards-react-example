import {Badge, Button, Card} from "react-bootstrap";

export default function EventCard(
    {
        name,
        img,
        stateEvent,
        description,
        place,
        date,
    }
) {

    let bagState;
    if (stateEvent === "upcoming") {
        bagState = <div><Badge variant="primary">Upcoming</Badge> · {date}</div>
    } else if (stateEvent === "inprogress") {
        bagState = <div><Badge variant="success">In progress</Badge> · {date}</div>
    } else {
        bagState = <div><Badge variant="danger">Finished</Badge> · {date}</div>
    }

    return (
        <Card style={{width: '18rem'}}>
            <Card.Header>{bagState}</Card.Header>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle >{place}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    );
}