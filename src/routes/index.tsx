import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import maujiLogo from "@/assets/mouji.jpg";
import heroImg from "@/assets/hero-interior.jpg";
import coldbrewImg from "@/assets/coldbrew.jpg";
import studioImg from "@/assets/studio.jpg";
import libraryImg from "@/assets/library.jpg";
import backyardImg from "@/assets/backyard.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mauji — The Time Cafe · Pune & Nagpur" },
      {
        name: "description",
        content:
          "Pay for time, not coffee. Unlimited brews, high-speed Wi-Fi, and creative nooks in Bhoslenagar, Pune and now in Nagpur at Laxmi Nagar / Bajaj Nagar and New Colony. An ode to slow living.",
      },
      { property: "og:title", content: "Mauji — The Time Cafe · Pune & Nagpur" },
      {
        property: "og:description",
        content: "Pay for time, not coffee. Unlimited brews, high-speed Wi-Fi, and creative nooks in Bhoslenagar, Pune and now in Nagpur at Laxmi Nagar / Bajaj Nagar and New Colony. An ode to slow living.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[var(--ember)] selection:text-[var(--cream)]">
      <Nav />
      <Hero />
      <Marquee />
      <Concept />
      <Features />
      <Spaces />
      <Pricing />
      <Outlets />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_75%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={maujiLogo} alt="Mauji" className="h-9 w-9 rounded-full object-cover" width={36} height={36} />
          <span className="font-serif text-lg tracking-tight">Mauji<span className="text-muted-foreground italic font-light"> · the time cafe</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#concept" className="hover:text-foreground transition">Concept</a>
          <a href="#spaces" className="hover:text-foreground transition">Spaces</a>
          <a href="#rates" className="hover:text-foreground transition">Rates</a>
          <a href="#outlets" className="hover:text-foreground transition">Outlets</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a
          href="#rates"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-[var(--ember)] transition-colors"
        >
          Check in
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            <span className="h-px w-8 bg-foreground/50" />
            <span>An ode to slow living · Est. Pune</span>
          </div>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            India's first <em className="italic font-light text-[var(--ember)]">time</em> cafe.
            <br />
            Pay for time, <span className="italic font-light">not coffee.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
            A home away from home where every minute is yours — to work, to rest, to create, to connect.
            Unlimited complimentary brews included, of course.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#rates"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium hover:bg-[var(--ember)] transition-colors"
            >
              Check rates & book space
              <span className="grid place-items-center h-9 w-9 rounded-full bg-background/15 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#concept" className="text-sm underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">
              How the hour works
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-8">
            <Stat k="₹180" v="per hour, per person" />
            <Stat k="∞" v="cold brews, chai, cappuccinos" />
            <Stat k="9–10" v="open all seven days" />
          </dl>
        </div>

        <div className="md:col-span-5 relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src={heroImg}
              alt="Warm bohemian interior of Mauji cafe at golden hour"
              width={1600}
              height={1800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background border border-border rounded-sm p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] max-w-[220px]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Now serving</div>
            <div className="mt-1 font-serif text-xl italic">Slow mornings.</div>
            <div className="text-sm text-muted-foreground">Bhoslenagar, Pune</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl">{k}</div>
      <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{v}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Pay-by-the-hour",
    "Unlimited brews",
    "BYOF · bring your tiffin",
    "High-speed Wi-Fi",
    "Creator studio",
    "मौजी · the time cafe",
    "Slow living",
    "Open 9 AM — 10 PM",
  ];
  return (
    <div className="border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker py-4">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 text-sm uppercase tracking-[0.3em] flex items-center gap-8">
            {t}
            <span className="h-1 w-1 rounded-full bg-[var(--ember)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Concept() {
  return (
    <section id="concept" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">01 · The idea</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            The clock is the menu.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground text-pretty" delay={100}>
          <p>
            Scan a QR at the door, start your clock. From that minute on the coffee flows, the Wi-Fi hums,
            and the couch, the courtyard, the library — all yours. No pressure to keep ordering. No side-eye
            for staying too long.
          </p>
          <p>
            We call it an anti-cafe. You'll call it the one place in the city that lets you simply <em className="italic text-foreground">be</em>.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {["Freelancers", "Writers", "Podcasters", "Founders", "Students", "Book clubs"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-border text-foreground">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      k: "⏳",
      title: "Pay by the hour",
      copy: "Rates start at ₹180/hr per person. Stay ten minutes or ten hours — the clock is honest either way.",
    },
    {
      k: "☕",
      title: "Unlimited brews",
      copy: "Cold brew, cappuccino, iced tea, cutting chai. Refills are quiet, constant, and complimentary.",
    },
    {
      k: "🥡",
      title: "Bring your own food",
      copy: "Tiffin from home. Zomato to the door. Or the in-house kitchen — pastas, sandwiches, honest snacks.",
    },
    {
      k: "📶",
      title: "Fast Wi-Fi, quiet nooks",
      copy: "Ergonomic seating, endless outlets, a signal that never drops when the meeting starts.",
    },
    {
      k: "📸",
      title: "Creator studio",
      copy: "A dedicated corner for photo shoots, video takes, and podcasts that don't sound like they're in a cafe.",
    },
    {
      k: "🌿",
      title: "A courtyard for gathering",
      copy: "Workshops, exhibitions, small gigs. The backyard is open to whatever the community brings.",
    },
  ];
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">02 · What's inside the hour</div>
            <h2 className="font-serif text-4xl md:text-5xl">Everything included. Really.</h2>
          </div>
          <a href="#rates" className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">See the rates →</a>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {items.map((it, i) => (
            <Reveal key={it.title} className="bg-background p-8 md:p-10 group hover:bg-[color-mix(in_oklab,var(--ember)_6%,var(--background))] transition-colors" delay={i * 80}>
              <div className="text-3xl mb-8">{it.k}</div>
              <h3 className="font-serif text-2xl mb-3">{it.title}</h3>
              <p className="text-muted-foreground text-pretty">{it.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spaces() {
  const cards = [
    {
      img: coldbrewImg,
      tag: "Lounge",
      title: "Workspace & lounge",
      copy: "Ergonomic chairs, deep couches, quiet corners. Cold brew within reach.",
    },
    {
      img: studioImg,
      tag: "Studio",
      title: "Content creator nook",
      copy: "Vintage props, warm lights, soft acoustics. Bring the camera.",
    },
    {
      img: libraryImg,
      tag: "Library",
      title: "Library & maker space",
      copy: "Curated books, pottery corner, a chair that makes an afternoon disappear.",
    },
  ];
  return (
    <section id="spaces" className="py-24 md:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">03 · The bungalow</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            A multi-storey bohemian home, split into moods.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="group" delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={c.img}
                  alt={c.title}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-background/90 backdrop-blur px-2 py-1 rounded-sm">{c.tag}</div>
              </div>
              <h3 className="font-serif text-2xl mt-5">{c.title}</h3>
              <p className="text-muted-foreground mt-2">{c.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 relative overflow-hidden rounded-sm" delay={200}>
          <img
            src={backyardImg}
            alt="Backyard courtyard at dusk with string lights"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-lg text-[var(--cream)]">
            <div className="text-[10px] uppercase tracking-widest opacity-80 mb-3">Event space · Backyard</div>
            <h3 className="font-serif text-3xl md:text-4xl">Where the evenings gather.</h3>
            <p className="mt-3 opacity-90">Workshops, open mics, quiet exhibitions. The courtyard is ours, together.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="rates" className="py-24 md:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-start">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">04 · Rates</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            One price. <em className="italic font-light">The clock.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Scan the QR when you arrive. Stop the clock when you leave. That's the entire menu.
          </p>
        </Reveal>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
          <Reveal delay={100}>
            <PriceCard
              label="The hour"
              price="₹180"
              unit="/ hour · per person"
              perks={["Unlimited brews", "High-speed Wi-Fi", "Any seat, any nook"]}
            />
          </Reveal>
          <Reveal delay={200}>
            <PriceCard
              featured
              label="The day pass"
              price="₹899"
              unit="/ day · per person"
              perks={["All hourly perks", "Priority studio slot", "One in-house snack"]}
            />
          </Reveal>
          <Reveal className="sm:col-span-2" delay={300}>
            <div className="rounded-sm border border-dashed border-border p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif text-xl">Hosting something?</div>
                <div className="text-sm text-muted-foreground">Workshops, shoots, small gigs — the backyard is bookable.</div>
              </div>
              <a href="#visit" className="text-sm underline underline-offset-4">Talk to us →</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  label, price, unit, perks, featured,
}: { label: string; price: string; unit: string; perks: string[]; featured?: boolean }) {
  return (
    <div className={`h-full rounded-sm p-8 border ${featured ? "bg-foreground text-background border-foreground" : "bg-card border-border"}`}>
      <div className={`text-[10px] uppercase tracking-widest ${featured ? "text-background/70" : "text-muted-foreground"}`}>{label}</div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-serif text-5xl">{price}</span>
        <span className={`text-sm ${featured ? "text-background/70" : "text-muted-foreground"}`}>{unit}</span>
      </div>
      <ul className={`mt-6 space-y-2 text-sm ${featured ? "text-background/90" : "text-muted-foreground"}`}>
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className={`h-1 w-1 rounded-full ${featured ? "bg-[var(--ember)]" : "bg-foreground/50"}`} />
            {p}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition-colors ${featured ? "bg-[var(--ember)] text-background hover:bg-[var(--brass)]" : "bg-foreground text-background hover:bg-[var(--ember)]"}`}>
        Start the clock
      </button>
    </div>
  );
}

function Outlets() {
  const outlets = [
    {
      city: "Nagpur · Laxmi Nagar / Bajaj Nagar",
      address: "Ground Floor, 172, Meghdoot Heights, Shraddhanand Pet Square, Bajaj Nagar, Laxmi Nagar, Nagpur.",
      hours: "11:00 AM – 10:00 PM",
      days: "Tuesday – Sunday",
    },
    {
      city: "Nagpur · New Colony",
      address: "128 Gool Villa, New Colony, Nagpur.",
      hours: "10:00 AM – 9:00 PM",
      days: "Tuesday – Sunday",
    },
  ];

  return (
    <section id="outlets" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">05 · Outlets</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            Now brewing in <em className="italic font-light">Nagpur.</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Two new homes for slow living, both open Tuesday through Sunday.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {outlets.map((o, i) => (
            <Reveal key={o.city} className="rounded-sm border border-border p-8 md:p-10 bg-card" delay={i * 120}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{o.days}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">{o.city}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{o.address}</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ember)]" />
                {o.hours}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 border-t border-border bg-[color-mix(in_oklab,var(--ember)_8%,var(--background))]">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">06 · Come find us</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            A quiet bungalow near <em className="italic font-light">SB Road.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">Walk-ins welcome. Regulars encouraged.</p>
        </Reveal>
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          <Reveal delay={100}><InfoTile head="Address" body={<>S 132, Plot 11, Sahajeevan Society,<br/>Bhoslenagar, Ashok Nagar,<br/>Pune 411007</>} /></Reveal>
          <Reveal delay={180}><InfoTile head="Hours" body={<>Monday — Sunday<br/>9:00 AM &nbsp;—&nbsp; 10:00 PM</>} /></Reveal>
          <Reveal delay={260}><InfoTile head="Say hi" body={<>hello@mauji.cafe<br/>@mauji.spaces</>} /></Reveal>
          <Reveal delay={340}><InfoTile head="Getting here" body={<>Near ICS Colony<br/>5 min from Pune University</>} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ head, body }: { head: string; body: ReactNode }) {
  return (
    <div className="h-full bg-background p-8">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{head}</div>
      <div className="font-serif text-xl leading-snug">{body}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <Reveal className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 flex items-center gap-4">
          <img src={maujiLogo} alt="Mauji logo" className="h-14 w-14 rounded-full object-cover" width={56} height={56} />
          <div>
            <div className="font-serif text-xl" style={{ fontFamily: 'var(--font-hindi)' }}>मौजी</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">An ode to slow living</div>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href="#concept" className="hover:text-foreground">Concept</a>
          <a href="#spaces" className="hover:text-foreground">Spaces</a>
          <a href="#rates" className="hover:text-foreground">Rates</a>
          <a href="#outlets" className="hover:text-foreground">Outlets</a>
          <a href="#visit" className="hover:text-foreground">Visit</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
        </div>
        <div className="md:col-span-12 mt-6 pt-6 border-t border-border flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Mauji Spaces · Pune & Nagpur, India</span>
          <span className="italic">Time, gently spent.</span>
        </div>
      </Reveal>
    </footer>
  );
}
