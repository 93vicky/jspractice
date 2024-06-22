import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import Nav from "./Nav";

const Crud = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', phone: '', message: '' });
    const [tableData, setTableData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex != null) {
            const updatedData = [...tableData];
            updatedData[editIndex] = inputs;
            setTableData(updatedData);
            setEditIndex(null)
        } else {
            setTableData((prevTabledata) => [
                ...prevTabledata,
                inputs
            ])
        }

        setInputs({ name: '', email: '', phone: '', message: '' });
        setShowModal(false); // Hide modal after submitting form
    };

    const handleDelete = (index) => {
        const filteredItem = tableData.filter((item, i) => i !== index);
        setTableData(filteredItem)
    }

    const handleEdit = (index) => {
        const tempData = tableData[index];
        setInputs({
            name: tempData.name,
            email: tempData.email,
            phone: tempData.phone,
            message: tempData.message
        });
        setEditIndex(index);
        setEditClick(true)
        setShowModal(true);
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setEditIndex(null);
        setEditClick(false)
        setInputs({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="crud_wrapper">
                            <div className="btn_wrapper">
                                <h3>Employee Lists</h3>
                                <Button variant="primary" onClick={handleShow}>
                                    Add Employee
                                </Button>
                            </div>

                            <Modal show={showModal} onHide={handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Employee</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={inputs.name}
                                                onChange={handleChange}
                                                placeholder="Enter Name"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={inputs.email}
                                                onChange={handleChange}
                                                placeholder="Enter Email"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone No.</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={inputs.phone}
                                                onChange={handleChange}
                                                placeholder="Enter Phone Number"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="message"
                                                value={inputs.message}
                                                onChange={handleChange}
                                                placeholder="Enter Message"
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="mt-2 w-100">
                                            {editClick ? 'Update' : 'Save'}
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <div className="row">
                                <div className="col-12">
                                <div className="table_wrapper">
                                    {tableData.length > 0 ? (
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.message}</td>
                                                        <td>
                                                            <button className="btn-sm btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                                            <button className="btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p style={{ textAlign: 'center', padding: '20px', fontWeight: 600 }}>No items found</p>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crud;