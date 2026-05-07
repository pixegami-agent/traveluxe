export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-midnight-900/80 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="serif-display text-2xl accent-gold">T</div>
          <div className="flex gap-8 text-sm font-light">
            <a href="#experiences" className="hover:accent-gold transition-smooth">Experiences</a>
            <a href="#destinations" className="hover:accent-gold transition-smooth">Destinations</a>
            <a href="#contact" className="hover:accent-gold transition-smooth">Contact</a>
          </div>
          <button className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-midnight-900 transition-smooth text-sm font-medium">
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-midnight-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <div className="text-gold-500 text-sm tracking-widest mb-6 font-light uppercase">Curated Luxury Travel</div>
          <h1 className="serif-display text-6xl md:text-7xl mb-6 text-white">Journeys Beyond Ordinary</h1>
          <p className="text-lg text-slate-300 mb-12 font-light leading-relaxed">
            Discover hand-selected destinations and bespoke experiences designed for the discerning traveler.
          </p>
          <button className="px-8 py-3 bg-gold-500 text-midnight-900 serif-medium hover-lift font-semibold">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif-display text-5xl mb-4">Curated Experiences</h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Alpine Retreats', desc: 'Private lodges in untouched peaks with personalized guides' },
              { title: 'Island Sanctuaries', desc: 'Exclusive resorts on pristine waters with water sports' },
              { title: 'Cultural Immersion', desc: 'Intimate access to world heritage sites and artisan communities' },
            ].map((exp, i) => (
              <div key={i} className="group hover-lift p-8 border border-gold-500/20 hover:border-gold-500/50 transition-smooth">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg mb-6 group-hover:bg-gold-500 transition-smooth"></div>
                <h3 className="serif-medium text-xl mb-3">{exp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-24 px-6 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif-display text-5xl mb-4">Featured Destinations</h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Côte d\'Azur', region: 'French Riviera' },
              { name: 'Maldives', region: 'Indian Ocean' },
              { name: 'Swiss Alps', region: 'Central Europe' },
              { name: 'Amalfi', region: 'Southern Italy' },
            ].map((dest, i) => (
              <div key={i} className="group relative h-64 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-smooth hover-lift">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="serif-display text-2xl mb-1">{dest.name}</h3>
                  <p className="text-gold-500 text-sm">{dest.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traveluxe */}
      <section className="py-24 px-6 border-t border-gold-500/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif-display text-5xl text-center mb-16">Why Traveluxe</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { label: '24/7 Concierge', value: 'Dedicated support at every step' },
              { label: 'Vetted Properties', value: 'Only the finest luxury venues' },
              { label: 'Local Experts', value: 'In-destination guides and insights' },
              { label: 'Flexibility', value: 'Customizable itineraries at your pace' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-gold-500 font-semibold text-sm tracking-wide">{item.label}</div>
                <p className="text-slate-300 font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-gold-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="serif-display text-5xl mb-6">Ready to Explore?</h2>
          <p className="text-slate-300 mb-12 font-light">Contact our team to discuss your perfect journey.</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gold-500 text-midnight-900 serif-medium hover-lift font-semibold">
              Request Consultation
            </button>
            <button className="px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-midnight-900 transition-smooth font-semibold">
              Browse Experiences
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold-500/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="serif-display text-2xl accent-gold">Traveluxe</div>
          <p className="text-slate-500 text-sm">© 2026. Curated luxury travel experiences.</p>
        </div>
      </footer>
    </main>
  )
}
