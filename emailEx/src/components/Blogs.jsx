import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Header as="h5">Blogs</Card.Header>
                <Card.Body>
                    <Card.Title>Blog Articles</Card.Title>
                    <Card.Text>
                        Find the latest articles and blog post here.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0" className="mt-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item # 1</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Header>Card Header # 1 </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Here's some content for the second blog
                                    article...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Header>Card Header # 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Here's some content for the second blog
                                    article...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        <Card>
                            <Card.Header>Card Header # 3</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Here's some content for the second blog
                                    article...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;
