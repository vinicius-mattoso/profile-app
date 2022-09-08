
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function About() {
    return (
        <div>
            <h1>this is the About page</h1>
            <div>
                <Alert dismissible variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Go back Home and try again.
                    </p>
                </Alert>
            </div>
            <div>
                <Button href="/home">Go Home </Button>
            </div>
        </div>

    );
}

export default About;