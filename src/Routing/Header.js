import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
              <table className="navbar-nav">
                <tr>
                <td className="nav-item">
                  <Link to='/home' className="nav-link" aria-current="page">
                   <button className='buttonz btn-4'><span>Home</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/student' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Student</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/contact' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Contact</span></button></Link>
                </td>
                </tr>
              </table>
          </nav>
    </div>
  )
}

export default Header