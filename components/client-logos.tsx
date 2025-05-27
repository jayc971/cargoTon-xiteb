const ClientLogos = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-yellow-500 font-semibold mb-2">OUR CLIENTS</h3>
        <p className="text-gray-600 mb-8">We have had the pleasure of working with these amazing clients.</p>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png?20220821122206"
            alt="Apple"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Spotify_icon_grey.svg/512px-Spotify_icon_grey.svg.png?20240323151244"
            alt="Spotify"
            className="h-12 grayscale opacity-75 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientLogos
