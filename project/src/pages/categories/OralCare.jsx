export default function OralCare() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Oral Care Guide</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
            alt="Dental care"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Importance of Oral Health</h2>
          <p className="text-gray-700 mb-4">
            Good oral hygiene is essential for overall health and well-being. Poor oral health has been linked to various health issues, including heart disease, diabetes, and respiratory infections.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Impact of Oral Health</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Affects overall physical health</li>
              <li>Influences self-confidence and social interactions</li>
              <li>Can prevent costly dental procedures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Daily Oral Care Routine</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Brushing Technique</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Brush at least twice daily</li>
              <li>• Use fluoride toothpaste</li>
              <li>• Brush for 2 minutes</li>
              <li>• Use soft-bristled brush</li>
              <li>• Replace brush every 3-4 months</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Flossing</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Floss at least once daily</li>
              <li>• Use 18 inches of floss</li>
              <li>• Curve around each tooth</li>
              <li>• Use clean section for each tooth</li>
              <li>• Consider floss alternatives</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Additional Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Use mouthwash</li>
              <li>• Clean tongue daily</li>
              <li>• Stay hydrated</li>
              <li>• Limit sugary foods</li>
              <li>• Regular dental check-ups</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Common Oral Health Issues</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Prevention Tips</h3>
            <ul className="space-y-2">
              <li>✓ Brush and floss regularly</li>
              <li>✓ Use fluoride products</li>
              <li>✓ Maintain a healthy diet</li>
              <li>✓ Avoid tobacco products</li>
              <li>✓ Limit alcohol consumption</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Warning Signs</h3>
            <ul className="space-y-2">
              <li>⚠ Bleeding gums</li>
              <li>⚠ Persistent bad breath</li>
              <li>⚠ Tooth sensitivity</li>
              <li>⚠ Loose teeth</li>
              <li>⚠ Mouth sores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}