import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to='/' className="logo_footer">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipus dolor ,sit amet conserctetur adipisiciong eleit qui tenetur harum pariatui
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com" target='_blank' rel='noreferer nooperer'><FaLinkedin/></a>
                    <a href="https://facebook.com" target='_blank' rel='noreferer nooperer'><FaFacebook/></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferer nooperer'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferer nooperer'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalink</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 EGATOR TUTORIALS &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer