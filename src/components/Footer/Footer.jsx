import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <h3>Smile<span>Care</span></h3>
            <p>Giza, Egypt +20 100 000 0000, smilecare@careless@gmail.com</p>
            <p>© {new Date().getFullYear()} SmileCare Clinc. All rights reserved.</p>
        </footer>
    )
}

export default Footer