export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Hygiene Resources</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Educational Materials</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 whitespace-nowrap">PDF</span>
              <div>
                <h3 className="font-medium">Complete Guide to Hand Hygiene</h3>
                <p className="text-sm text-gray-600">Comprehensive guide covering proper handwashing techniques, when to wash hands, and the science behind hand hygiene.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 whitespace-nowrap">Video</span>
              <div>
                <h3 className="font-medium">Proper Handwashing Technique</h3>
                <p className="text-sm text-gray-600">Step-by-step video demonstration of the WHO-recommended handwashing technique.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 whitespace-nowrap">Guide</span>
              <div>
                <h3 className="font-medium">Daily Hygiene Checklist</h3>
                <p className="text-sm text-gray-600">Printable checklist for maintaining proper personal hygiene throughout the day.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Research & Studies</h2>
          <div className="space-y-4">
            <article className="border-b pb-4">
              <h3 className="font-medium">Impact of Hand Hygiene on Public Health</h3>
              <p className="text-sm text-gray-600 mb-2">A comprehensive study showing how proper hand hygiene reduces disease transmission by up to 23%.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read full study →</a>
            </article>
            <article className="border-b pb-4">
              <h3 className="font-medium">Global Hygiene Statistics 2023</h3>
              <p className="text-sm text-gray-600 mb-2">Latest data on hygiene practices across different regions and their impact on public health.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">View statistics →</a>
            </article>
            <article>
              <h3 className="font-medium">Personal Hygiene in Different Cultures</h3>
              <p className="text-sm text-gray-600 mb-2">Comparative analysis of hygiene practices across various cultural contexts.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
            </article>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600" 
              alt="Hand hygiene" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">The Science of Hand Hygiene</h3>
              <p className="text-sm text-gray-600 mb-3">Understanding why proper hand washing is crucial for preventing disease transmission.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read article →</a>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600" 
              alt="Dental hygiene" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Modern Oral Care Practices</h3>
              <p className="text-sm text-gray-600 mb-3">Latest research and recommendations for maintaining optimal oral health.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read article →</a>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=600" 
              alt="Personal care" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Essential Personal Care Guide</h3>
              <p className="text-sm text-gray-600 mb-3">Comprehensive guide to daily personal care and hygiene maintenance.</p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read article →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Download Our Apps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200" 
              alt="Mobile app" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold mb-2">Hygiene Tracker App</h3>
              <p className="text-sm text-gray-600">Track your daily hygiene routine and get personalized recommendations.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=200" 
              alt="Educational app" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold mb-2">Hygiene Education App</h3>
              <p className="text-sm text-gray-600">Interactive learning modules for children and adults.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}