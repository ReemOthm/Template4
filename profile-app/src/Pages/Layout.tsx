import '../.././src/SASS/Layouts/LayoutPage.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser, faFile, faCreditCard, faBell} from '@fortawesome/free-regular-svg-icons';
import { faChartBar, faGear, faDiagramProject ,faGraduationCap, faSearch  } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Layout = ()=>{


    return (
        <div className="page">
            <div className="sidebar">
                <h3>Elzero</h3> 
                <ul>
                    <li>
                        <Link to="">
                            <FontAwesomeIcon icon={faChartBar} /> 
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="settings">
                            <FontAwesomeIcon icon={faGear} /> 
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="profile">
                            <FontAwesomeIcon icon={faUser} /> 
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects">
                            <FontAwesomeIcon icon={faDiagramProject} /> 
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="courses">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span>Courses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="friends">
                            <FontAwesomeIcon icon={faCircleUser} /> 
                            <span>Friends</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="files">
                            <FontAwesomeIcon icon={faFile} /> 
                            <span>Files</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='plans'> 
                            <FontAwesomeIcon icon={faCreditCard} /> 
                            <span>Plans</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            
            <div className="content">
                <header className="header">
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} className='iconsearch' />
                        <input type="search" placeholder="Type a Keyword" />
                    </div>
                    <div className="icons">
                        <span className="notification">
                            <FontAwesomeIcon icon={faBell} className='bellIcon' />
                        </span>
                        <img src="images/avatar.png" alt="avatar" />
                    </div>
                </header>
                
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;