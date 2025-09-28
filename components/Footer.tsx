"use client";

import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">AirCover</Link></li>
            <li><Link href="#">Anti-discrimination</Link></li>
            <li><Link href="#">Disability support</Link></li>
            <li><Link href="#">Cancellation options</Link></li>
            <li><Link href="#">Report neighborhood concern</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li><Link href="#">Airbnb your home</Link></li>
            <li><Link href="#">AirCover for Hosts</Link></li>
            <li><Link href="#">Hosting resources</Link></li>
            <li><Link href="#">Community forum</Link></li>
            <li><Link href="#">Responsible hosting</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li><Link href="#">Newsroom</Link></li>
            <li><Link href="#">New features</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Investors</Link></li>
            <li><Link href="#">Gift cards</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li><Link href="#">How Airbnb works</Link></li>
            <li><Link href="#">Diversity & Belonging</Link></li>
            <li><Link href="#">Accessibility</Link></li>
            <li><Link href="#">Trust & Safety</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span>© {new Date().getFullYear()} oloyejr, Inc.</span>
          <div className="flex flex-wrap gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Sitemap</Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button className="flex items-center gap-1 hover:underline">
            <GlobeAltIcon className="w-5 h-5" /> English (US)
          </button>
          <button className="hover:underline">$ USD</button>
          <div className="flex gap-4">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
