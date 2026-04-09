import Link from 'next/link';
import {SiGithub, SiYoutube, SiInstagram} from '@icons-pack/react-simple-icons';

const menuItems = [
  { label: 'Homepage', href: '/'},
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
  { label: 'Creators', href: 'creators'},
];

const socialLinks = [
  { icon: SiGithub, href: '', label: 'Github' },
  { icon: SiYoutube, href: '', label: 'Youtube' },
  { icon: SiInstagram, href: '', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Menu */}
          <div>
            <h3 className="text-sm text-gray-400 mb-4">Menu</h3>
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-start">
              <div>
                <h3 className="text-sm text-gray-400 mb-4">Connect</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
          </div>

          {/* Logo */}
          <div className="flex justify-end items-start">
            <div className="text-right">
              <div className="text-6xl font-bold tracking-tighter">AT.</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500 text-center">
              © 2026 Arya Team. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}