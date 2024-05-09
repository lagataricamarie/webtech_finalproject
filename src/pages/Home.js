import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

function Home({ Toggle }) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <div className=''>
                <SearchBar onSearch={(searchTerm) => console.log('Searching for:', searchTerm)} />
            </div>
            <h1 className='text-black mt-2'>
                Welcome, UserName!
            </h1>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-8'>
                        <div className='row'>
                        <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#E1F5EA', height: '6rem', position: 'relative'}}>
                                <h5 className='fs-2c card-title'>Capstone Project and Research 1</h5>
                                <p className=''>CSS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#">Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#C5CFC8', height: '6rem', position: 'relative'}}>
                                <h5 className='fs-2c card-title '>Web Systems and Technologies</h5>
                                <p className=''>CCS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#">Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 p-1'>
                        <div className='card'>
                            <div className='card-body' style={{backgroundColor: '#F9D5BA', height: '6rem', position: 'relative'}} >
                                <h5 className='fs-2c card-title'>Software Engineering 2</h5>
                                <p className=''>CCS_2nd_2023_24</p>
                                <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                                    <button className="btn btn-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-three-dots-vertical'></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Remove from view</a></li>
                                        <li><a className="dropdown-item" href="#">Something else</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title'>Recent Students</h3>
                                <p>Rica Marie Lagata</p>
                                <p>Rica Marie Lagata</p>
                                <p>Rica Marie Lagata</p>
                                <p>Rica Marie Lagata</p>
                                <p>Rica Marie Lagata</p>
                                <p>Rica Marie Lagata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
