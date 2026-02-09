function Landing() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Jubla Triengen
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Your adventure starts here
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Landing
