'use client'
import { useState } from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WindowTop from "../components/WindowTop"
import { CgShapeHexagon } from "react-icons/cg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from "./Events.module.css";

export default function Page() {
    const [date, setDate] = useState(new Date(2023, 2, 12));

    const events = [
        { date: '03-12-2023', title: 'AI in Something', description: 'Exploring the intersection of AI and modern technology.' },
        { date: '03-26-2023', title: 'Machine Learning Workshop', description: 'A hands-on workshop building your first neural network.' },
        { date: '04-09-2023', title: 'Generative AI Seminar', description: 'Understanding the capabilities and ethics of generative models.' },
    ];

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"Events Calender"}/>
                    <div className={styles.calendarContainer}>
                        <div className={styles.calendarWrapper}>
                            <Calendar 
                                onChange={onChange} 
                                value={date}
                                className={styles.calendar}
                            />
                        </div>

                        <div className={styles.eventsListSection}>
                            <h2 className={styles.eventsListTitle}>Events List</h2>
                            {events.map((event, index) => (
                                <div key={index} className={styles.eventItem}>
                                    <div className={styles.eventDate}>{event.date}</div>
                                    <div className={styles.eventTitle}>{event.title}</div>
                                    <div className={styles.eventDescription}>{event.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}