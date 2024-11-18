export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          The Personal Hygiene Council is a leading organization dedicated to promoting better hygiene practices worldwide. Our mission is to improve global health through education, research, and community engagement.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>To enhance global health standards through promotion of proper hygiene practices and education.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Develop educational resources</li>
              <li>Conduct research studies</li>
              <li>Organize community programs</li>
              <li>Provide expert consultations</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>50+ countries reached</li>
              <li>1M+ people educated</li>
              <li>100+ research papers published</li>
              <li>Annual global hygiene conference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}