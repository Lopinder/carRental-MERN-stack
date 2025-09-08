import React, { useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import LoginForm from './auth/LoginForm'
import SignupForm from './auth/SignupForm'
import logo from '../images/images/logo.png'
import bgVideo from '../images/videos/lsvideo.mp4'
import './auth/Auth.css'

function LoginSignup() {
    const [showLogin, setShowLogin] = useState(true)
    const loginRef = useRef(null)
    const signupRef = useRef(null)
    const nodeRef = showLogin ? loginRef : signupRef
    return (
        <div className="main-bg">
            <video autoPlay loop muted className="bg-video">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="center-box">
                <div className="logo-row">
                    <img src={logo} alt="Zoomo Logo" className="logo" />
                    <span className="brand">Zoomo</span>
                </div>
                <div className="toggle">
                    <button className={showLogin ? 'active' : ''} onClick={() => setShowLogin(true)}>Login</button>
                    <button className={!showLogin ? 'active' : ''} onClick={() => setShowLogin(false)}>Signup</button>
                </div>
                <SwitchTransition mode="out-in">
                    <CSSTransition key={showLogin} classNames="form-transition" timeout={500} nodeRef={nodeRef}>
                        <div ref={nodeRef} className="form-container">
                            {showLogin ? (
                                <>
                                    <LoginForm />
                                    <div className="switch-link">Don&apos;t have an account? <span className="link" onClick={() => setShowLogin(false)}>Create one</span></div>
                                </>
                            ) : (
                                <>
                                    <SignupForm />
                                    <div className="switch-link">Already have an account? <span className="link" onClick={() => setShowLogin(true)}>Login</span></div>
                                </>
                            )}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className="google-link">
                    <a href="https://workspace.google.com/intl/en_in/products/gmail/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" className="gmail-icon" />
                        Google Mail
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
