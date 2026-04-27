export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #151A1D;
          color: #F7F6F4;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .bg-glow {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 15% 10%,  rgba(170,150,130,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 88% 85%,  rgba(170,150,130,0.06) 0%, transparent 55%);
        }

        .page {
          position: relative; z-index: 1;
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 56px 24px 40px;
          gap: 56px;
        }

        /* ── Header ── */
        header { text-align: center; animation: fadeUp 0.7s ease both; }

        .wordmark {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 32px;
        }

        .wordmark-diamond {
          width: 10px; height: 10px;
          background: #AA9682;
          transform: rotate(45deg);
        }

        .wordmark-text {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: rgba(170,150,130,0.8);
        }

        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.015em;
          color: #F7F6F4;
          margin-bottom: 20px;
        }

        .headline em { font-style: italic; color: #AA9682; }

        .subline {
          font-size: 14px; font-weight: 300;
          color: rgba(247,246,244,0.4);
          letter-spacing: 0.025em; line-height: 1.8;
          max-width: 360px; margin: 0 auto;
        }

        /* ── Cards ── */
        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          width: 100%; max-width: 800px;
          animation: fadeUp 0.7s 0.12s ease both;
        }

        @media (max-width: 580px) {
          .cards { grid-template-columns: 1fr; }
        }

        .card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(170,150,130,0.14);
          border-radius: 22px;
          padding: 36px 30px 30px;
          display: flex; flex-direction: column; gap: 22px;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none; color: inherit;
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.15),
                      border-color 0.3s, background 0.3s;
        }

        .card.active:hover {
          transform: translateY(-5px);
          border-color: rgba(170,150,130,0.38);
          background: rgba(255,255,255,0.05);
        }

        .card.active:hover .glow { opacity: 1; }
        .card.active:hover .cta-arrow { background: #AA9682; border-color: #AA9682; }
        .card.active:hover .cta-label { gap: 12px; }

        .card.soon {
          cursor: default;
          opacity: 0.5;
          filter: saturate(0.4);
        }

        .glow {
          position: absolute; inset: 0; pointer-events: none;
          border-radius: inherit;
          background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(170,150,130,0.09) 0%, transparent 70%);
          opacity: 0; transition: opacity 0.3s;
        }

        /* Top-right decorative corner */
        .corner {
          position: absolute; top: 0; right: 0;
          width: 72px; height: 72px;
          border-radius: 0 22px 0 72px;
          background: rgba(170,150,130,0.055);
          pointer-events: none;
        }

        /* ── Card icon ── */
        .card-icon {
          width: 50px; height: 50px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }

        .icon-flow {
          background: rgba(45,74,111,0.3);
          border: 1px solid rgba(45,74,111,0.5);
        }

        .icon-imagine {
          background: rgba(170,150,130,0.12);
          border: 1px solid rgba(170,150,130,0.28);
        }

        /* ── Card body ── */
        .card-tag {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #AA9682; margin-bottom: 8px;
        }

        .card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px; font-weight: 400;
          line-height: 1; letter-spacing: -0.01em;
          margin-bottom: 11px;
        }

        .card-name .accent { color: #AA9682; }

        .card-desc {
          font-size: 13px; font-weight: 300;
          color: rgba(247,246,244,0.45);
          line-height: 1.75;
        }

        /* ── Pills ── */
        .pills { display: flex; flex-wrap: wrap; gap: 6px; }

        .pill {
          font-size: 10.5px; font-weight: 400;
          color: rgba(247,246,244,0.38);
          background: rgba(247,246,244,0.05);
          border: 1px solid rgba(247,246,244,0.07);
          border-radius: 20px; padding: 3px 9px;
        }

        /* ── CTA ── */
        .card-cta {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid rgba(170,150,130,0.12);
        }

        .cta-label {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 12.5px; font-weight: 500;
          color: #F7F6F4; letter-spacing: 0.04em;
          transition: gap 0.22s;
        }

        .cta-arrow {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(170,150,130,0.12);
          border: 1px solid rgba(170,150,130,0.22);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          transition: background 0.22s, border-color 0.22s;
        }

        .soon-badge {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(170,150,130,0.6);
          background: rgba(170,150,130,0.08);
          border: 1px solid rgba(170,150,130,0.15);
          border-radius: 20px; padding: 4px 10px;
        }

        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #6BAF92;
          box-shadow: 0 0 7px rgba(107,175,146,0.55);
          animation: blink 2.4s infinite;
        }

        /* ── Footer ── */
        footer {
          font-size: 11.5px; font-weight: 300;
          color: rgba(247,246,244,0.18);
          letter-spacing: 0.1em;
          animation: fadeUp 0.7s 0.25s ease both;
        }

        footer span { color: rgba(170,150,130,0.3); }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>

      <div className="bg-glow" />

      <div className="page">

        {/* Header */}
        <header>
          <div className="wordmark">
            <div className="wordmark-diamond" />
            <div className="wordmark-text">Cotton Division</div>
            <div className="wordmark-diamond" />
          </div>
          <h1 className="headline">
            Your internal<br /><em>workspace</em>
          </h1>
          <p className="subline">
            Select a tool to continue. Your credentials work across all Cotton Division platforms.
          </p>
        </header>

        {/* Cards */}
        <div className="cards">

          {/* CodiFlow — LIVE */}
          <a className="card active" href="https://codiflow.cottondivision.com/login">
            <div className="glow" />
            <div className="corner" />
            <div className="card-icon icon-flow">📋</div>
            <div>
              <div className="card-tag">Licensing Workflow</div>
              <div className="card-name">
                <span className="accent">codi</span>flow
              </div>
              <p className="card-desc">
                Track every product from concept to fully approved. Manage stages, brands, deadlines, and team assignments in one place.
              </p>
            </div>
            <div className="pills">
              <span className="pill">Approval Stages</span>
              <span className="pill">Email Templates</span>
              <span className="pill">Team Management</span>
              <span className="pill">Reminders</span>
              <span className="pill">Samples Tracking</span>
            </div>
            <div className="card-cta">
              <div className="cta-label">
                Open CodiFlow
                <div className="cta-arrow">→</div>
              </div>
              <div className="status-dot" title="Live" />
            </div>
          </a>

          {/* Codimagine — COMING SOON */}
          <div className="card soon">
            <div className="corner" />
            <div className="card-icon icon-imagine">✦</div>
            <div>
              <div className="card-tag">AI Studio</div>
              <div className="card-name">
                codi<span className="accent">magine</span>
              </div>
              <p className="card-desc">
                AI-powered fashion studio. Generate model try-ons and product mockups directly from your Shopify catalogue.
              </p>
            </div>
            <div className="pills">
              <span className="pill">Virtual Try-On</span>
              <span className="pill">AI Mockups</span>
              <span className="pill">Shopify Sync</span>
              <span className="pill">Bulk Export</span>
            </div>
            <div className="card-cta">
              <div className="soon-badge">Coming Soon</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer>
          © 2025 Cotton Division <span>·</span> Internal use only
        </footer>

      </div>
    </>
  )
}
