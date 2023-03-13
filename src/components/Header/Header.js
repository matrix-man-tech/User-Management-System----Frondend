import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <section className="videosection flex justify-center">
        <div className="videodiv relative "></div>
        <div className="text relative container">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg: ml-20 mb-16 lg:mb-0">
              <h2 className="max-w-2xl mt-40 mb-12 text-8xl 2xl:text-8xl text-white font-bold font-heading">
                User Management System.{' '}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
