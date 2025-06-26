import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white sm:pt-16 lg:pt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h5 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Join us for FREE
          </h5>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between mt-12 lg:mt-20">
          <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
            {['About Us', 'Contact'].map((text, i) => {
              const href =
                text === 'Contact'
                  ? 'https://www.linkedin.com/in/vitalii-povierienov-90647b212/'
                  : '#';
              return (
                <li key={i}>
                  <a
                    href={href}
                    className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
                    target={text === 'Contact' ? '_blank' : '_self'}
                    rel={text === 'Contact' ? 'noopener noreferrer' : undefined}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0">
            {/* Add social icons here */}
          </ul>
        </div>

        <hr className="mt-10 border-gray-300" />

        <div className="mt-10 md:flex md:items-center md:justify-between">
          <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
            <li>
              <a
                href="https://www.linkedin.com/in/vitalii-povierienov-90647b212/"
                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vitalii-povierienov-90647b212/"
                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>

          <p className="mt-8 text-base font-normal text-center text-gray-600 md:text-left md:mt-0 md:order-1 font-pj">
            MintoryX company | © 2021, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
