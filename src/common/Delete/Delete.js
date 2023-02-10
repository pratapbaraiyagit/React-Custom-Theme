import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const Delete = ({
    deleteOpen,
    deleteClose,
    onDeleteProduct
}) => {

    return (
        <Modal isOpen={deleteOpen} toggle={deleteClose}>
            <ModalHeader toggle={deleteClose}>Delete</ModalHeader>
            <ModalBody>
                Are you sure want to delete ?
            </ModalBody>
            <ModalFooter>
                <Button color="btn btn-outline-success" onClick={deleteClose}>
                    No
                </Button>
                <Button color="btn btn-outline-danger" onClick={onDeleteProduct}>
                    Yes
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default Delete