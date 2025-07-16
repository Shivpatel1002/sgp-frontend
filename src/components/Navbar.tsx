import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Scale, LogIn } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Chatbot',
    path: '/chatbot'
  }, {
    name: 'LawSimplify',
    path: '/lawsimplify'
  }, {
    name: 'Document Q&A',
    path: '/document-qa'
  }, {
    name: 'Find a Lawyer',
    path: '/find-lawyer'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <nav className="bg-white shadow-soft border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-teal" />
            <span className="text-2xl font-bold text-navy">LawMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-teal ${isActive(link.path) ? 'text-teal border-b-2 border-teal pb-1' : 'text-gray-700'}`}>
                {link.name}
              </Link>)}
            <Button asChild size="sm" className="bg-teal hover:bg-teal-light text-white">
              <Link to="/login">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-teal focus:outline-none focus:text-teal">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-teal hover:bg-gray-50 rounded-md ${isActive(link.path) ? 'text-teal bg-teal-50' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
            <div className="px-3 py-2">
              <Button asChild size="sm" className="w-full bg-teal hover:bg-teal-light text-white">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};