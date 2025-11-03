import { Smile, Github, Moon, Sun } from 'lucide-react'

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`shadow-sm border-b sticky top-0 z-50 backdrop-blur-lg transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-800/90 border-gray-700' 
        : 'bg-white/90 border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Jokes Dashboard
              </h1>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>For Working Professionals</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-colors rounded-lg ${
                darkMode 
                  ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors rounded-lg ${
                darkMode 
                  ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
