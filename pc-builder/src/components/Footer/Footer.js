import React from 'react';
import './Footer.css';

const Footer = () => {

    const blackColor = {
        color: 'black'
    }

    return (
        <div>
            <footer class="container-fluid py-3 bg-success text-white" id="contact-us">
                <div class="footer-content">
                    <div class="social-icons">
                        <a href="https://github.com/taibislamdipu" target="_blank" rel="noreferrer" class="footer-icon" title="GitHub taibislamdipu">
                            <i class="fab fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/taibislamdipu/" target="_blank" rel="noreferrer" class="footer-icon"
                            title="LinkedIn taibislamdipu">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://linkedin.com/company/yellow-devs" target="_blank" rel="noreferrer" class="footer-icon"
                            title="LinkedIn Yellow Devs">
                            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <p >
                            Copyright &copy; <span id="currentYear"></span> Yellow Devs | Site designed by <a
                                href="https://yellow-devs.netlify.app/" target="_blank" rel="noreferrer" title="Yellow Devs Website">
                                <span className="text-white" style={blackColor} >Yellow Devs</span></a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;