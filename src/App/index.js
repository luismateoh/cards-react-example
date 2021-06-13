import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck, Col, Container} from "react-bootstrap";
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";
import events from "./database/db";

function Index() {

    const list = [];

    for (const event of events) {
        list.push(
            <Col className="p-3">
                <EventCard
                    name={event[0]}
                    img={event[1]}
                    stateEvent={event[2]}
                    description={event[3]}
                    place={event[4]}
                    date={event[5]}
                />
            </Col>
        )
    }

    return (
        <div>
            <Navbar/>
            <Container>
                <CardDeck>
                    {list}
                </CardDeck>
            </Container>
        </div>
    );
}

export default Index;
