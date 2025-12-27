import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Image Column */}
          <div className="order-2 md:order-1 relative">
             <div className="aspect-[3/4] bg-zinc-100 relative z-10 shadow-lg">
                {/* Image: phil-photo.jpg */}
                <img 
                  src="/images/phil-photo.jpg" 
                  alt="Philip Wolff" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute top-8 -left-6 w-full h-full border-2 border-brand-accent/50 z-0 hidden md:block"></div>
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-serif text-zinc-900 mb-6">Philip Wolff</h1>
            
            <div className="prose prose-lg text-zinc-600 prose-headings:font-serif prose-a:text-brand-teal">
              <p>
                Philip Wolff is a screen acting coach with many years’ experience helping actors feel confident, relaxed and truthful on camera.
              </p>
              <p>
                He trained at the Central School of Speech and Drama, specialised in Meisner Technique, and has gone on to teach screen acting at Southbank University, Mountview Drama Academy and The International School of Screen Acting. He helped found Screen Actors London, served as Senior Lecturer in Screen Acting at Leeds Conservatoire, and is currently co-director of ScreenReel Studio.
              </p>
              <p>
                Philip’s teaching style is practical, supportive and down-to-earth. He’s passionate about making screen acting feel approachable — especially for people who may be stepping in front of a camera for the first time. His sessions focus on simple, scene-based work that helps actors understand what actually works on screen, without overcomplicating the process.
              </p>
              <p>
                His approach is designed for complete beginners as well as actors with experience who want a low-pressure space to practise. Everything is learned through doing: working on scenes, being filmed, and gradually building confidence in a friendly, respectful environment.
              </p>
              <p className="italic text-zinc-800 font-medium pl-4 border-l-4 border-brand-accent">
                Philip believes that acting on screen isn’t about being "perfect" — it’s about being present, listening properly and trusting yourself. His aim is to help participants feel comfortable taking risks, learning from mistakes (as well as embracing mistakes!) but - above all - always enjoying the process.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;