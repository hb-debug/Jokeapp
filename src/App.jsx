import { useState, useEffect } from 'react'
import { Smile, RefreshCw, Briefcase, Coffee, TrendingUp, Sparkles } from 'lucide-react'
import JokeCard from './components/JokeCard'
import CategoryFilter from './components/CategoryFilter'
import StatsCard from './components/StatsCard'
import Header from './components/Header'

function App() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Any')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })
  const [stats, setStats] = useState({
    jokesViewed: 0,
    favoriteCategory: 'Programming',
    laughsToday: 0
  })

  const categories = ['Any', 'Programming', 'Misc', 'Pun', 'Spooky', 'Christmas']

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const fetchJoke = async (category = selectedCategory) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke')
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.message || 'Failed to fetch joke')
      }
      
      setJoke(data)
      setStats(prev => ({
        ...prev,
        jokesViewed: prev.jokesViewed + 1,
        laughsToday: prev.laughsToday + Math.floor(Math.random() * 3)
      }))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    fetchJoke(category)
  }

  const handleRefresh = () => {
    fetchJoke()
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Professional Humor Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Jokes Dashboard
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Take a break from your busy workday with curated jokes for professionals. 
            Boost your mood, share with colleagues, and keep the workplace fun! 🎉
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          darkMode={darkMode}
        />

        {/* Joke Card */}
        <div className="mb-8">
          <JokeCard
            joke={joke}
            loading={loading}
            error={error}
            onRefresh={handleRefresh}
            darkMode={darkMode}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            <span>{loading ? 'Loading...' : 'Get New Joke'}</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={<Smile className="w-6 h-6" />}
            title="Jokes Viewed"
            value={stats.jokesViewed}
            color="from-orange-400 to-amber-400"
            darkMode={darkMode}
          />
          <StatsCard
            icon={<Briefcase className="w-6 h-6" />}
            title="Favorite Category"
            value={stats.favoriteCategory}
            color="from-amber-400 to-yellow-400"
            darkMode={darkMode}
          />
          <StatsCard
            icon={<Coffee className="w-6 h-6" />}
            title="Laughs Today"
            value={stats.laughsToday}
            color="from-red-400 to-pink-400"
            darkMode={darkMode}
          />
        </div>

        {/* Professional Tips Section */}
        <div className={`rounded-2xl shadow-xl p-8 border ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why Humor at Work Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">😊</span>
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Reduces Stress</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Laughter releases endorphins and helps manage workplace stress effectively.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Builds Team Bonds</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Shared humor creates stronger connections between team members.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Boosts Creativity</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>A positive mood enhances creative thinking and problem-solving.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Increases Productivity</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy employees are more engaged and productive at work.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-8 text-center">
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Powered by <a href="https://jokeapi.dev" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold">JokeAPI</a>
          </p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Made with ❤️ for working professionals who need a laugh
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
