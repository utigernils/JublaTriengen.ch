import backgroundImage from '../../assets/images/background.jpg'

function Landing() {

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </div>
  )
}

export default Landing
