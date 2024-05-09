import React, { useState } from 'react';
import Nav from './Nav';
import { Modal, Button } from 'react-bootstrap';

function Course({ Toggle, handleBack }) {
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div className='container-fluid px-3'>
            <Nav Toggle={Toggle} />
            <div className='d-flex align-items-center'>
                <i className='bi bi-arrow-left me-2' onClick={handleBack}></i>
                <h2 className='text-black mt-2'>Web Systems and Technologies </h2>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='btn mt-4 me-2 border-secondary' onClick={toggleModal}>
                        <i className='bi bi-gear-fill fs-5 me-2'></i>
                        Change Percentages
                    </div>
                    <div className='btn mt-4 me-2 border-secondary' onClick={toggleShow}>
                        <i className='bi bi-justify fs-5 me-2'></i>
                        View Final Grade
                    </div>
                </div>
                <div className='col text-end'>
                    <div className='btn mt-4 me-2 border-secondary'>
                        <i className='bi bi-file-text fs-5 me-2'></i>
                        Grade Report
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col'>
                    <div className='table-responsive p-3'>
                            <table className="table caption-top bg-white rounded">
                                <caption className='text-black fs-6'>PfC 5116-A</caption>
                                <colgroup>
                                    <col style={{ width: '12%' }} />
                                    <col style={{ width: '18%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '10%' }} />
                                    <col style={{ width: '10%' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Activities</th>
                                        <th></th>
                                        <th></th>
                                        <th>Quizzes</th>
                                        <th></th>
                                        <th></th>
                                        <th className="d-flex justify-content-end">
                                            <i className="bi bi-pencil-fill text-primary"></i>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Student ID</th>
                                        <th>Fullname</th>
                                        <th>Act1</th>
                                        <th>Act2</th>
                                        <th>Act3</th>
                                        <th>Qz1</th>
                                        <th>Qz2</th>
                                        <th>Qz3</th>
                                        <th>Project Output</th>
                                        <th>Major Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>C-2021-0245</td>
                                        <td>John Paul Janaban</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                    <tr>
                                    <td>C-2021-0831</td>
                                        <td>Rica Marie Lagata</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                    <tr>
                                        <td>C-2021-0831</td>
                                        <td>Kc Sarmiento</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='table-responsive p-3 mt-3'>
                            <table className="table caption-top bg-white rounded">
                                <caption className='text-black fs-6'>PfC 5116-B</caption>
                                <colgroup>
                                    <col style={{ width: '12%' }} />
                                    <col style={{ width: '18%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '3%' }} />
                                    <col style={{ width: '10%' }} />
                                    <col style={{ width: '10%' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Activities</th>
                                        <th></th>
                                        <th></th>
                                        <th>Quizzes</th>
                                        <th></th>
                                        <th></th>
                                        <th className="d-flex justify-content-end">
                                            <i className="bi bi-pencil-fill text-primary"></i>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Student ID</th>
                                        <th>Fullname</th>
                                        <th>Act1</th>
                                        <th>Act2</th>
                                        <th>Act3</th>
                                        <th>Qz1</th>
                                        <th>Qz2</th>
                                        <th>Qz3</th>
                                        <th>Project Output</th>
                                        <th>Major Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>C-2021-0245</td>
                                        <td>Jerame Espinola</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                    <tr>
                                    <td>C-2021-0811</td>
                                        <td>Lj Pegal</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                    <tr>
                                        <td>C-2021-0821</td>
                                        <td>Princess Annie Rojas</td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                        <td><input type="text" placeholder='--' style={{ width: '50px', border: '0px', textAlign: 'center' }} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header>
                    <Modal.Title>Class Grading Percentage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col text-end">
                            <div className="btn border-primary mt-3">+</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="mb-3 d-flex flex-column mt-3 align-items-center">
                                <label htmlFor="activity1" className="form-label fw-bold">Activities (?%):</label>
                                <input type="number" className="form-control" id="activity1" placeholder="--" style={{ width: '150px' }} />
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="mb-3 d-flex flex-column mt-3 align-items-center">
                                <label htmlFor="activity2" className="form-label fw-bold">Quizzes(?%):</label>
                                <input type="number" className="form-control" id="activity2" placeholder="--" style={{ width: '150px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className="mb-3 d-flex flex-column">
                            <label htmlFor="activity2" className="form-label fw-bold">Project Output(?%):</label>
                            <input type="number" className="form-control" id="activity2" placeholder="--"  />
                        </div>
                    </div>
                    <div className='btn btn mt-3 me-2 border-primary' >
                        CHANGE
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show} onHide={toggleShow} size='lg'>
                <Modal.Header>
                    <Modal.Title>Final Grade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='btn me-2 border-secondary' >
                    <i className='bi bi-people fs-5 me-2'></i>
                    PfC 5116-A
                </div>
                <div className='btn me-2 border-secondary' >
                    <i className='bi bi-people fs-5 me-2'></i>
                    PfC 5116-B
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Course;