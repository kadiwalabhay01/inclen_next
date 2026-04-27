'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-16">
          {/* Branding */}
          <div className="lg:col-span-1">
            <Image
              src="/inclen_new.png"
              alt="INCLEN Trust International"
              width={160}
              height={80}
              className="h-20 bg-white p-1 rounded mb-6 object-contain"
              priority
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              INCLEN Trust International is a global network dedicated to improving the health of populations
              by promoting equitable health care based on the best evidence of effectiveness.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Twitter / X */}
              <a
                href="https://x.com/INCLEN_TRUST"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent-500 transition-colors text-white hover:bg-[#F7610C]"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/the-inclen-trust-international-663035106/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent-500 transition-colors text-white hover:bg-[#F7610C]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100021257529599#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent-500 transition-colors text-white hover:bg-[#F7610C]"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <p className="text-slate-400 text-sm mb-2">
              F-1/5, 2nd Floor, Okhla Industrial <br />Area Phase - 1
            </p>
            <p className="text-slate-400 text-sm mb-4">New Delhi - 110020, India</p>
            <a
              href="tel:+911147730000"
              className="block text-slate-300 hover:text-white transition-colors text-sm mb-1"
            >
              +91 11 47730000 - 99
            </a>
            <a
              href="mailto:ieodelhi@inclentrust.org"
              className="block text-slate-300 hover:text-white transition-colors text-sm"
            >
              ieodelhi@inclentrust.org
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about#what-we-do" className="hover:text-[#F7610C] transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-[#F7610C] transition-colors">
                  Research Projects
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#F7610C] transition-colors">
                  Partner Institutes
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-[#F7610C] transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#F7610C] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Subscribe to receive the latest updates.</p>
            
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-none rounded px-4 py-3 text-sm text-white focus:ring-2 focus:ring-accent-500 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#F7610C] hover:bg-[#d75b14] text-white font-bold py-3 rounded  transition-colors shadow-lg cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 INCLEN Trust International. All rights served.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;