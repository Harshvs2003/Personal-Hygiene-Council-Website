export default function HandHygiene() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Hand Hygiene Guide</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=800"
            alt="Proper hand washing"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Hand Hygiene Matters</h2>
          <p className="text-gray-700 mb-4">
            Proper hand hygiene is one of the most effective ways to prevent the spread of infections and diseases. Up to 80% of common infections can be transmitted through hands.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Key Statistics</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proper handwashing can reduce respiratory illnesses by 16-21%</li>
              <li>Reduces diarrheal disease-associated deaths by up to 50%</li>
              <li>Decreases the risk of foodborne illness by 47%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Proper Hand Washing Technique</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Step 1: Wet & Soap</h3>
            <p className="text-gray-600 mb-3">Wet your hands with clean water and apply enough soap to cover all surfaces.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Use clean running water</li>
              <li>• Temperature doesn't affect germ removal</li>
              <li>• Apply enough soap to create lather</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Step 2: Proper Technique</h3>
            <p className="text-gray-600 mb-3">Follow the WHO's six-step technique for thorough cleaning.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Rub palms together</li>
              <li>• Clean between fingers</li>
              <li>• Focus on thumbs and fingertips</li>
              <li>• Don't forget wrists</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Step 3: Timing & Drying</h3>
            <p className="text-gray-600 mb-3">Wash for at least 20 seconds and dry thoroughly.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Count to 20 or sing "Happy Birthday" twice</li>
              <li>• Rinse thoroughly with clean water</li>
              <li>• Use clean towel or air dry</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">When to Wash Your Hands</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Critical Moments</h3>
            <ul className="space-y-2">
              <li>✓ Before, during, and after preparing food</li>
              <li>✓ Before eating</li>
              <li>✓ Before and after caring for someone who is sick</li>
              <li>✓ After using the toilet</li>
              <li>✓ After changing diapers or cleaning up a child</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Additional Important Times</h3>
            <ul className="space-y-2">
              <li>✓ After blowing your nose, coughing, or sneezing</li>
              <li>✓ After touching an animal or animal waste</li>
              <li>✓ After handling pet food or treats</li>
              <li>✓ After touching garbage</li>
              <li>✓ After handling money</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Hand Sanitizer Use</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">When to Use Hand Sanitizer</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• When soap and water aren't available</li>
                <li>• In healthcare settings</li>
                <li>• During disease outbreaks</li>
                <li>• In crowded public places</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use sanitizer with at least 60% alcohol</li>
                <li>• Apply enough to cover all surfaces</li>
                <li>• Rub hands until completely dry</li>
                <li>• Not effective on visibly dirty hands</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}