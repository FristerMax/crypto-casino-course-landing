"use client";
import { useState } from "react";

const MODULES_RU = [
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

const MODULES_EN = [
  { n:"01", title:"Introduction & Stack", desc:"Ethereum, Solidity, Next.js, wagmi — full architecture overview" },
  { n:"02", title:"Smart Contract", desc:"CasinoAll.sol, provably fair randomness, house edge math, deployment" },
  { n:"03", title:"Frontend Setup", desc:"Next.js 14, wagmi v2, RainbowKit, wallet connection" },
  { n:"04", title:"Coin Flip Game", desc:"Coin animation, blockchain sync via React ref pattern" },
  { n:"05", title:"Dice Game", desc:"Over/Under mechanics, dynamic multipliers up to 99×" },
  { n:"06", title:"Crash Game", desc:"Canvas API, RAF rocket animation, pendingRef pattern" },
  { n:"07", title:"Slots Game", desc:"3 reels, 8 symbols, pay table, payouts up to 50×" },
  { n:"08", title:"Balance & History", desc:"Deposit/Withdraw, getLogs from blockchain, GameHistory" },
  { n:"09", title:"Sounds & UX", desc:"Web Audio API without files, mobile adaptation, error handling" },
  { n:"10", title:"Deploy & Final", desc:"Vercel deploy, GitHub portfolio, what to build next" },
];

const GAMES = [
  { icon:"🪙", title_ru:"Coin Flip", title_en:"Coin Flip", sub:"1.95× · 2.5% edge" },
  { icon:"🎲", title_ru:"Dice",      title_en:"Dice",      sub:"до 99× · 1% edge" },
  { icon:"🚀", title_ru:"Crash",     title_en:"Crash",     sub:"до 9900× · 1% edge" },
  { icon:"🎰", title_ru:"Slots",     title_en:"Slots",     sub:"до 50× · 8 symbols" },
];

const t = {
  ru: {
    badge: "⛓ On-Chain · Provably Fair · Ethereum",
    hero: <>Создай <span style={{background:"linear-gradient(135deg,#00f5ff,#aa00ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>крипто казино</span> с нуля</>,
    sub: "Полный курс по созданию provably fair казино на блокчейне Ethereum. Смарт-контракт, 4 игры, красивый UI — от нуля до задеплоенного продукта.",
    fullAccess: "Полный доступ",
    price_sub: "или 0.013 ETH · 39 USDT",
    buyBtn: "⚡ Купить курс",
    payText: "Оплата ETH · USDT · BTC",
    built: "Что вы построите",
    modules: "10 модулей · Весь путь от A до Z",
    for: "Для кого курс",
    for1_t: "JS/TS разработчики", for1_d: "Хотите войти в Web3 с реальным проектом",
    for2_t: "Крипто-энтузиасты", for2_d: "Хотите понять как работают on-chain игры изнутри",
    for3_t: "Для портфолио", for3_d: "Готовый проект с кодом на GitHub и живым URL",
    buy: "Купить курс",
    buy_sub: "После оплаты вы получите доступ к приватному Telegram-каналу с полными материалами курса.",
    buy_desc: "Одноразовая оплата · Пожизненный доступ",
    bot_btn: "💬 Написать боту для оплаты",
    bot_sub: "Отправьте TX hash — бот проверит и выдаст доступ автоматически",
    footer: "Crypto Casino Course · Ethereum Sepolia · Только тестовая сеть",
    modules_list: MODULES_RU,
  },
  en: {
    badge: "⛓ On-Chain · Provably Fair · Ethereum",
    hero: <>Build a <span style={{background:"linear-gradient(135deg,#00f5ff,#aa00ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Crypto Casino</span> from Scratch</>,
    sub: "Complete course on building a provably fair on-chain casino on Ethereum. Smart contract, 4 games, beautiful UI — from zero to deployed product.",
    fullAccess: "Full Access",
    price_sub: "or 0.013 ETH · 39 USDT",
    buyBtn: "⚡ Buy Course",
    payText: "Pay with ETH · USDT · BTC",
    built: "What You Will Build",
    modules: "10 Modules · Full Path from A to Z",
    for: "Who is this course for",
    for1_t: "JS/TS Developers", for1_d: "Want to enter Web3 with a real project",
    for2_t: "Crypto Enthusiasts", for2_d: "Want to understand how on-chain games work from the inside",
    for3_t: "Portfolio", for3_d: "A finished project with code on GitHub and a live URL",
    buy: "Buy Course",
    buy_sub: "After payment you will get access to a private Telegram channel with full course materials.",
    buy_desc: "One-time payment · Lifetime access",
    bot_btn: "💬 Message Bot to Pay",
    bot_sub: "Send TX hash — bot will verify and grant access automatically",
    footer: "Crypto Casino Course · Ethereum Sepolia Testnet",
    modules_list: MODULES_EN,
  },
};

const BOT_URL = "https://t.me/CryptoCasinoDevBot";
const ETH_ADDR = "0xF9290D4dcFA06BD751d28CBF1A304EC82264166A";
const BTC_ADDR = "15sPpRgm23k9BV45FA9fF2oy72RbUXepHy";

export default function Home() {
  const [lang, setLang] = useState<"ru"|"en">("ru");
  const T = t[lang];
  const modules = T.modules_list;

  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(135deg,#0a0a0f 0%,#0d1a2e 50%,#0a0a0f 100%)"}}>

      {/* Lang switcher */}
      <div style={{position:"fixed",top:16,right:16,zIndex:100,display:"flex",gap:8}}>
        {(["ru","en"] as const).map(l => (
          <button key={l} onClick={()=>setLang(l)}
            style={{padding:"6px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",
              background:lang===l?"rgba(0,245,255,0.15)":"rgba(255,255,255,0.04)",
              color:lang===l?"#00f5ff":"rgba(255,255,255,0.4)",cursor:"pointer",fontWeight:600,fontSize:13}}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"80px 24px 60px",textAlign:"center"}}>
        <div className="float" style={{fontSize:72,marginBottom:24}}>🎰</div>

        <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",borderRadius:20,
          background:"rgba(0,245,255,0.08)",border:"1px solid rgba(0,245,255,0.25)",
          color:"#00f5ff",fontSize:13,fontWeight:600,marginBottom:24,textTransform:"uppercase",letterSpacing:"0.1em"}}>
          {T.badge}
        </div>

        <h1 style={{fontSize:"clamp(2.2rem,6vw,4rem)",fontWeight:900,lineHeight:1.1,marginBottom:20}}>
          {T.hero}
        </h1>

        <p style={{fontSize:"clamp(1rem,2.5vw,1.2rem)",color:"rgba(255,255,255,0.6)",maxWidth:600,margin:"0 auto 40px",lineHeight:1.7}}>
          {T.sub}
        </p>

        <div style={{display:"inline-block",padding:"32px 48px",borderRadius:20,
          background:"rgba(255,255,255,0.04)",border:"1px solid rgba(0,245,255,0.2)",marginBottom:32}} className="glow">
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,justifyContent:"center"}}>
            <div style={{fontSize:14,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{T.fullAccess}</div>
            <span style={{padding:"2px 10px",borderRadius:20,background:"linear-gradient(135deg,#ff4444,#cc0000)",color:"#fff",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em"}}>SALE</span>
          </div>
          <div style={{display:"flex",alignItems:"baseline",gap:12,justifyContent:"center"}}>
            <div style={{fontSize:28,fontWeight:700,color:"rgba(255,255,255,0.3)",textDecoration:"line-through"}}>$99</div>
            <div style={{fontSize:64,fontWeight:900,color:"#00f5ff",lineHeight:1}}>$39</div>
          </div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8}}>{T.price_sub}</div>
        </div>

        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
          <a href="#buy" style={{display:"inline-block",padding:"18px 48px",borderRadius:14,
            background:"linear-gradient(135deg,#00f5ff,#0088cc)",color:"#000",fontWeight:800,fontSize:18,
            textDecoration:"none",letterSpacing:"0.05em"}}>
            {T.buyBtn}
          </a>
          <span style={{fontSize:13,color:"rgba(255,255,255,0.3)"}}>{T.payText}</span>
        </div>
      </section>

      {/* Games */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 80px"}}>
        <h2 style={{textAlign:"center",fontSize:"clamp(1.5rem,4vw,2.2rem)",fontWeight:800,marginBottom:40}}>{T.built}</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16}}>
          {GAMES.map(g => (
            <div key={g.title_en} style={{padding:"24px",borderRadius:16,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center"}}>
              <div style={{fontSize:40,marginBottom:12}}>{g.icon}</div>
              <div style={{fontWeight:700,marginBottom:4}}>{lang==="ru"?g.title_ru:g.title_en}</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.4)"}}>{g.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 80px"}}>
        <h2 style={{textAlign:"center",fontSize:"clamp(1.5rem,4vw,2.2rem)",fontWeight:800,marginBottom:40}}>{T.modules}</h2>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {modules.map((m,i) => (
            <div key={m.n} style={{display:"flex",alignItems:"center",gap:16,padding:"20px 24px",borderRadius:14,
              background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{fontFamily:"monospace",fontWeight:700,color:"#00f5ff",minWidth:32,fontSize:14}}>{m.n}</span>
              <div>
                <div style={{fontWeight:700,marginBottom:3}}>{m.title}</div>
                <div style={{fontSize:13,color:"rgba(255,255,255,0.45)"}}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For who */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 80px"}}>
        <h2 style={{textAlign:"center",fontSize:"clamp(1.5rem,4vw,2.2rem)",fontWeight:800,marginBottom:40}}>{T.for}</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
          {[
            {icon:"👨‍💻",t:T.for1_t,d:T.for1_d},
            {icon:"🎮",t:T.for2_t,d:T.for2_d},
            {icon:"💼",t:T.for3_t,d:T.for3_d},
          ].map(c => (
            <div key={c.t} style={{padding:"24px",borderRadius:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)"}}>
              <div style={{fontSize:32,marginBottom:12}}>{c.icon}</div>
              <div style={{fontWeight:700,marginBottom:8}}>{c.t}</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Buy */}
      <section id="buy" style={{maxWidth:600,margin:"0 auto",padding:"0 24px 100px",textAlign:"center"}}>
        <h2 style={{fontSize:"clamp(1.5rem,4vw,2.2rem)",fontWeight:800,marginBottom:16}}>{T.buy}</h2>
        <p style={{color:"rgba(255,255,255,0.5)",marginBottom:40,lineHeight:1.7}}>{T.buy_sub}</p>

        <div style={{padding:"40px",borderRadius:20,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(0,245,255,0.2)",marginBottom:24}}>
          <div style={{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:4}}>
            <span style={{padding:"2px 10px",borderRadius:20,background:"linear-gradient(135deg,#ff4444,#cc0000)",color:"#fff",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em"}}>SALE -60%</span>
          </div>
          <div style={{display:"flex",alignItems:"baseline",gap:10,justifyContent:"center",marginBottom:8}}>
            <span style={{fontSize:24,fontWeight:700,color:"rgba(255,255,255,0.3)",textDecoration:"line-through"}}>$99</span>
            <span style={{fontSize:52,fontWeight:900,color:"#00f5ff",lineHeight:1}}>$39</span>
          </div>
          <div style={{color:"rgba(255,255,255,0.4)",marginBottom:32}}>{T.buy_desc}</div>

          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>
            {[
              {coin:"ETH / USDT (ERC-20)", addr:ETH_ADDR, amount:"0.013 ETH / 39 USDT"},
              {coin:"BTC",                 addr:BTC_ADDR,  amount:"0.0004 BTC"},
            ].map(p => (
              <div key={p.coin} style={{padding:"14px 20px",borderRadius:12,background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.1)",textAlign:"left"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontWeight:700}}>{p.coin}</span>
                  <span style={{color:"#00f5ff",fontWeight:600}}>{p.amount}</span>
                </div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:4,fontFamily:"monospace",wordBreak:"break-all"}}>{p.addr}</div>
              </div>
            ))}
          </div>

          {/* Bot button */}
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer"
            style={{display:"block",padding:"16px 24px",borderRadius:14,
              background:"linear-gradient(135deg,#229ED9,#1a7faa)",color:"#fff",
              fontWeight:800,fontSize:16,textDecoration:"none",marginBottom:12}}>
            {T.bot_btn}
          </a>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.6}}>{T.bot_sub}</p>
        </div>
      </section>

      <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"24px",textAlign:"center",
        color:"rgba(255,255,255,0.25)",fontSize:13}}>
        {T.footer}
      </footer>
    </main>
  );
}
