import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-light">
      
      {/* Header */}
      <div className="bg-zinc-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h1 className="text-4xl font-serif mb-4">Location & Contact</h1>
             <p className="text-zinc-400 max-w-2xl mx-auto">
                 We are located at Kirkstall Forge, a creative and modern space just outside Leeds city centre.
             </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Column */}
            <div className="space-y-12">
                
                {/* Address Section */}
                <section>
                    <h2 className="text-2xl font-serif text-zinc-900 mb-6">The Studio</h2>
                    <address className="not-italic text-zinc-600 text-lg leading-relaxed mb-6">
                        Number One, Kirkstall Forge<br />
                        Great Exhibition Way<br />
                        Leeds, LS5 3BF
                    </address>
                    
                    <Button 
                        href="https://www.google.com/maps/search/?api=1&query=Number+One,+Kirkstall+Forge,+Great+Exhibition+Way,+Leeds,+LS5+3BF"
                        external
                        variant="secondary"
                    >
                        Open in Google Maps
                    </Button>
                </section>

                {/* Contact Methods */}
                <section>
                    <h2 className="text-2xl font-serif text-zinc-900 mb-6">Get in Touch</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-lg">
                            <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-teal">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Email</span>
                                <span className="text-zinc-900">EMAIL_HERE</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-lg">
                            <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-teal">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <span className="block text-xs text-zinc-500 uppercase tracking-wide">Phone</span>
                                <span className="text-zinc-900">PHONE_HERE</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Visuals Column */}
            <div className="space-y-8">
                <div className="bg-zinc-200 aspect-video w-full overflow-hidden shadow-md">
                     <img 
                        src="/images/Kirkstall-exterior.jpg" 
                        alt="Kirkstall Forge Exterior" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-zinc-200 aspect-video w-full overflow-hidden shadow-md">
                    <img 
                        src="/images/kirkstall-interior.jpg" 
                        alt="Building Interior" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;