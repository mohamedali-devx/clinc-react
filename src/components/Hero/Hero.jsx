import './hero.css'

function Hero() {
    return (
        <>
            <section className='hero' id='home'>
                <div className='hero-text'>
                    <h2>Your Perfect <span>Smile</span> Starts Here</h2>
                    <p>Modern dental care with a gentle touch. Book your visit in less than a minute.</p>
                    <a href="#booking" className='btn'>Book Appoinment</a>
                </div>
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?fm=jpg&q=60&w=900&auto=format&fit=crop" alt="clinic" />
            </section>
        </>
    )
}

export default Hero