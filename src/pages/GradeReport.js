import React, { useState } from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

// Sample data (replace with your actual data source)
const subjects = [
    { id: 'PfC 5116-A', name: 'Capstone Project and Research 1' },
    { id: 'PfC 5116-B', name: 'Capstone Project and Research 1' }
];

function Report({ Toggle, handleBack }) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <i className='bi bi-arrow-left me-2' onClick={handleBack}></i>
            <h2 className='text-black mt-3'>Grade Report Drafts</h2>
            <div className="d-flex mt-5">
                <label htmlFor="entries" className="me-2">Show:</label>
                <select id="entries">
                    <option value="5">1</option>
                    <option value="10">2</option>
                    <option value="15">3</option>
                </select>
                <span className="ms-2">entries</span>
            </div>
            <div className="table-responsive mt-4">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '15%' }}>Subject ID</th>
                            <th scope="col" style={{ width: '25%' }}>Subject Name</th>
                            <th scope="col" style={{ width: '10%' }}>Action</th>
                            <th scope='col' style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject) => (
                            <tr key={subject.id}>
                                <td className='text-left'>{subject.id}</td>
                                <td>{subject.name}</td>
                                <td>
                                    <button className="btn btn-sm border-primary me-2 hover-button" style={{ width: '100%' }}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-sm border-success hover-button" style={{ width: '95%' }}>Export</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation" className="mt-3 d-flex justify-content-end">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Report;
