import { FaHandsWash, FaTooth, FaShower } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Previous hero section remains the same */}
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link to="/hand-hygiene" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=600" 
              alt="Hand washing demonstration" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <FaHandsWash className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold mb-2">Hand Hygiene</h2>
            <p className="text-gray-600 mb-4">Learn proper handwashing techniques and their importance in preventing disease spread.</p>
            <span className="text-blue-600 hover:underline">Read more →</span>
          </div>
        </Link>
        
        <Link to="/oral-care" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600" 
              alt="Dental care" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <FaTooth className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold mb-2">Oral Care</h2>
            <p className="text-gray-600 mb-4">Discover best practices for maintaining optimal oral health and preventing dental issues.</p>
            <span className="text-blue-600 hover:underline">Read more →</span>
          </div>
        </Link>
        
        <Link to="/body-hygiene" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=600" 
              alt="Personal care products" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <FaShower className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold mb-2">Body Hygiene</h2>
            <p className="text-gray-600 mb-4">Explore comprehensive guidelines for maintaining proper body hygiene and cleanliness.</p>
            <span className="text-blue-600 hover:underline">Read more →</span>
          </div>
        </Link>
      </div>

      {/* Rest of the home page content remains the same */}
    </div>
  );
}