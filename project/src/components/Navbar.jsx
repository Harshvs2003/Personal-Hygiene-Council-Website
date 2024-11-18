import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Personal Hygiene Council</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/resources" className="hover:bg-blue-700 px-3 py-2 rounded">Resources</Link>
            <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}