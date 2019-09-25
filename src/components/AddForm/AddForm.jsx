import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/scss/bootstrap.scss";


const AddForm = (props) => {
    return (
        <div className="for__form">
            <Form classeName="">
                <Form.Group controlId="exampleForm.ControlInput1" className="4" >
                    <Form.Label>{props.title}</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder={props.enterTitlePost} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1" className="1" >
                    <Form.Label>{props.imageURL} </Form.Label>
                    <Form.Control type="text" className="form-control"  placeholder="Enter image URL" />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{props.description}</Form.Label>
                    <Form.Control as="textarea" rows="8" className="form-control" placeholder="Enter you post" />
                </Form.Group>
            </Form>

        </div>
    )
}




export  default AddForm;