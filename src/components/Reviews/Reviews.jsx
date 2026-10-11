import './reviews.css'
import reviews from '../../data/review.json'
import { FaUserCircle } from 'react-icons/fa'

function Reviews() {
    return (
        <>
            <section className='section reviews' id='reviews'>
                <h2>Patient <span>Reviews</span></h2>
                <div className='grid'>
                    {reviews.map((r) => (
                        <div className='card reveiw-card' key={r.id}>
                            <FaUserCircle />
                            <h3>{r.name}</h3>
                            <p className='stars'>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</p>
                            <p className='content'>{r.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Reviews