import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';

// GitHub Raw Images (Fallback for when local images are missing in preview)
const GITHUB_BASE = "https://raw.githubusercontent.com/mrjonnybgood/ScreenactorsLeeds/main/public/images";
const PH_FEEDBACK = `${GITHUB_BASE}/workshop-feedback.jpg`;
const PH_SCENE = `${GITHUB_BASE}/workshop-scene.jpg`;
const PH_CAMERA = `${GITHUB_BASE}/workshop-camera.jpg`;

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 bg-zinc-900 text-brand-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            {/* Background Image */}
            <ImageWithFallback 
                src="/images/workshop-feedback.jpg" 
                fallbackSrc={PH_FEEDBACK}
                alt="Workshop atmosphere background" 
                className="w-full h-full object-cover grayscale"
            />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight drop-shadow-md">
            A weekly, screen acting scene workshop at <span className="text-brand-accent">Number One, Kirkstall Forge</span>.
          </h1>
          
          <div className="space-y-4 drop-shadow-sm">
            <p className="text-xl md:text-2xl text-zinc-100 font-light">
              6pm to 9pm. Maximum 8 participants.
            </p>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              A supportive, after-work space to explore screen acting, build confidence on camera, and work scenes in a focused, friendly group.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NavLink to="/book">
              <Button variant="primary" className="w-full sm:w-auto">Book a Place</Button>
            </NavLink>
            <NavLink to="/about">
              <Button variant="outline" className="w-full sm:w-auto !border-zinc-400 !text-zinc-200 hover:!border-white hover:!text-white hover:!bg-white/10">Learn More</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* What happens in a session */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-zinc-900 mb-4">In The Workshop</h2>
            <div className="h-1 w-16 bg-brand-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group space-y-4">
              <div className="aspect-[4/3] bg-zinc-200 overflow-hidden shadow-sm">
                <ImageWithFallback 
                  src="/images/workshop-scene.jpg"
                  fallbackSrc={PH_SCENE}
                  alt="Actors working on a scene" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Scene Work</h3>
              <p className="text-zinc-600 leading-relaxed">
                Work on contemporary scripts in pairs, exploring character and objective in a relaxed environment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group space-y-4">
              <div className="aspect-[4/3] bg-zinc-200 overflow-hidden shadow-sm">
                <ImageWithFallback 
                  src="/images/workshop-camera.jpg"
                  fallbackSrc={PH_CAMERA}
                  alt="Camera setup in workshop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">On Camera</h3>
              <p className="text-zinc-600 leading-relaxed">
                Get comfortable with the lens. Practice technical screen craft without the pressure of an audition.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group space-y-4">
              <div className="aspect-[4/3] bg-zinc-200 overflow-hidden shadow-sm">
                <ImageWithFallback 
                  src="/images/workshop-feedback.jpg"
                  fallbackSrc={PH_FEEDBACK}
                  alt="Group feedback session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Constructive Feedback</h3>
              <p className="text-zinc-600 leading-relaxed">
                Review playback, discuss adjustments, and learn from watching others work.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <NavLink to="/book">
                <Button variant="secondary">Join the next session</Button>
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;