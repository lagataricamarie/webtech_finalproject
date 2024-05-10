import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

function Gradebook({ Toggle, setPage}) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />  
            <div className='d-flex justify-content-end mt-1'>
                <div>
                    <SearchBar onSearch={(searchTerm) => console.log('Searching for:', searchTerm)} />
                </div>
            </div>    
            <h2 className='text-black'>
                Course overview
            </h2>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#E1F5EA', height: '6rem', position: 'relative'}} onClick={() => setPage('course1')} >
                                <h5 className='fs-2c card-title'>Capstone Project and Research 1</h5>
                                <p className=''>CSS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#C5CFC8', height: '6rem', position: 'relative'}} onClick={() => setPage('course2')}>
                                <h5 className='fs-2c card-title '>Web Systems and Technologies</h5>
                                <p className=''>CCS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#F9D5BA', height: '6rem', position: 'relative'}} onClick={() => setPage('course3')}>
                                <h5 className='fs-2c card-title'>Software Engineering 2</h5>
                                <p className=''>CCS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={(e) => e.stopPropagation()}>Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gradebook;