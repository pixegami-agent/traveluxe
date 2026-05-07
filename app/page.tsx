export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-blue-950/80 border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div style={{fontFamily: 'Playfair Display', fontSize: '24px', fontWeight: 700, color: '#d4a574'}}>T</div>
          <div className="flex gap-8 text-sm font-light">
            <a href="#experiences" className="hover:text-yellow-500 transition-colors">Experiences</a>
            <a href="#destinations" className="hover:text-yellow-500 transition-colors">Destinations</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-blue-950 transition-colors text-sm font-medium">
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <div style={{color: '#d4a574'}} className="text-sm tracking-widest mb-6 font-light uppercase">Curated Luxury Travel</div>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '64px', fontWeight: 700}} className="mb-6 text-white md:text-7xl">Journeys Beyond Ordinary</h1>
          <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
            Discover hand-selected destinations and bespoke experiences designed for the discerning traveler.
          </p>
          <button style={{backgroundColor: '#d4a574'}} className="px-8 py-3 text-blue-950 font-semibold hover:brightness-90 transition-all">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 px-6 bg-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 style={{fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700}} className="mb-4">Curated Experiences</h2>
            <div className="w-12 h-0.5 mx-auto" style={{backgroundColor: '#d4a574'}}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Alpine Retreats', desc: 'Private lodges in untouched peaks with personalized guides' },
              { title: 'Island Sanctuaries', desc: 'Exclusive resorts on pristine waters with water sports' },
              { title: 'Cultural Immersion', desc: 'Intimate access to world heritage sites and artisan communities' },
            ].map((exp, i) => (
              <div key={i} className="group p-8 border rounded-lg transition-all hover:shadow-xl hover:-translate-y-1" style={{borderColor: 'rgba(212, 165, 116, 0.3)'}}>
                <div className="w-12 h-12 rounded-lg mb-6 group-hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(212, 165, 116, 0.2)'}}></div>
                <h3 style={{fontFamily: 'Playfair Display', fontWeight: 500}} className="text-xl mb-3">{exp.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-24 px-6" style={{borderTop: '1px solid rgba(212, 165, 116, 0.1)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 style={{fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700}} className="mb-4">Featured Destinations</h2>
            <div className="w-12 h-0.5 mx-auto" style={{backgroundColor: '#d4a574'}}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Côte d\'Azur', region: 'French Riviera' },
              { name: 'Maldives', region: 'Indian Ocean' },
              { name: 'Swiss Alps', region: 'Central Europe' },
              { name: 'Amalfi', region: 'Southern Italy' },
            ].map((dest, i) => (
              <div key={i} className="group relative h-64 rounded-lg overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1" style={{borderColor: 'rgba(212, 165, 116, 0.3)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 style={{fontFamily: 'Playfair Display', fontSize: '24px', fontWeight: 700}} className="mb-1">{dest.name}</h3>
                  <p style={{color: '#d4a574'}} className="text-sm">{dest.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traveluxe */}
      <section className="py-24 px-6 bg-blue-950/50" style={{borderTop: '1px solid rgba(212, 165, 116, 0.1)'}}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700}} className="text-center mb-16">Why Traveluxe</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { label: '24/7 Concierge', value: 'Dedicated support at every step' },
              { label: 'Vetted Properties', value: 'Only the finest luxury venues' },
              { label: 'Local Experts', value: 'In-destination guides and insights' },
              { label: 'Flexibility', value: 'Customizable itineraries at your pace' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div style={{color: '#d4a574'}} className="font-semibold text-sm tracking-wide">{item.label}</div>
                <p className="text-gray-300 font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6" style={{borderTop: '1px solid rgba(212, 165, 116, 0.1)'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 style={{fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700}} className="mb-6">Ready to Explore?</h2>
          <p className="text-gray-300 mb-12 font-light">Contact our team to discuss your perfect journey.</p>
          <div className="flex gap-4 justify-center">
            <button style={{backgroundColor: '#d4a574'}} className="px-8 py-3 text-blue-950 font-semibold hover:brightness-90 transition-all">
              Request Consultation
            </button>
            <button style={{borderColor: '#d4a574', color: '#d4a574'}} className="px-8 py-3 border font-semibold hover:bg-yellow-600/20 transition-all">
              Browse Experiences
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop: '1px solid rgba(212, 165, 116, 0.1)'}} className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div style={{fontFamily: 'Playfair Display', fontSize: '24px', fontWeight: 700, color: '#d4a574'}}>Traveluxe</div>
          <p className="text-gray-500 text-sm">© 2026. Curated luxury travel experiences.</p>
        </div>
      </footer>
    </main>
  )
}
