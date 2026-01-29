import React from "react";
import "./App.css";

function App() {
  const ca = "EwcVckR7G28Hzzg4XxBnEC3uEYjgKx9kyLQBsbLHpump";

  return (
    <div>
      {/* PINNED BACKGROUND VIDEO WITH VIGNETTE */}
<video 
  className="bg-video-fixed" 
  src={process.env.PUBLIC_URL + '/bg.mp4'} 
  autoPlay 
  loop 
  muted 
  playsInline 
/>      <div className="bg-overlay" /> {/* Extra layer for contrast if needed */}

      {/* 1. HERO */}
      <section className="hero" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <div className="content">
          <p style={{letterSpacing: '5px', opacity: 0.6, fontSize: '11px', marginBottom: '20px'}}>WERNER HERZOG, 2014</p>
          <h1 className="title" style={{textShadow: '0 0 30px rgba(0,0,0,0.5)'}}>RETARDED<br/>CHICKEN</h1>
          <p style={{fontWeight: 900, fontSize: '24px', letterSpacing: '4px', margin: '20px 0'}}>$CHICKEN</p>
          <div className="ca-box" onClick={() => {navigator.clipboard.writeText(ca); alert("Copied!")}}>CA: {ca}</div>
        </div>
      </section>

      {/* 2. THE PENGUIN */}
      <section className="section-full">
        <div className="content-box">
          <span className="quote-mark">“</span>
          <h2 className="main-quote">
            The Nietzschean Penguin went <br/> absolutely nuclear.
          </h2>
          <h2 className="main-quote">
            A suicidal penguin turned into a <br/>
            <span className="highlight-blue">$170M Solana beast.</span>
          </h2>
          <p style={{ fontStyle: 'italic', opacity: 0.5, margin: '40px 0 20px' }}>After that, there was only one animal left.</p>
          <h3 className="highlight-blue" style={{ fontSize: '24px', textTransform: 'uppercase' }}>The chicken?</h3>
          <p className="blue-label" style={{ color: 'rgba(255,255,255,0.3)', marginTop: '40px' }}>— Werner Herzog</p>
        </div>
      </section>

      {/* 3. A CHICKEN'S LAST WALK */}
      <section className="section-full">
        <div className="content-box">
          <span className="blue-label">HERZOG</span>
          <h2 className="section-header-italic">A Chicken's Last Walk</h2>
          <div className="sub-card"><span className="card-num">01</span><h3 className="main-quote" style={{ fontSize: '28px' }}>The Obsession</h3><p style={{ opacity: 0.5 }}>Werner Herzog has a long, almost obsessive disdain for chickens.</p></div>
          <div className="sub-card"><span className="card-num">02</span><h3 className="main-quote" style={{ fontSize: '28px' }}>The Description</h3><p style={{ opacity: 0.5 }}>He describes them as terrifying. Not confusion. Not innocence. An abyss.</p></div>
        </div>
      </section>

      {/* 4. THE ABYSS QUOTE */}
      <section className="section-full">
        <div className="content-box">
          <h2 className="main-quote" style={{fontSize: 'clamp(24px, 4vw, 36px)'}}>"Look into the eyes of a chicken and you will see real stupidity."</h2>
          <h2 className="main-quote">"A kind of bottomless stupidity. A fiendish stupidity."</h2>
          <p style={{ opacity: 0.5, margin: '30px 0' }}>— Werner Herzog</p>
          <div style={{marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
            <p style={{marginBottom: '10px', opacity: 0.6}}>Not confusion. Not innocence.</p>
            <p style={{fontWeight: '700', color: '#4dc9f0', letterSpacing: '2px'}}>AN ABYSS.</p>
          </div>
        </div>
      </section>

{/* 5. THE CLIP */}
      <section className="section-full">
        <div className="content-box">
          <h2 style={{fontFamily: 'impact, sans-serif', textTransform: 'uppercase', fontSize: '40px', letterSpacing: '2px'}}>THE CLIP</h2>
          
          {/* Added the requested content below */}
          <p style={{opacity: 0.5, margin: '15px 0 30px', lineHeight: '1.6'}}>
            This clip has lived on the internet for years.<br/>
            It speaks for itself.
          </p>

          <div className="video-container">
             <iframe 
               width="100%" 
               height="450" 
               src="https://www.youtube.com/embed/QhMo4WlBmGM" 
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen>
             </iframe>
          </div>
        </div>
      </section>

      {/* 6. WHY IT WORKS (FANCY GLASS GRID) */}
      <section className="section-full">
        <div className="content-box" style={{ background: 'transparent', border: 'none', boxShadow: 'none', backdropFilter: 'none' }}>
          <h2 style={{ fontFamily: 'impact, sans-serif', textTransform: 'uppercase', fontSize: '50px', letterSpacing: '3px', marginBottom: '10px' }}>
            WHY IT WORKS
          </h2>
          <p style={{ opacity: 0.6, letterSpacing: '2px', fontSize: '14px', textTransform: 'uppercase' }}>
            Creepy. Ridiculous. Uncomfortable.
          </p>
          
          <div className="why-grid-fancy">
            <div className="why-card-fancy">
              <h3 className="why-card-title-fancy">THE EYES</h3>
              <p className="why-card-text-fancy">
                The huge, empty eyes feel vacant and hostile at the same time. They do not reflect thought. They reflect nothing.
              </p>
            </div>
            
            <div className="why-card-fancy">
              <h3 className="why-card-title-fancy">THE EXPRESSION</h3>
              <p className="why-card-text-fancy">
                The open beak and extended tongue are not funny by accident. They feel unhinged. Wrong.
              </p>
            </div>
            
            <div className="why-card-fancy">
              <h3 className="why-card-title-fancy">THE ATMOSPHERE</h3>
              <p className="why-card-text-fancy">
                Rain. Storm clouds. Harsh light. Nature looks indifferent. Almost annoyed.
              </p>
            </div>
            
            <div className="why-card-fancy">
              <h3 className="why-card-title-fancy">THE REACTION</h3>
              <p className="why-card-text-fancy">
                You laugh. Then you feel slightly uneasy. That tension is the meme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL BUY & SOCIALS */}
      <section className="section-full">
        <div className="content-box buy-section-box">
          <h1 className="title" style={{fontSize: 'clamp(50px, 10vw, 100px)'}}>$CHICKEN</h1>
          <p className="blue-label" style={{color: 'white', opacity: 0.5}}>The Abyss is calling.</p>
          
          <a 
            href="https://pump.fun/coin/EwcVckR7G28Hzzg4XxBnEC3uEYjgKx9kyLQBsbLHpump" 
            target="_blank" 
            rel="noreferrer" 
            className="buy-btn"
          >
            BUY $CHICKEN
          </a>

          <div className="social-links">
            <a 
              href="https://x.com/i/communities/2015369247288176917" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
            >
              X / Twitter Community
            </a>
          </div>
          
          <p style={{marginTop: '60px', fontSize: '10px', opacity: 0.2, letterSpacing: '2px'}}>
            © 2026 RETARDED CHICKEN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;