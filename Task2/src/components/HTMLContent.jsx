import React from 'react';
import { motion } from 'framer-motion';

export default function HTMLContent() {
  return (
    <div className="container" style={{ position: 'relative' }}>
      {/* Page 1: Hero */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '10vh' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-glow" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            TECHFEST 2026<br />CA PROGRAM
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '500px', marginBottom: '2rem' }}>
            Join the cybernetic revolution. Represent IIT Bombay's premier science and technology festival in your college and unlock exclusive rewards.
          </p>
          <button className="glass-panel text-glow-secondary" style={{ 
            padding: '16px 32px', 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            color: 'var(--color-primary)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
          }}
          >
            INITIALIZE REGISTRATION
          </button>
        </motion.div>
      </section>

      {/* Page 2: About / Responsibilities */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingTop: '10vh' }}>
        <div style={{ width: '40%', minWidth: '300px' }}>
          <h2 className="text-glow" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'right' }}>YOUR MISSION</h2>
          
          <div className="glass-panel" style={{ padding: '32px', marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Publicize</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Spread the word about Techfest 2026 within your college network. Become the central node of information.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Coordinate</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Organize workshops, manage student participation, and serve as the direct bridge to IIT Bombay.</p>
          </div>
        </div>
      </section>

      {/* Page 3: Perks */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '10vh' }}>
         <div style={{ width: '40%', minWidth: '300px' }}>
          <h2 className="text-glow" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>REWARDS ALGORITHM</h2>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { title: 'Certificates', desc: 'Official certification from Techfest, IIT Bombay.' },
              { title: 'Merchandise', desc: 'Exclusive T-shirts and Techfest swags.' },
              { title: 'Internships', desc: 'Top CAs get premium internship opportunities.' },
              { title: 'Free Access', desc: 'VIP entry to concerts and speaker sessions.' }
            ].map((perk, i) => (
              <li key={i} className="glass-panel" style={{ padding: '24px', marginBottom: '16px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{perk.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{perk.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Page 4: Stats or Social Proof */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10vh' }}>
        <h2 className="text-glow" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>NETWORK PROTOCOL</h2>
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { num: '2500+', label: 'COLLEGES' },
            { num: '150+', label: 'EVENTS' },
            { num: '5M+', label: 'REACH' }
          ].map((stat, i) => (
             <div key={i} className="glass-panel" style={{ padding: '40px', textAlign: 'center', minWidth: '200px' }}>
                <div className="text-glow-secondary" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '16px' }}>{stat.num}</div>
                <div style={{ color: 'var(--color-text-muted)', letterSpacing: '2px', fontWeight: 'bold' }}>{stat.label}</div>
             </div>
          ))}
        </div>
      </section>

      {/* Page 5: Footer CTA */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10vh' }}>
        <h2 className="text-glow" style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>READY TO UPLINK?</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', textAlign: 'center' }}>
          The mainframe is waiting for your connection.
        </p>
        <button className="glass-panel" style={{ 
          padding: '24px 64px', 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          color: '#fff',
          background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent))',
          border: 'none',
          borderRadius: '30px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 30px var(--color-accent)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          EXECUTE // JOIN NOW
        </button>
      </section>
    </div>
  );
}
