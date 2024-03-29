import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// style="width: 6rem;"

const HeaderNavbar = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className='lunsjimgNav me-2' src="https://conluo.no/wp-content/uploads/2021/02/Logo_Lunsj_pa%E2%95%A0e_d%E2%94%9C%C2%A9ra.jpg" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5 pt-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1 ps-3">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="/">Lunsj Pa Dora Plans</p>
                            </li>
                            <li className="nav-item ms-3">
                                <p className="nav-link" href="/">How It Works</p>
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <p className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Menus
                                </p>
                                <ul className="dropdown-menu">
                                    <li><p className="dropdown-item" href="/">Action</p></li>
                                    <li><p className="dropdown-item" href="/">Another action</p></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><p className="dropdown-item" href="/">Something else here</p></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown ms-2">
                                <p class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </p>
                                <ul class="dropdown-menu">
                                    <li><p class="dropdown-item" href="#">Action</p></li>
                                    <li><p class="dropdown-item" href="#">Another action</p></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><p class="dropdown-item" href="#">Something else here</p></li>
                                </ul>
                            </li>

                            
                            <li className="nav-item ms-3">
                                <p className="nav-link disabled" aria-disabled="true">Sustainability</p>
                            </li>
                        </ul>
                        <form className="d-flex pe-3" role="search">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                            <button className="btn btn-success bg-success.bg-gradient me-5 pe-3" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default HeaderNavbar;