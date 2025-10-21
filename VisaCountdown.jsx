import { useState, useEffect } from 'react';

export default function VisaCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date('2025-12-22T00:00:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return ( <
        div style = {
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontFamily: 'Arial, sans-serif'
            }
        } >
        <
        div style = {
            {
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                textAlign: 'center',
                minWidth: '300px'
            }
        } >
        <
        h1 style = {
            { color: '#333', marginTop: 0, fontSize: '28px' } } >
        Visa Expiration <
        /h1> <
        p style = {
            { color: '#666', fontSize: '14px', marginBottom: '30px' } } >
        December 22, 2025 <
        /p>

        <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '15px',
                marginBottom: '20px'
            }
        } > {
            [
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, idx) => ( <
                div key = { idx }
                style = {
                    {
                        backgroundColor: '#f0f0f0',
                        padding: '20px',
                        borderRadius: '10px'
                    }
                } >
                <
                div style = {
                    {
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#667eea'
                    }
                } > { String(item.value).padStart(2, '0') } <
                /div> <
                div style = {
                    {
                        fontSize: '12px',
                        color: '#999',
                        marginTop: '8px'
                    }
                } > { item.label } <
                /div> <
                /div>
            ))
        } <
        /div>

        <
        p style = {
            {
                color: '#999',
                fontSize: '12px',
                marginTop: '20px'
            }
        } > ⏱️Updates in real - time <
        /p> <
        /div> <
        /div>
    );
}