import React from 'react';

function Sidebar({ setPage }) {
    return (
        <div className='bg-white sidebar p-2'>
            <div className='m-2 d-flex align-items-center'>
                <img className='bi bi-bootstrap-fill me-3 fs-4' src='/images/tlc-lms.png' alt='Logo' style={{ height: '2.5rem', width:'4.5rem' }} />
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2' onClick={() => setPage('home')}>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span className="d-none d-sm-inline">Dashboard</span>
                </a>
                <a className='list-group-item py-2' onClick={() => setPage('gradebook')}>
                    <i className='bi bi-book fs-5 me-3'></i>
                    <span className="d-none d-sm-inline">Gradebook</span>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
