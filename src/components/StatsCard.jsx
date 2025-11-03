function StatsCard({ icon, title, value, color, darkMode }) {
  return (
    <div className={`rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-shadow duration-300 animate-fade-in ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`p-4 bg-gradient-to-br ${color} rounded-xl shadow-md`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
          <p className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{value}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
