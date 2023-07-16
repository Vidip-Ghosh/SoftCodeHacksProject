import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">CardioCare</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <Link class="nav-link" to="#">Check Availability</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Signup">Signup</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            </div>
    )
}
            export default Navbar
