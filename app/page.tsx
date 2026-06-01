export default function Home() {
  const modules = [
    { n:"01", title:"Введение и стек", desc:"Ethereum, Solidity, Next.js, wagmi — обзор всей архитектуры" },
    { n:"02", title:"Смарт-контракт", desc:"CasinoAll.sol, provably fair рандом, house edge математика, деплой" },
    { n:"03", title:"Фронтенд: настройка", desc:"Next.js 14, wagmi v2, RainbowKit, подключение кошелька" },
    { n:"04", title:"Coin Flip", desc:"Анимация монеты, синхронизация с блокчейном через React ref" },
    { n:"05", title:"Dice", desc:"Over/Under механика, динамические коэффициенты до 99×" },
    { n:"06", title:"Crash", desc:"Canvas API, RAF-анимация ракеты, паттерн pendingRef" },
    { n:"07", title:"Slots", desc:"3 барабана, 8 символов, pay table, выплаты до 50×" },
    { n:"08", title:"Баланс и история", desc:"Deposit/Withdraw, getLogs из блокчейна, GameHistory" },
    { n:"09", title:"Звуки и UX", desc:"Web Audio API без файлов, мобильная адаптация, error handling" },
    { n:"10", title:"Деплой и финал", desc:"Vercel деплой, GitHub портфолио, что строить дальше" },
  ];

  return (
    <main style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0a0a0f 0%,#0d1a2e 50%,#0a0a0f 100%)" }}>

      {/* Hero */}
      <section style={{ maxWidth:900, margin:"0 auto", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="float" style={{ fontSize:72, marginBottom:24 }}>🎰</div>

        <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", borderRadius:20, background:"rgba(0,245,255,0.08)", border:"1px solid rgba(0,245,255,0.25)", color:"#00f5ff", fontSize:13, fontWeight:600, marginBottom:24, textTransform:"uppercase", letterSpacing:"0.1em" }}>
          ⛓ On-Chain · Provably Fair · Ethereum
        </div>

        <h1 style={{ fontSize:"clamp(2.2rem,6vw,4rem)", fontWeight:900, lineHeight:1.1, marginBottom:20 }}>
          Создай{" "}
          <span style={{ background:"linear-gradient(135deg,#00f5ff,#aa00ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            крипто казино
          </span>
          {" "}с нуля
        </h1>

        <p style={{ fontSize:"clamp(1rem,2.5vw,1.25rem)", color:"rgba(255,255,255,0.6)", maxWidth:600, margin:"0 auto 40px", lineHeight:1.7 }}>
          Полный курс по созданию provably fair казино на блокчейне Ethereum.
          Смарт-контракт, 4 игры, красивый UI — от нуля до задеплоенного продукта.
        </p>

        {/* Price */}
        <div style={{ display:"inline-block", padding:"32px 48px", borderRadius:20, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(0,245,255,0.2)", marginBottom:32 }} className="glow">
          <div style={{ fontSize:14, color:"rgba(255,255,255,0.4)", marginBottom:8, textTransform:"uppercase", letterSpacing:"0.1em" }}>Полный доступ</div>
          <div style={{ fontSize:56, fontWeight:900, color:"#00f5ff", lineHeight:1 }}>$99</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,0.35)", marginTop:8 }}>или 0.035 ETH · 99 USDT</div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
          <a href="#buy" style={{ display:"inline-block", padding:"18px 48px", borderRadius:14, background:"linear-gradient(135deg,#00f5ff,#0088cc)", color:"#000", fontWeight:800, fontSize:18, textDecoration:"none", letterSpacing:"0.05em" }}>
            ⚡ Купить курс
          </a>
          <span style={{ fontSize:13, color:"rgba(255,255,255,0.3)" }}>Оплата ETH · USDT · BTC</span>
        </div>
      </section>

      {/* What you'll build */}
      <section style={{ maxWidth:900, margin:"0 auto", padding:"0 24px 80px" }}>
        <h2 style={{ textAlign:"center", fontSize:"clamp(1.5rem,4vw,2.2rem)", fontWeight:800, marginBottom:40 }}>
          Что вы построите
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16 }}>
          {[
            { icon:"🪙", title:"Coin Flip", sub:"1.95× · 2.5% edge" },
            { icon:"🎲", title:"Dice", sub:"до 99× · 1% edge" },
            { icon:"🚀", title:"Crash", sub:"до 9900× · 1% edge" },
            { icon:"🎰", title:"Slots", sub:"до 50× · 8 символов" },
          ].map(g => (
            <div key={g.title} style={{ padding:"24px", borderRadius:16, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", textAlign:"center" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>{g.icon}</div>
              <div style={{ fontWeight:700, marginBottom:4 }}>{g.title}</div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.4)" }}>{g.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section style={{ maxWidth:900, margin:"0 auto", padding:"0 24px 80px" }}>
        <h2 style={{ textAlign:"center", fontSize:"clamp(1.5rem,4vw,2.2rem)", fontWeight:800, marginBottom:40 }}>
          10 модулей · Весь путь от A до Z
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {modules.map((m,i) => (
            <div key={m.n} className="fade-in" style={{ animationDelay:`${i*0.05}s`, display:"flex", alignItems:"center", gap:16, padding:"20px 24px", borderRadius:14, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontFamily:"monospace", fontWeight:700, color:"#00f5ff", minWidth:32, fontSize:14 }}>{m.n}</span>
              <div>
                <div style={{ fontWeight:700, marginBottom:3 }}>{m.title}</div>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.45)" }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who is this for */}
      <section style={{ maxWidth:900, margin:"0 auto", padding:"0 24px 80px" }}>
        <h2 style={{ textAlign:"center", fontSize:"clamp(1.5rem,4vw,2.2rem)", fontWeight:800, marginBottom:40 }}>
          Для кого курс
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:16 }}>
          {[
            { icon:"👨‍💻", title:"JS/TS разработчики", desc:"Хотите войти в Web3 с реальным проектом" },
            { icon:"🎮", title:"Крипто-энтузиасты", desc:"Хотите понять как работают on-chain игры изнутри" },
            { icon:"💼", title:"Для портфолио", desc:"Готовый проект с кодом на GitHub и живым URL" },
          ].map(c => (
            <div key={c.title} style={{ padding:"24px", borderRadius:16, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize:32, marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontWeight:700, marginBottom:8 }}>{c.title}</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" style={{ maxWidth:600, margin:"0 auto", padding:"0 24px 100px", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(1.5rem,4vw,2.2rem)", fontWeight:800, marginBottom:16 }}>Купить курс</h2>
        <p style={{ color:"rgba(255,255,255,0.5)", marginBottom:40, lineHeight:1.7 }}>
          После оплаты вы получите доступ к приватному GitHub репо с полным кодом всех 10 модулей.
        </p>

        <div style={{ padding:"40px", borderRadius:20, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(0,245,255,0.2)" }}>
          <div style={{ fontSize:48, fontWeight:900, color:"#00f5ff", marginBottom:8 }}>$99</div>
          <div style={{ color:"rgba(255,255,255,0.4)", marginBottom:32 }}>Одноразовая оплата · Пожизненный доступ</div>

          <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
            {[
              { coin:"ETH", addr:"0x7392E13DDDD106d0c0EFef92DebdA7ce0deebcE1", amount:"0.035 ETH" },
              { coin:"USDT (TRC-20)", addr:"——", amount:"99 USDT" },
              { coin:"BTC", addr:"——", amount:"0.001 BTC" },
            ].map(p => (
              <div key={p.coin} style={{ padding:"14px 20px", borderRadius:12, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", textAlign:"left" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontWeight:700 }}>{p.coin}</span>
                  <span style={{ color:"#00f5ff", fontWeight:600 }}>{p.amount}</span>
                </div>
                {p.addr !== "——" && <div style={{ fontSize:11, color:"rgba(255,255,255,0.3)", marginTop:4, fontFamily:"monospace", wordBreak:"break-all" }}>{p.addr}</div>}
              </div>
            ))}
          </div>

          <p style={{ fontSize:13, color:"rgba(255,255,255,0.35)", lineHeight:1.7 }}>
            После оплаты отправьте TX hash на{" "}
            <a href="mailto:max.shel@truelabel.io" style={{ color:"#00f5ff" }}>max.shel@truelabel.io</a>
            {" "}— получите доступ в течение 24 часов.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"24px", textAlign:"center", color:"rgba(255,255,255,0.25)", fontSize:13 }}>
        Crypto Casino Course · Ethereum Sepolia · Только тестовая сеть
      </footer>
    </main>
  );
}
