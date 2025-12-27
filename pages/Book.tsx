import React from 'react';
import Button from '../components/Button';

const Book: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-zinc-900 mb-4">Book a Session</h1>
          <p className="text-lg text-zinc-600">The simplest, low-stress option (recommended)</p>
        </div>

        {/* Main Booking Card */}
        <div className="bg-white p-8 md:p-10 shadow-sm border border-zinc-100 rounded-lg">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-100 pb-8 mb-8">
            <div>
              <h2 className="text-2xl font-serif text-zinc-900 mb-2">Screen Acting Workshop</h2>
              <div className="space-y-1 text-zinc-600">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">When:</span> Weekly, 6pm – 9pm
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">Where:</span> Number One, Kirkstall Forge
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">Capacity:</span> Maximum 8 participants
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-zinc-900 mb-4">What to expect:</h3>
            <ul className="space-y-3">
              {[
                "Supportive, guided scene work",
                "Suitable for entry-level and professional actors",
                "Relaxed after-work environment",
                "On-camera practice"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-600">
                  <svg className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 pt-4">
             <div className="grid gap-6">
                <Button 
                    href="#STRIPE_STANDARD_LINK_HERE" 
                    variant="primary" 
                    fullWidth 
                    className="justify-between group"
                >
                    <span>Book Standard</span>
                    <span className="font-bold">£30</span>
                </Button>

                <div>
                    <Button 
                        href="#STRIPE_OFFICE_RATE_LINK_HERE" 
                        variant="outline" 
                        fullWidth
                        className="justify-between"
                    >
                        <span>Book Office Worker Rate</span>
                        <span className="font-bold">£22.50</span>
                    </Button>
                    <p className="text-xs text-zinc-500 mt-2 text-center">
                        This rate is for people working in the Number One, Kirkstall Forge building.
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* After booking info */}
        <div className="mt-12 text-center text-zinc-600">
            <h3 className="text-lg font-medium text-zinc-900 mb-4">After you book</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white p-4 rounded border border-zinc-100">
                    <strong className="block text-zinc-900 mb-1">Payment</strong>
                    Stripe will take payment securely.
                </div>
                <div className="bg-white p-4 rounded border border-zinc-100">
                    <strong className="block text-zinc-900 mb-1">Receipt</strong>
                    You'll receive an email receipt immediately.
                </div>
                <div className="bg-white p-4 rounded border border-zinc-100">
                    <strong className="block text-zinc-900 mb-1">Confirmation</strong>
                    We'll send a confirmation with arrival details.
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Book;