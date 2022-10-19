import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

/**
* @author
* @function NewModal
**/

const NewModal = (props) => {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Form onSubmit={props.handleSave} className="needs-validation" noValidate>
                <Modal.Header closeButton style={{backgroundColor:'#00483d', color: '#fff'}}>
                    <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    {props.buttons ? props.buttons.map((btn, index) =>
                        <Button key={index} variant={btn.color} onClick={btn.onClick}>
                            {btn.label}
                        </Button>
                    ) :
                        <>
                            {
                                props.handleSave ?
                                    <Button className='btn-save' type="submit" >
                                        Save
                                    </Button>
                                    : null
                            }
                            <Button Button variant="outline-danger" onClick={props.handleClose}>
                                Close
                            </Button>
                        </>
                    }

                </Modal.Footer>
            </Form>
        </Modal >
    )

}

export default NewModal