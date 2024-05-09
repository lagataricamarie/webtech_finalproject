import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nav({ Toggle }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        import('bootstrap/js/dist/dropdown');
        import('bootstrap/js/dist/collapse');

        
        const handleClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-black bg-transparent">
            <i className="bi bi-justify-left fs-4" onClick={Toggle}></i>
            <ul className="navbar-nav ms-auto flex-row">
                <li className="nav-item dropdown" ref={dropdownRef}>
                    <button className="nav-link" onClick={toggleDropdown}>
                        <img src="/images/OIP.jpg" alt="User" style={{ width: '1.9em', height: '1.9em' }} />
                    </button>
                    <div className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute', top: '100%', right: 0 }}>
                        <button className="dropdown-item" onClick={() => console.log('Profile clicked')}>Profile</button>
                        <button className="dropdown-item" onClick={() => console.log('Settings clicked')}>Settings</button>
                        <button className="dropdown-item" onClick={() => console.log('Logout clicked')}>Logout</button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
