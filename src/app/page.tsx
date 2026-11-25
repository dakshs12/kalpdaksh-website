import Image from "next/image";
import Link from "next/link";
import GSAPAnimations from "@/components/GSAPAnimations";
import Navbar from "@/components/Navbar";
import MillsMarquee from "@/components/MillsMarquee";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3a4356] selection:bg-[#b08d57] selection:text-[#1f2a44] overflow-x-hidden">
      {/* GSAP ScrollTrigger client animations (skipped if prefers-reduced-motion is active) */}
      <GSAPAnimations />

      {/* ---------- Responsive Executive Navbar ---------- */}
      <Navbar />

      <main id="top" className="flex-1 w-full">
        {/* ---------- Full-Viewport Hero ---------- */}
        <section className="relative min-h-screen flex items-center bg-[#11100e] overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-20">
          {/* Hero background image - pinned toward the right on larger screens to give maximum breathing room */}
          <div
            className="absolute inset-0 bg-cover bg-[center_right_30%] sm:bg-[center_right_20%] md:bg-[center_right_10%] lg:bg-[right_center]"
            style={{
              backgroundImage: "url('/assets/hero.png')",
            }}
            aria-hidden="true"
          />

          {/* Warm neutral scrim overlay (no navy blue tint) tailored to the left-aligned text area */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:from-black/80 sm:via-black/40 sm:via-40% sm:to-transparent sm:to-65%"
            aria-hidden="true"
          />

          {/* Hero Content - dynamically aligned to the left with responsive container padding */}
          <div className="relative max-w-[1536px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-20 sm:py-28 md:py-32 w-full">
            <div className="max-w-lg lg:max-w-[32rem] xl:max-w-[36rem]">
              <p className="hero-kicker text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-5 drop-shadow-xs">
                Cotton brokerage &amp; commission &middot; Indore, India
              </p>
              <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] text-[#f6f1e8] font-semibold leading-[1.1] tracking-tight mb-6 drop-shadow-sm text-balance">
                Good cotton finds the right mill.
              </h1>
              <p className="hero-explainer text-base sm:text-lg lg:text-xl text-[#f6f1e8]/90 font-light leading-relaxed max-w-lg mb-10 drop-shadow-xs">
                Kalpdaksh Commotrade Pvt Ltd is a cotton brokerage and
                commission house in Indore, Madhya Pradesh, sourcing cotton for
                leading mills and serving trade partners overseas.
              </p>
              <div>
                <Link
                  href="#contact"
                  className="hero-cta inline-flex items-center justify-center bg-[#b08d57] hover:bg-[#c09b67] text-[#1a140e] font-semibold text-xs uppercase tracking-[0.14em] px-8 py-4 rounded transition-colors shadow-md hover:shadow-lg"
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
                A family-run cotton brokerage in the heart of India.
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

        {/* ---------- Origin & Fiber Sourcing (CottonConnect-style pinned scroll moment) ---------- */}
        <section
          id="origin"
          className="relative z-10 w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#10172a]"
        >
          {/* Pinned full-bleed cotton background layer with dark overlay */}
          <div
            className="origin-bg-wrapper absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="origin-bg-image absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: "url('/assets/mp_handshake.png')",
              }}
            />
            {/* Dark overlay fading from 0 to about 0.8 opacity */}
            <div className="origin-overlay absolute inset-0 bg-[#0b101d] pointer-events-none" />
          </div>

          {/* Centered narrative copy in white over the image with translucent frosted container */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-20 text-center">
            <div className="bg-[#10172a]/80 backdrop-blur-md border border-[#b08d57]/30 rounded-2xl p-8 sm:p-12 md:p-14 shadow-2xl">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-4">
                Origin &amp; Fiber Sourcing
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight mb-6 drop-shadow-sm text-balance">
                Direct from the heart of <br className="hidden sm:inline" />
                India&rsquo;s cotton country.
              </h2>
              <p className="text-[#f6f1e8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-5 drop-shadow-sm font-light">
                From the fertile black-cotton soils of Madhya Pradesh, Gujarat, and Maharashtra,
                we bridge farm-gate ginning with commercial spinning specifications.
              </p>
              <p className="text-[#f6f1e8]/85 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-light">
                Every lot is certified, weighed, and verified on-site. Our brokerage desk ensures
                a seamless transition from ginner yards to mill warehouses with complete commercial accountability.
              </p>
              <div className="w-12 h-0.5 bg-[#b08d57] mx-auto mt-8" />
            </div>
          </div>
        </section>

        {/* ---------- Services Section ---------- */}
        <section id="services" className="relative z-20 py-24 sm:py-28 bg-[#f6f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-2xl mb-14">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#b08d57] mb-3">
                What we do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a44] font-semibold leading-tight mb-4">
                Four services, one accountable desk.
              </h2>
              <p className="text-[#3a4356] text-base leading-relaxed">
                From daily cotton rate intelligence to fulfilment and delivery, we
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
                  with clients on{" "}
                  <a
                    href="https://walink.me/6coh00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1f2a44] font-medium underline underline-offset-4 decoration-[#b08d57] hover:text-[#b08d57] transition-colors"
                  >
                    WhatsApp
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.linkedin.com/company/kalpdaksh-commotrade-pvt-ltd/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1f2a44] font-medium underline underline-offset-4 decoration-[#b08d57] hover:text-[#b08d57] transition-colors"
                  >
                    LinkedIn
                  </a>
                  .
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

        {/* ---------- Mills Section: Continuous Horizontal Marquee Carousel ---------- */}
        <section id="mills" className="relative z-20 py-24 sm:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-12">
            <div className="reveal max-w-3xl">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#b08d57] mb-3">
                Mill relationships
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a44] font-semibold leading-tight mb-4">
                Brokering cotton purchases for mills.
              </h2>
              <p className="text-[#3a4356] text-base sm:text-lg leading-relaxed">
                Over the years we have built working relationships with some of
                India&rsquo;s largest spinning and composite mills, including:
              </p>
            </div>
          </div>

          {/* Marquee Carousel Container (Mill & Trade Partner Logos in Continuous Row, 'and others' outside) */}
          <div className="reveal relative w-full">
            <MillsMarquee />
          </div>
        </section>

        {/* ---------- Contact Section ---------- */}
        <section id="contact" className="relative z-20 py-24 sm:py-28 bg-[#1f2a44] text-[#f6f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal max-w-3xl">
              <p className="text-xs uppercase font-semibold tracking-[0.24em] text-[#d9bc8a] mb-3">
                Get in touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-4">
                Kalpdaksh Commotrade Pvt Ltd
              </h2>
              <p className="text-lg text-[#f6f1e8]/90 font-light mb-2">
                Indore, Madhya Pradesh, India
              </p>

              <div className="text-xs text-[#d9bc8a]/80 italic mt-2 mb-8">
                Direct trade desk inquiries and mill orders are serviced from Indore.
              </div>

              {/* Direct Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-8">
                {/* Mobile / Direct Call */}
                <a
                  href="tel:+919203825265"
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#b08d57]/60 hover:bg-white/10 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#d9bc8a] group-hover:scale-105 group-hover:bg-[#b08d57] group-hover:text-[#1f2a44] transition-all shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-[#d9bc8a] font-medium mb-1">
                      Direct Mobile / Trade Desk
                    </span>
                    <span className="block font-serif text-lg sm:text-xl text-white font-semibold tracking-wide truncate">
                      +91 92038 25265
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://walink.me/6coh00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/60 hover:bg-white/10 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-[#25D366] font-medium mb-1">
                      WhatsApp Direct Desk
                    </span>
                    <span className="block font-serif text-lg sm:text-xl text-white font-semibold tracking-wide truncate">
                      Chat on WhatsApp &rarr;
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/kalpdaksh-commotrade-pvt-ltd/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2]/60 hover:bg-white/10 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center text-[#0A66C2] group-hover:scale-105 group-hover:bg-[#0A66C2] group-hover:text-white transition-all shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-[#0A66C2] font-medium mb-1">
                      Official LinkedIn
                    </span>
                    <span className="block font-serif text-lg sm:text-xl text-white font-semibold tracking-wide truncate">
                      Company Profile &rarr;
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2">
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
      <footer className="relative z-20 bg-[#18213a] border-t border-white/10 py-6 text-xs text-[#f6f1e8]/60 tracking-wider">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; 2026 Kalpdaksh Commotrade Pvt Ltd &middot; Indore, Madhya
            Pradesh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[#f6f1e8]/80">
            <a
              href="tel:+919203825265"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>+91 92038 25265</span>
            </a>
            <span className="text-white/20 hidden sm:inline">&middot;</span>
            <a
              href="https://walink.me/6coh00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#3ce37c] transition-colors font-medium flex items-center gap-1.5"
            >
              <span>WhatsApp Desk &rarr;</span>
            </a>
            <span className="text-white/20 hidden sm:inline">&middot;</span>
            <a
              href="https://www.linkedin.com/company/kalpdaksh-commotrade-pvt-ltd/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#378fe9] transition-colors font-medium flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
              <span>LinkedIn &rarr;</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
