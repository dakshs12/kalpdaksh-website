import Image from "next/image";
import Link from "next/link";
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3a4356] selection:bg-[#b08d57] selection:text-[#1f2a44]">
      {/* GSAP ScrollTrigger client animations (skipped if prefers-reduced-motion is active) */}
      <GSAPAnimations />

      {/* ---------- Sticky Top Bar ---------- */}
      <header className="sticky top-0 z-50 bg-[#1f2a44]/95 backdrop-blur-md border-b border-[#3a4356]/40 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="#top"
            className="flex items-center gap-3 text-white no-underline group"
            aria-label="Kalpdaksh Commotrade Home"
          >
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden ring-1 ring-[#b08d57]/60 shadow-sm shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Kalpdaksh Commotrade seal logo"
                width={36}
                height={36}
                className="w-full h-full object-contain p-0.5"
                priority
              />
            </div>
            <span className="font-serif text-lg tracking-wide text-[#f6f1e8]">
              Kalpdaksh{" "}
              <span className="text-[#b08d57] font-serif font-normal italic">
                Commotrade
              </span>
            </span>
          </Link>

          <nav
            className="flex items-center flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-[0.16em]"
            aria-label="Main Navigation"
          >
            <Link
              href="#about"
              className="text-[#f6f1e8]/75 hover:text-[#f6f1e8] transition-colors py-1"
            >
              About
            </Link>
            <Link
              href="#heritage"
              className="text-[#f6f1e8]/75 hover:text-[#f6f1e8] transition-colors py-1"
            >
              Heritage
            </Link>
            <Link
              href="#services"
              className="text-[#f6f1e8]/75 hover:text-[#f6f1e8] transition-colors py-1"
            >
              Services
            </Link>
            <Link
              href="#mills"
              className="text-[#f6f1e8]/75 hover:text-[#f6f1e8] transition-colors py-1"
            >
              Mills
            </Link>
            <Link
              href="#contact"
              className="text-[#b08d57] hover:text-[#d9bc8a] transition-colors font-semibold py-1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ---------- Full-Viewport Hero ---------- */}
        <section className="relative min-h-[calc(100vh-65px)] flex items-center bg-[#1f2a44] overflow-hidden">
          {/* Hero background image */}
          <div
            className="absolute inset-0 bg-cover bg-[center_right_30%] md:bg-center"
            style={{
              backgroundImage: "url('/assets/hero.jpg')",
            }}
            aria-hidden="true"
          />

          {/* Deep trade-house gradient overlay for maximum legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1f2a44] via-[#1f2a44]/90 sm:via-[#1f2a44]/80 to-[#1f2a44]/40"
            aria-hidden="true"
          />

          {/* Hero Content */}
          <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 w-full">
            <div className="max-w-2xl">
              <p className="hero-kicker text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-5">
                Cotton brokerage &amp; commission &middot; Indore, India
              </p>
              <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6f1e8] font-semibold leading-[1.08] tracking-tight mb-6">
                Good cotton finds the right mill.
              </h1>
              <p className="hero-explainer text-lg sm:text-xl text-[#f6f1e8]/90 font-light leading-relaxed max-w-xl mb-10">
                Kalpdaksh Commotrade Pvt Ltd is a cotton brokerage and
                commission house in Indore, Madhya Pradesh, sourcing cotton for
                leading mills and serving trade partners overseas.
              </p>
              <div>
                <Link
                  href="#contact"
                  className="hero-cta inline-flex items-center justify-center bg-[#b08d57] hover:bg-[#c09b67] text-[#1f2a44] font-semibold text-xs uppercase tracking-[0.14em] px-8 py-4 rounded transition-colors shadow-md hover:shadow-lg"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- About Section ---------- */}
        <section id="about" className="py-24 sm:py-28 bg-[#f6f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#b08d57] mb-3">
                Who we are
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a44] font-semibold leading-tight max-w-3xl mb-8">
                A family-run cotton desk in the heart of India&rsquo;s cotton
                country.
              </h2>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 text-[#3a4356] text-base leading-relaxed mb-16">
              <p>
                Kalpdaksh Commotrade Pvt Ltd is a cotton brokerage and commission
                house based in Indore, Madhya Pradesh. We broker cotton bales for
                mills across India and handle import and export for trade partners
                overseas.
              </p>
              <p>
                Our work runs from daily market intelligence to negotiation,
                handling and payment follow-through, so a deal is managed end to
                end.
              </p>
            </div>

            {/* Three key stats */}
            <div className="reveal pt-10 border-t border-[#1f2a44]/15 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <div className="bg-white/60 p-6 rounded-lg border border-[#1f2a44]/10 shadow-xs">
                <span className="block font-serif text-4xl sm:text-5xl font-semibold text-[#1f2a44] mb-1">
                  1970
                </span>
                <span className="text-sm font-medium text-[#5f6b85]">
                  family in cotton since
                </span>
              </div>
              <div className="bg-white/60 p-6 rounded-lg border border-[#1f2a44]/10 shadow-xs">
                <span className="block font-serif text-4xl sm:text-5xl font-semibold text-[#1f2a44] mb-1">
                  2020
                </span>
                <span className="text-sm font-medium text-[#5f6b85]">
                  incorporated as Kalpdaksh
                </span>
              </div>
              <div className="bg-white/60 p-6 rounded-lg border border-[#1f2a44]/10 shadow-xs">
                <span className="block font-serif text-4xl sm:text-5xl font-semibold text-[#1f2a44] mb-1">
                  Indore
                </span>
                <span className="text-sm font-medium text-[#5f6b85]">
                  Madhya Pradesh
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Heritage Band (GSAP Parallax) ---------- */}
        <section
          id="heritage"
          className="relative overflow-hidden py-32 sm:py-40 bg-[#1f2a44] text-[#f6f1e8]"
        >
          {/* Parallax background photo */}
          <div
            className="heritage-bg absolute inset-[-20%_0] bg-cover bg-center will-change-transform opacity-35"
            style={{
              backgroundImage: "url('/assets/heritage.jpg')",
            }}
            aria-hidden="true"
          />

          {/* Dark gradient veil */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#1f2a44]/85 via-[#1f2a44]/75 to-[#1f2a44]/90"
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="reveal max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-3">
                Heritage
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f1e8] font-semibold leading-tight mb-6">
                A family in cotton since 1970.
              </h2>
              <p className="text-base sm:text-lg text-[#f6f1e8]/90 leading-relaxed">
                Our family entered the cotton trade in 1970. The next generation
                joined in 1996, and in 2020 the business took its current form as
                Kalpdaksh Commotrade Pvt Ltd.
              </p>
            </div>

            {/* Three distinct facts callout cards */}
            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1f2a44]/80 backdrop-blur-sm border border-[#b08d57]/30 rounded-lg p-6 hover:border-[#b08d57]/60 transition-colors">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#d9bc8a] block mb-2">
                  Origin
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">
                  1970
                </h3>
                <p className="text-sm text-[#f6f1e8]/80 leading-normal">
                  Family entered the cotton trade, establishing relationships
                  across Central India’s prime cotton-producing tracts.
                </p>
              </div>

              <div className="bg-[#1f2a44]/80 backdrop-blur-sm border border-[#b08d57]/30 rounded-lg p-6 hover:border-[#b08d57]/60 transition-colors">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#d9bc8a] block mb-2">
                  Expansion
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">
                  1996
                </h3>
                <p className="text-sm text-[#f6f1e8]/80 leading-normal">
                  Next generation joined the desk, expanding coverage into
                  national spinning mill networks and cross-border trade flows.
                </p>
              </div>

              <div className="bg-[#1f2a44]/80 backdrop-blur-sm border border-[#b08d57]/30 rounded-lg p-6 hover:border-[#b08d57]/60 transition-colors">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#d9bc8a] block mb-2">
                  Incorporation
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">
                  2020
                </h3>
                <p className="text-sm text-[#f6f1e8]/80 leading-normal">
                  Business incorporated as Kalpdaksh Commotrade Pvt Ltd, uniting
                  multigenerational market expertise with modern brokerage standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services Section ---------- */}
        <section id="services" className="py-24 sm:py-28 bg-[#f6f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-2xl mb-14">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#b08d57] mb-3">
                What we do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a44] font-semibold leading-tight mb-4">
                Four services, one accountable desk.
              </h2>
              <p className="text-[#3a4356] text-base leading-relaxed">
                From daily cotton rate intelligence to fulfillment and delivery, we
                manage every step of the transaction with direct accountability.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <article className="bg-white rounded-lg p-8 border border-[#1f2a44]/10 shadow-xs hover:border-[#b08d57]/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold tracking-[0.2em] text-[#b08d57] block mb-3">
                  01
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1f2a44] font-semibold mb-3">
                  Daily market reports and rate updates
                </h3>
                <p className="text-sm sm:text-base text-[#5f6b85] leading-relaxed">
                  Systematic daily cotton market reports and rate updates, shared
                  with clients on WhatsApp and LinkedIn.
                </p>
              </article>

              {/* Card 02 */}
              <article className="bg-white rounded-lg p-8 border border-[#1f2a44]/10 shadow-xs hover:border-[#b08d57]/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold tracking-[0.2em] text-[#b08d57] block mb-3">
                  02
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1f2a44] font-semibold mb-3">
                  Bargain negotiations including quality control
                </h3>
                <p className="text-sm sm:text-base text-[#5f6b85] leading-relaxed">
                  Bargaining and negotiation on the client&rsquo;s behalf,
                  including hands-on quality control and lot verification.
                </p>
              </article>

              {/* Card 03 */}
              <article className="bg-white rounded-lg p-8 border border-[#1f2a44]/10 shadow-xs hover:border-[#b08d57]/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold tracking-[0.2em] text-[#b08d57] block mb-3">
                  03
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1f2a44] font-semibold mb-3">
                  Handling and forwarding
                </h3>
                <p className="text-sm sm:text-base text-[#5f6b85] leading-relaxed">
                  Handling and forwarding arranged once a deal is done, ensuring
                  dependable dispatch and transit tracking.
                </p>
              </article>

              {/* Card 04 */}
              <article className="bg-white rounded-lg p-8 border border-[#1f2a44]/10 shadow-xs hover:border-[#b08d57]/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold tracking-[0.2em] text-[#b08d57] block mb-3">
                  04
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1f2a44] font-semibold mb-3">
                  Payment and other compliance fulfilment
                </h3>
                <p className="text-sm sm:text-base text-[#5f6b85] leading-relaxed">
                  Payment and other compliance fulfilment, seen through with
                  complete transparency and diligence.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- Mills Section ---------- */}
        <section id="mills" className="py-24 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-3xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#b08d57] mb-3">
                Mill relationships
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a44] font-semibold leading-tight mb-4">
                Brokering cotton purchases for mills.
              </h2>
              <p className="text-[#3a4356] text-base sm:text-lg leading-relaxed">
                Over the years we have built working relationships with some of
                India&rsquo;s largest mills, including:
              </p>
            </div>

            <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {/* Welspun */}
              <div className="h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-4 flex items-center justify-center hover:border-[#b08d57]/60 hover:shadow-sm transition-all group">
                <Image
                  src="/assets/mills/welspun.png"
                  alt="Welspun Living"
                  width={140}
                  height={50}
                  className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Vardhman */}
              <div className="h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-4 flex items-center justify-center hover:border-[#b08d57]/60 hover:shadow-sm transition-all group">
                <Image
                  src="/assets/mills/vardhman.png"
                  alt="Vardhman"
                  width={120}
                  height={50}
                  className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Trident */}
              <div className="h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-4 flex items-center justify-center hover:border-[#b08d57]/60 hover:shadow-sm transition-all group">
                <Image
                  src="/assets/mills/trident.png"
                  alt="Trident Group"
                  width={130}
                  height={50}
                  className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Alok */}
              <div className="h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-4 flex items-center justify-center hover:border-[#b08d57]/60 hover:shadow-sm transition-all group">
                <Image
                  src="/assets/mills/alok.png"
                  alt="Alok Industries"
                  width={140}
                  height={50}
                  className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Sintex Yarns */}
              <div className="h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-4 flex items-center justify-center hover:border-[#b08d57]/60 hover:shadow-sm transition-all group">
                <Image
                  src="/assets/mills/sintex.png"
                  alt="Sintex Yarns"
                  width={120}
                  height={50}
                  className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* and-others card */}
              <div className="h-28 bg-[#f6f1e8]/50 border-2 border-dashed border-[#1f2a44]/25 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-[#b08d57] transition-all">
                <span className="font-serif italic text-base text-[#1f2a44] font-medium">
                  and others
                </span>
                <span className="text-[11px] text-[#5f6b85] uppercase tracking-wider mt-0.5">
                  across India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Contact Section ---------- */}
        <section id="contact" className="py-24 sm:py-28 bg-[#1f2a44] text-[#f6f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-2xl">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-3">
                Get in touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-4">
                Kalpdaksh Commotrade Pvt Ltd
              </h2>
              <p className="text-lg text-[#f6f1e8]/90 font-light mb-2">
                Indore, Madhya Pradesh, India
              </p>

              {/* TODO: Add phone/WhatsApp number and LinkedIn URL once confirmed */}
              <div className="text-xs text-[#d9bc8a]/80 italic mt-4 mb-8">
                Direct trade desk inquiries and mill orders are serviced from Indore.
              </div>

              <div className="pt-4">
                <Link
                  href="#top"
                  className="inline-flex items-center justify-center border border-[#f6f1e8]/40 hover:border-[#f6f1e8] hover:bg-white/10 text-[#f6f1e8] text-xs uppercase font-medium tracking-[0.14em] px-6 py-3 rounded transition-colors"
                >
                  Back to top &uarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Simple Footer ---------- */}
      <footer className="bg-[#18213a] border-t border-white/10 py-6 text-center text-xs text-[#f6f1e8]/50 tracking-wider">
        <div className="max-w-6xl mx-auto px-6">
          <p>
            &copy; 2026 Kalpdaksh Commotrade Pvt Ltd &middot; Indore, Madhya
            Pradesh
          </p>
        </div>
      </footer>
    </div>
  );
}
