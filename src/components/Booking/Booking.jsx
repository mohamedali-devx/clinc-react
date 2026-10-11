import './booking.css'
import services from '../../data/services.json'
import { useState, useEffect } from 'react';

const empty = { name: '', phone: '', service: services[0].title, date: '', time: '' }

function Booking() {

    const [form, setForm] = useState(empty);
    const [list, setList] = useState(() => JSON.parse(localStorage.getItem('appointments')) || [])



    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(list))
    }, [list])


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, { ...form, id: Date.now() }]);
        setForm(empty);
    }

    const remove = (id) => setList(list.filter((a) => a.id !== id))

    return (
        <>
            <section className='section' id='booking'>
                <h2>Book an <span>Appointment</span></h2>
                <form className='booking-form' onSubmit={handleSubmit}>
                    <input name='name' onChange={handleChange} value={form.name} placeholder='Patient name' type="text" required />
                    <input name='phone' onChange={handleChange} value={form.phone} placeholder='Phone number' type="text" required />
                    <select name="service" value={form.service} onChange={handleChange}>
                        {services.map((s) => <option key={s.id}>{s.title}</option>)}
                    </select>

                    <input name='date' onChange={handleChange} value={form.date} placeholder='Date' type="date" required />
                    <input name='time' onChange={handleChange} value={form.time} placeholder='Time' type="time" required />

                    <button className='btn' type='submit'>Book Now</button>
                </form>
                {list.length > 0 && (
                    <div className='appointments'>
                        <h3>Appointments</h3>
                        {list.map((a) => (
                            <div className='appointment' key={a.id}>
                                <strong>{a.name}</strong> — {a.service}
                                <p>{a.date} at {a.time} · {a.phone}</p>
                                <button onClick={() => remove(a.id)}>X</button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    )
}

export default Booking