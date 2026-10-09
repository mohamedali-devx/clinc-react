import services from '../../data/services.json'
import './services.css'

function Services() {
    return (
        <>
            <section className='section' id='services'>
                <h2>Our <span>Services</span></h2>
                <div className='grid'>
                    {services.map((s) => (
                        <div className='card' key={s.id}>
                            <img src={s.image} alt={s.title} />
                            <div className='card-body'>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <a href="#booking" className='btn'>Book Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services