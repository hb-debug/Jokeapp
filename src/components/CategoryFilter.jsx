import { Filter } from 'lucide-react'

function CategoryFilter({ categories, selectedCategory, onCategoryChange, darkMode }) {
  return (
    <div className={`rounded-2xl shadow-lg p-6 mb-8 border ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Choose Your Humor Style</h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : darkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
