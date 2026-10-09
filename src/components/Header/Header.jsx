import './header.css'

function Header() {
    return (
        <>
            <header className='header'>
                <h1>Smile<span>Care</span></h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#booking" className='btn'>Book Now</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header