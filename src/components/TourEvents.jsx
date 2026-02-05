import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, ArrowRight } from 'lucide-react';

const upcomingEvents = [
    {
        id: 1,
        date: 'MAR 15',
        day: 'SAT',
        venue: 'Warehouse Project',
        city: 'Manchester, UK',
        type: 'Festival',
        soldOut: false,
    },
    {
        id: 2,
        date: 'MAR 22',
        day: 'SAT',
        venue: 'Fabric',
        city: 'London, UK',
        type: 'Club Night',
        soldOut: false,
    },
    {
        id: 3,
        date: 'APR 05',
        day: 'SAT',
        venue: 'Berghain',
        city: 'Berlin, DE',
        type: 'Club Night',
        soldOut: true,
    },
    {
        id: 4,
        date: 'APR 19',
        day: 'SAT',
        venue: 'Printworks',
        city: 'London, UK',
        type: 'Festival',
        soldOut: false,
    },
    {
        id: 5,
        date: 'MAY 03',
        day: 'SAT',
        venue: 'Rex Club',
        city: 'Paris, FR',
        type: 'Club Night',
        soldOut: false,
    },
];

function EventCard({ event, index }) {
    return (
        <motion.article
            className="event-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 8 }}
        >
            <div className="event-date">
                <span className="date-main">{event.date}</span>
                <span className="date-day">{event.day}</span>
            </div>

            <div className="event-divider" />

            <div className="event-details">
                <h3 className="event-venue">{event.venue}</h3>
                <div className="event-meta">
                    <span className="event-city">
                        <MapPin size={14} />
                        {event.city}
                    </span>
                    <span className="event-type">{event.type}</span>
                </div>
            </div>

            <motion.a
                href="#"
                className={`event-cta ${event.soldOut ? 'sold-out' : ''}`}
                whileHover={{ scale: event.soldOut ? 1 : 1.05 }}
                whileTap={{ scale: event.soldOut ? 1 : 0.95 }}
            >
                {event.soldOut ? (
                    <span>Sold Out</span>
                ) : (
                    <>
                        <Ticket size={16} />
                        <span>Tickets</span>
                    </>
                )}
            </motion.a>
        </motion.article>
    );
}

export default function TourEvents() {
    return (
        <section id="tour" className="tour-section">
            <div className="tour-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Live Shows</span>
                    <h2 className="section-title">Upcoming <span className="text-gradient">Events</span></h2>
                    <p className="section-subtitle">
                        Experience the cosmic journey live. Catch Cosmic Ocean at a venue near you.
                    </p>
                </motion.div>

                <div className="events-list">
                    {upcomingEvents.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>

                <motion.div
                    className="tour-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#" className="view-all-link">
                        View all dates
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>

            <style>{`
        .tour-section {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .tour-container {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-label {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-glow-cyan);
          margin-bottom: 1rem;
        }
        
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .event-card {
          display: grid;
          grid-template-columns: 100px auto 1fr auto;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem;
          background: rgba(13, 13, 26, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s;
        }
        
        .event-card:hover {
          background: rgba(13, 13, 26, 0.7);
          border-color: rgba(0, 212, 255, 0.2);
        }
        
        .event-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .date-main {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .date-day {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .event-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(0, 212, 255, 0.3),
            transparent
          );
        }
        
        .event-details {
          min-width: 0;
        }
        
        .event-venue {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .event-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .event-city {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
        }
        
        .event-type {
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          background: rgba(168, 85, 247, 0.2);
          color: var(--color-glow-violet);
          border-radius: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .event-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-glow-cyan);
          border: none;
          border-radius: 2rem;
          color: var(--color-cosmic-void);
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
        }
        
        .event-cta.sold-out {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-text-muted);
          cursor: not-allowed;
        }
        
        .tour-footer {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-secondary);
          font-family: var(--font-display);
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .view-all-link:hover {
          color: var(--color-glow-cyan);
        }
        
        /* Responsive */
        @media (max-width: 700px) {
          .event-card {
            grid-template-columns: 1fr;
            gap: 1rem;
            text-align: center;
          }
          
          .event-date {
            flex-direction: row;
            justify-content: center;
            gap: 0.75rem;
          }
          
          .event-divider {
            display: none;
          }
          
          .event-meta {
            justify-content: center;
          }
          
          .event-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
}
