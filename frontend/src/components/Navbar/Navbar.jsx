import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CardioCare</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="#">Check Availability</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/contact-form">Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
