import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Home = () => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Header as="h5">Welcome</Card.Header>
                <Card.Body>
                    <Card.Title>Home Page</Card.Title>
                    <Card.Text>
                        This is the homepage of our website, Explore other
                        sections using the navigation above.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Subscribe to our newsletter for updates.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Subscribe
                </Button>
            </Form>
        </Container>
    );
};

export default Home;
