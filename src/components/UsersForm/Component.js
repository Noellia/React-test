import React, {PureComponent} from 'react';

import {Container, Form, FormGroup, Label, Input} from 'reactstrap';

class UsersForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            statename: '',
            statelastname: '',
            stateage: ''
        };
    }

    handleChange(value, property) {
        this.setState(
            () => ({[property]: value})
        );
    }

    render() {
        const {
            name,
            lastname,
            age,
            submitAction
        } = this.props;

        const {
            stateName,
            stateLastname,
            stateAge
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input
                            key="exampleName"
                            type="name"
                            name="name"
                            id="exampleName"
                            placeholder="with a placeholder"
                            value={stateName}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateName')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLastname">Lastname</Label>
                        <Input
                            key="exampleLastname"
                            type="lastname"
                            name="lastname"
                            id="exampleLastname"
                            placeholder="lastnameplaceholder"
                            value={stateLastname}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateLastname')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAge">Lastname</Label>
                        <Input
                            key="exampleAge"
                            type="age"
                            name="age"
                            id="exampleAge"
                            placeholder="ageplaceholder"
                            value={stateAge}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateAge')
                            }
                        />
                    </FormGroup>

                    
                    <Button
                        onClick={() => submitAction(
                            stateName,
                            stateLastname,
                            stateAge
                        )}
                    >
                        Submit
                    </Button>
                </Form>
                <Row>
                    <Col>
                        La propiedad name es de valor igual a = &nbsp;
                        {name}
                        <br/>
                        La propiedad lastname es de valor igual a = &nbsp;
                        {lastname}
                        <br/>
                        La propiedad age es de valor igual a = &nbsp;
                        {age}
                    </Col>
                </Row>
            </Container>
        );
    }
}
        
export default UsersForm;
