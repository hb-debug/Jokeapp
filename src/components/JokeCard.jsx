import { Loader2, AlertCircle, MessageCircle } from 'lucide-react'

function JokeCard({ joke, loading, error, onRefresh, darkMode }) {
  if (loading) {
    return (
      <div className={`rounded-2xl shadow-xl p-12 text-center border animate-pulse ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
        <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading a fresh joke for you...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 rounded-2xl shadow-xl p-12 text-center border border-red-200">
        <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
        <p className="text-red-600 font-medium mb-4">{error}</p>
        <button
          onClick={onRefresh}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (!joke) {
    return null
  }

  return (
    <div className={`rounded-2xl shadow-xl p-8 md:p-12 border animate-slide-up hover:shadow-2xl transition-shadow duration-300 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-6">
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
          darkMode 
            ? 'bg-gradient-to-r from-orange-900/50 to-amber-900/50 text-orange-400' 
            : 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700'
        }`}>
          <MessageCircle className="w-4 h-4" />
          {joke.category}
        </span>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>ID: {joke.id}</span>
      </div>

      {/* Joke Content */}
      <div className="space-y-6">
        {joke.type === 'single' ? (
          <div className="text-center">
            <p className={`text-2xl md:text-3xl font-medium leading-relaxed ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {joke.joke}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`rounded-xl p-6 border-l-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-orange-900/20 to-amber-900/20 border-orange-500' 
                : 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-400'
            }`}>
              <p className={`text-xl md:text-2xl font-medium leading-relaxed ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                {joke.setup}
              </p>
            </div>
            <div className={`rounded-xl p-6 border-l-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-amber-500' 
                : 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-400'
            }`}>
              <p className={`text-xl md:text-2xl font-semibold leading-relaxed ${
                darkMode ? 'text-gray-50' : 'text-gray-900'
              }`}>
                {joke.delivery}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Reaction Buttons */}
      <div className={`flex items-center justify-center gap-4 mt-8 pt-8 border-t ${
        darkMode ? 'border-gray-700' : 'border-gray-100'
      }`}>
        <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-green-700 rounded-xl transition-all duration-300 transform hover:scale-105">
          <span className="text-2xl group-hover:scale-125 transition-transform">😂</span>
          <span className="font-medium">Hilarious!</span>
        </button>
        <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 text-orange-700 rounded-xl transition-all duration-300 transform hover:scale-105">
          <span className="text-2xl group-hover:scale-125 transition-transform">😄</span>
          <span className="font-medium">Good one!</span>
        </button>
        <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 text-orange-700 rounded-xl transition-all duration-300 transform hover:scale-105">
          <span className="text-2xl group-hover:scale-125 transition-transform">😊</span>
          <span className="font-medium">Nice</span>
        </button>
      </div>
    </div>
  )
}

export default JokeCard
