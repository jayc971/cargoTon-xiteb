const NewsSection = () => {
  return (
    <section data-section="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News articles will be dynamically rendered here */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title 2</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title 3</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
