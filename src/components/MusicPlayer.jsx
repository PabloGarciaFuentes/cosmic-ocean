import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink, Music2, Clock } from 'lucide-react';

const releases = [
  {
    id: 1,
    title: 'Deep Space Dive',
    type: 'EP',
    year: '2024',
    tracks: 5,
    duration: '28:45',
    color: '#00d4ff',
    featured: true,
  },
  {
    id: 2,
    title: 'Tidal Waves',
    type: 'Single',
    year: '2024',
    tracks: 1,
    duration: '6:32',
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'Nebula Dreams',
    type: 'Album',
    year: '2023',
    tracks: 12,
    duration: '58:20',
    color: '#e879f9',
  },
  {
    id: 4,
    title: 'Ocean Floor',
    type: 'Single',
    year: '2023',
    tracks: 1,
    duration: '5:48',
    color: '#00ffd4',
  },
];

const featuredTracks = [
  { title: 'Cosmic Drift', duration: '6:12' },
  { title: 'Abyssal Pulse', duration: '5:45' },
  { title: 'Stellar Waves', duration: '6:28' },
  { title: 'Deep Current', duration: '5:32' },
  { title: 'Infinite Horizon', duration: '4:48' },
];

function ReleaseCard({ release, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="release-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--accent-color': release.color }}
    >
      <div className="card-artwork">
        <div className="artwork-gradient" />
        <div className="artwork-icon">
          <Music2 size={32} />
        </div>
        <motion.div
          className="play-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="play-btn">
            <Play size={24} fill="currentColor" />
          </button>
        </motion.div>
      </div>
      
      <div className="card-content">
        <span className="release-type">{release.type} • {release.year}</span>
        <h3 className="release-title">{release.title}</h3>
        <div className="release-meta">
          <span>{release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}</span>
          <span>•</span>
          <span>{release.duration}</span>
        </div>
      </div>
      
      <a href="#" className="card-link" aria-label={`Listen to ${release.title}`}>
        <ExternalLink size={16} />
      </a>
    </motion.article>
  );
}

function FeaturedRelease() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  return (
    <motion.div
      className="featured-release"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="featured-artwork">
        <div className="featured-gradient" />
        <div className="featured-icon">
          <Music2 size={64} />
        </div>
        <motion.button
          className="featured-play"
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
        </motion.button>
      </div>
      
      <div className="featured-info">
        <span className="featured-label">Latest Release</span>
        <h3 className="featured-title">Deep Space Dive</h3>
        <p className="featured-subtitle">EP • 2024 • 5 tracks</p>
        
        <div className="track-list">
          {featuredTracks.map((track, i) => (
            <motion.button
              key={i}
              className={`track-item ${activeTrack === i ? 'active' : ''}`}
              onClick={() => {
                setActiveTrack(i);
                setIsPlaying(true);
              }}
              whileHover={{ x: 5 }}
            >
              <span className="track-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="track-name">{track.title}</span>
              <span className="track-duration">
                <Clock size={12} />
                {track.duration}
              </span>
            </motion.button>
          ))}
        </div>
        
        <div className="featured-cta">
          <a href="#" className="btn-stream">
            Stream on Spotify
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function MusicPlayer() {
  return (
    <section id="music" className="music-section">
      <div className="music-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Discography</span>
          <h2 className="section-title">Latest <span className="text-gradient">Releases</span></h2>
          <p className="section-subtitle">
            Explore the sonic universe of Cosmic Ocean through our latest productions.
          </p>
        </motion.div>
        
        <div className="music-grid">
          <FeaturedRelease />
          
          <div className="releases-grid">
            {releases.filter(r => !r.featured).map((release, index) => (
              <ReleaseCard key={release.id} release={release} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .music-section {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .music-container {
          max-width: 1200px;
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

        .section-subtitle {
          letter-spacing: 0.1em;
          font-size: 0.9rem;
        }
        
        .music-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        /* Featured Release */
        .featured-release {
          background: rgba(13, 13, 26, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          border: 1px solid rgba(0, 212, 255, 0.1);
          overflow: hidden;
        }
        
        .featured-artwork {
          position: relative;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .featured-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
        }
        
        .featured-icon {
          color: rgba(255, 255, 255, 0.2);
          z-index: 1;
        }
        
        .featured-play {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--color-glow-cyan);
          border: none;
          color: var(--color-cosmic-void);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
          z-index: 2;
        }
        
        .featured-info {
          padding: 2rem;
        }
        
        .featured-label {
          font-family: var(--font-display);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-glow-cyan);
        }
        
        .featured-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0.5rem 0;
        }
        
        .featured-subtitle {
          color: var(--color-text-muted);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        
        .track-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        
        .track-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: transparent;
          border: none;
          border-radius: 0.5rem;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          text-align: left;
        }
        
        .track-item:hover,
        .track-item.active {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text-primary);
        }
        
        .track-item.active {
          color: var(--color-glow-cyan);
        }
        
        .track-number {
          font-family: var(--font-display);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          min-width: 1.5rem;
        }
        
        .track-name {
          flex: 1;
          font-size: 0.9rem;
        }
        
        .track-duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        
        .featured-cta {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-stream {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid var(--color-glow-cyan);
          border-radius: 2rem;
          color: var(--color-glow-cyan);
          font-family: var(--font-display);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
        }
        
        .btn-stream:hover {
          background: var(--color-glow-cyan);
          color: var(--color-cosmic-void);
        }
        
        /* Releases Grid */
        .releases-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .release-card {
          position: relative;
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 1.25rem;
          align-items: center;
          padding: 1rem;
          background: rgba(13, 13, 26, 0.4);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s;
        }
        
        .release-card:hover {
          background: rgba(13, 13, 26, 0.6);
          border-color: rgba(0, 212, 255, 0.2);
          transform: translateX(5px);
        }
        
        .card-artwork {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 0.75rem;
          overflow: hidden;
          background: linear-gradient(135deg, var(--accent-color), transparent);
        }
        
        .artwork-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-color) 0%, rgba(5, 5, 8, 0.8) 100%);
          opacity: 0.6;
        }
        
        .artwork-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.3);
        }
        
        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .play-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: var(--color-glow-cyan);
          color: var(--color-cosmic-void);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .card-content {
          min-width: 0;
        }
        
        .release-type {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .release-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0.25rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .release-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        
        .card-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          transition: all 0.2s;
        }
        
        .card-link:hover {
          border-color: var(--color-glow-cyan);
          color: var(--color-glow-cyan);
        }
        
        /* Responsive */
        @media (max-width: 900px) {
          .music-grid {
            grid-template-columns: 1fr;
          }
          
          .featured-release {
            max-width: 500px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 600px) {
          .release-card {
            grid-template-columns: 60px 1fr;
            gap: 1rem;
          }
          
          .card-artwork {
            width: 60px;
            height: 60px;
          }
          
          .card-link {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
