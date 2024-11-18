export default function BodyHygiene() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Body Hygiene Guide</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=800"
            alt="Personal care products"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Maintaining Body Hygiene</h2>
          <p className="text-gray-700 mb-4">
            Proper body hygiene is crucial for maintaining good health, preventing infections, and promoting social well-being. It involves regular cleaning, grooming, and care of all body parts.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Benefits of Good Body Hygiene</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prevents skin infections and diseases</li>
              <li>Reduces body odor</li>
              <li>Improves overall well-being</li>
              <li>Boosts self-confidence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Daily Body Care Routine</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Showering Guidelines</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Shower daily or after sweating</li>
              <li>• Use lukewarm water</li>
              <li>• Clean all body parts thoroughly</li>
              <li>• Pay attention to skin folds</li>
              <li>• Use gentle, pH-balanced soap</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Skin Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Moisturize after bathing</li>
              <li>• Use sunscreen daily</li>
              <li>• Exfoliate weekly</li>
              <li>• Keep nails trimmed and clean</li>
              <li>• Change clothes daily</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Hair Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Wash hair regularly</li>
              <li>• Use appropriate products</li>
              <li>• Keep scalp clean</li>
              <li>• Regular haircuts</li>
              <li>• Protect from damage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Special Considerations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Exercise & Activities</h3>
            <ul className="space-y-2">
              <li>✓ Shower after exercise</li>
              <li>✓ Wear clean workout clothes</li>
              <li>✓ Use antiperspirant</li>
              <li>✓ Change wet clothes promptly</li>
              <li>✓ Keep gym gear clean</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Environmental Factors</h3>
            <ul className="space-y-2">
              <li>✓ Adjust routine for climate</li>
              <li>✓ Consider humidity levels</li>
              <li>✓ Protect from sun exposure</li>
              <li>✓ Adapt to seasonal changes</li>
              <li>✓ Stay hydrated</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Product Selection Guide</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Essential Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gentle body wash or soap</li>
                <li>• Shampoo and conditioner</li>
                <li>• Deodorant/antiperspirant</li>
                <li>• Body lotion or moisturizer</li>
                <li>• Sunscreen</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Choosing Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Consider your skin type</li>
                <li>• Look for non-irritating ingredients</li>
                <li>• Avoid harsh chemicals</li>
                <li>• Test new products carefully</li>
                <li>• Consider environmental impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}