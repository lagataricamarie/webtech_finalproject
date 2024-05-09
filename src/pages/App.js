import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Gradebook from './Gradebook';
import Home from './Home';
import Course from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';
import Report from './GradeReport';

function App() {
    const [currentPage, setCurrentPage] = useState('home', 'gradebook', 'course1', 'course2', 'course3', 'gradereport');
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && toggle) {
                setToggle(false);
            } else if (window.innerWidth >= 768 && !toggle) {
                setToggle(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [toggle]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (window.innerWidth < 768 && toggle) {
            setToggle(false);
        }
    };
    

    const Toggle = () => {
        setToggle(!toggle);
    };

    const handleBack = () => {
        setCurrentPage('gradebook');
    };
    const handleBackC1 = () => {
        setCurrentPage('course1');
    };

    const handleBackC2 = () => {
        setCurrentPage('course2');
    };

    const handleBackC = () => {
        setCurrentPage('course3');
    };


    return (
        <div className='container-fluid bg-light min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-3 col-md-2 bg-white min-vh-100'>
                        <Sidebar setPage={handlePageChange} />
                    </div>
                )}
                <div className={`col ${toggle ? 'col-md-9 col-lg-10' : 'col-md-12'}`}>
                    {currentPage === 'home' && <Home Toggle={Toggle} />}
                    {currentPage === 'gradebook' && <Gradebook Toggle={Toggle} pageSet={handlePageChange} />}
                    {currentPage === 'course1' && <Course Toggle={Toggle} handleBack={handleBack} set={handlePageChange}/>}
                    {currentPage === 'course2' && <Course2 Toggle={Toggle} handleBack={handleBack} set={handlePageChange}/>}
                    {currentPage === 'course3' && <Course3 Toggle={Toggle} handleBack={handleBack} set={handlePageChange}/>}
                    {currentPage === 'gradereport' && <Report Toggle={Toggle} handleBack={handleBack} />}
                </div>
            </div>
        </div>
    );
}

export default App;
