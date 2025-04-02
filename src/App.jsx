import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full text-center">
          <div>
            <img src="/images/illustration-hero.svg" alt="Illustration Hero" className="w-full" />
          </div>

          <h1 className="font-bold text-2xl mt-4">Order Summary</h1>
          <p className="text-gray-600 mt-4 mb-4">
            You can now listen to millions of songs, <br />
            audiobooks, and podcasts on any device <br />
            anywhere you like!
          </p>

          <div className="flex items-center bg-gray-200 m-6 p-4 rounded-lg justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/icon-music.svg" alt="Music Icon" className="w-10" />
              <div className="text-left">
                <p className="font-bold">Annual Plan</p>
                <p className="text-gray-400 text-sm line-through">$59.99/year</p>
              </div>
            </div>
            <button className="text-blue-600 underline font-semibold hover:text-blue-800">
              Change
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-6 m-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 transition font-semibold rounded-lg py-2">
              Proceed to Payment
            </button>
            <button className="text-gray-500 hover:text-gray-700 font-semibold transition">
              Cancel Order
            </button>
          </div>
        </div>

        <div className="mt-10 text-gray-500 text-sm">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Frontend Mentor
          </a>. Coded by{' '}
          <a href="https://backendfrontflip.github.io/contact-info/" className="text-blue-600">
            Space Cadet.
          </a>.
        </div>
      </div>
    </>
  );
}

export default App;
