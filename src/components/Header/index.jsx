import './style.css'
import {useEffect, useState} from 'react'

const Header = (() => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return(
        <header className={scrolled ? 'scrolled' : ''}>
            <p>Logo</p>

            <nav className="header-links">
                <ul className="header-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portifolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
})

export default Header