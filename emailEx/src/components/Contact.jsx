import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Contact = () => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Header as="h5">Contact me</Card.Header>
                <Card.Body>
                    <Card.Text>
                        For questions or feedback, please choose a category
                        below:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Header>General Inquiry</Card.Header>
                <Card.Body>
                    <Card.Text>
                        For general inquiries, please email us at:
                    </Card.Text>
                    <Button variant="primary">general@example.com</Button>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Header>Feedback</Card.Header>
                <Card.Body>
                    <Card.Text>
                        We value your feedback! Please share your comments at:
                    </Card.Text>
                    <Button variant="warning">feedback@example.com</Button>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Header>Support</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Need assistance! Contact our support team at:
                    </Card.Text>
                    <Button variant="secondary">support@example.com</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contact;
