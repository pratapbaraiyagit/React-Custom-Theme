import React from 'react'
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'
import './index.css'

const AddEditForm = (props) => {
    const {
        name,
        modal,
        toggleModal,
        onCancel,
        handleSubmit,
        myFormData,
        formErrors,
        onChangeInput,
        onCheckBoxChange,
        // imageUpload
    } = props

    switch (name) {
        case "Add Professor Form":
            return (
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={onCancel}>Product Form</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <Row className=' align-items-center pt-1'>
                                <Col lg={12}>
                                    {/* <Input
                                type='file'
                                id="image"
                                name='image'
                                // value={myFormData.productName}
                                onChange={imageUpload}
                            /> */}
                                    <Label for='productName'>Product Name</Label>
                                    <Input
                                        type='text'
                                        id="productName"
                                        name='productName'
                                        placeholder='Product Name'
                                        value={myFormData.productName}
                                        onChange={onChangeInput}
                                    />
                                    {formErrors.productName && (<small className="text-danger">{formErrors.productName}</small>)}
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for="productDescription">Description</Label>
                                        <Input
                                            type="textarea"
                                            id="productDescription"
                                            name="productDescription"
                                            maxLength={250}
                                            rows="3"
                                            value={myFormData.productDescription}
                                            onChange={onChangeInput}
                                            placeholder="Product Description"
                                        />
                                        {formErrors.productDescription && (<small className="text-danger">{formErrors.productDescription}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup>
                                        <Label for="productCategory">
                                            Select Category
                                        </Label>
                                        <Input
                                            type="select"
                                            id="productCategory"
                                            name="productCategory"
                                            value={myFormData.productCategory}
                                            onChange={onChangeInput}
                                        >
                                            <option disabled="disabled" hidden>Select Category</option>
                                            <option>Man</option>
                                            <option>Woman</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup>
                                        <Label for="productPrice">Product Price</Label>
                                        <Input
                                            type="number"
                                            id="productPrice"
                                            name="productPrice"
                                            value={myFormData.productPrice}
                                            onChange={onChangeInput}
                                            placeholder="Product Price"
                                        />
                                        {formErrors.productPrice && (<small className="text-danger">{formErrors.productPrice}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <Label>Cloth Size</Label>
                                    <FormGroup>
                                        <Row className='align-items-center pt-1'>
                                            <Col lg={3} md={2}>
                                                <Input
                                                    name="inStock"
                                                    type="checkbox"
                                                    value='Small'
                                                    checked={myFormData.size.indexOf("Small") !== -1 ? true : false}
                                                    onChange={onCheckBoxChange}
                                                />
                                                {' '}
                                                <Label check>Small</Label>
                                            </Col>
                                            <Col lg={3} md={2}>
                                                <Input
                                                    name="inStock"
                                                    type="checkbox"
                                                    value='Medium'
                                                    checked={myFormData.size.indexOf("Medium") !== -1 ? true : false}
                                                    onChange={onCheckBoxChange}
                                                />
                                                {' '}
                                                <Label check>Medium</Label>
                                            </Col>
                                            <Col lg={3} md={2}>
                                                <Input
                                                    name="inStock"
                                                    type="checkbox"
                                                    value='Large'
                                                    checked={myFormData.size.indexOf("Large") !== -1 ? true : false}
                                                    onChange={onCheckBoxChange}
                                                />
                                                {' '}
                                                <Label check>Large</Label>
                                            </Col>
                                        </Row>
                                        {formErrors.size && (<small className="text-danger">{formErrors.size}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <Label>Stock</Label>
                                    <FormGroup>
                                        <Row className='align-items-center pt-1'>
                                            <Col lg={3} md={4}>
                                                <Input
                                                    name="inStock"
                                                    type="radio"
                                                    value='In Stock'
                                                    checked={myFormData.inStock === 'In Stock' ? true : false}
                                                    onChange={onChangeInput}
                                                />
                                                {' '}
                                                <Label check>In Stock</Label>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <Input
                                                    name="inStock"
                                                    type="radio"
                                                    value='Out of Stock'
                                                    checked={myFormData.inStock === 'Out of Stock' ? true : false}
                                                    onChange={onChangeInput}
                                                />
                                                {' '}
                                                <Label check>Out Of Stock</Label>
                                            </Col>
                                        </Row>
                                        {formErrors.inStock && (<small className="text-danger">{formErrors.inStock}</small>)}
                                    </FormGroup>
                                </Col>
                            </Row>

                            <ModalFooter>
                                <Button color="btn btn-outline-danger" onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button type='submit' color='btn btn-outline-success'>
                                    Save
                                </Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            )

        case "Add Sport Student Form":
            return (
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={onCancel}> Sport Student Form</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <Row className=' align-items-center pt-1'>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='sportStudentName'>Sport Student Name</Label>
                                        <Input
                                            type='text'
                                            id="sportStudentName"
                                            name='sportStudentName'
                                            placeholder='Student Name'
                                            value={myFormData.sportStudentName}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.sportStudentName && (<small className="text-danger">{formErrors.sportStudentName}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='sportAssignCoach'>Assigned Coach</Label>
                                        <Input
                                            type='text'
                                            id="sportAssignCoach"
                                            name='sportAssignCoach'
                                            placeholder='Assigned Coach'
                                            value={myFormData.sportAssignCoach}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.sportAssignCoach && (<small className="text-danger">{formErrors.sportAssignCoach}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='sportStudentDate'>Sport Student Date</Label>
                                        <Input
                                            type='date'
                                            id="sportStudentDate"
                                            name='sportStudentDate'
                                            value={myFormData.sportStudentDate}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.sportStudentDate && (<small className="text-danger">{formErrors.sportStudentDate}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='sportStudentTime'>Time</Label>
                                        <Input
                                            type='time'
                                            id="sportStudentTime"
                                            name='sportStudentTime'
                                            value={myFormData.sportStudentTime}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.sportStudentTime && (<small className="text-danger">{formErrors.sportStudentTime}</small>)}
                                    </FormGroup>
                                </Col>
                            </Row>

                            <ModalFooter>
                                <Button color="btn btn-outline-danger" onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button type='submit' color='btn btn-outline-success'>
                                    Save
                                </Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            )

        case "Add Student Form":
            return (
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={onCancel}> Student Form</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <Row className=' align-items-center pt-1'>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='studentName'>Name</Label>
                                        <Input
                                            type='text'
                                            id="studentName"
                                            name='studentName'
                                            placeholder='Name'
                                            value={myFormData.studentName}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.studentName && (<small className="text-danger">{formErrors.studentName}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='studentDepartment'>Department</Label>
                                        <Input
                                            type='text'
                                            id="studentDepartment"
                                            name='studentDepartment'
                                            placeholder='Department'
                                            value={myFormData.studentDepartment}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.studentDepartment && (<small className="text-danger">{formErrors.studentDepartment}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='studentMobile'>Mobile No.</Label>
                                        <Input
                                            type='number'
                                            id="studentMobile"
                                            name='studentMobile'
                                            value={myFormData.studentMobile}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.studentMobile && (<small className="text-danger">{formErrors.studentMobile}</small>)}
                                    </FormGroup>
                                </Col>
                                <Col lg={12} className=' align-items-center pt-1'>
                                    <FormGroup>
                                        <Label for='admissionDate'>Admission Date</Label>
                                        <Input
                                            type='date'
                                            id="admissionDate"
                                            name='admissionDate'
                                            value={myFormData.admissionDate}
                                            onChange={onChangeInput}
                                        />
                                        {formErrors.admissionDate && (<small className="text-danger">{formErrors.admissionDate}</small>)}
                                    </FormGroup>
                                </Col>
                            </Row>

                            <ModalFooter>
                                <Button color="btn btn-outline-danger" onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button type='submit' color='btn btn-outline-success'>
                                    Save
                                </Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            )

    }
}

export default AddEditForm