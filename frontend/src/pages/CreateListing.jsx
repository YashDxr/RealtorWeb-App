export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            className="border p-3 rounded-lg"
            type="text"
            id="name"
            placeholder="Name"
            required
          />
          <textarea
            className="border p-3 rounded-lg"
            id="description"
            placeholder="Description"
            required
          />
          <input
            className="border p-3 rounded-lg"
            type="text"
            id="address"
            placeholder="Address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="price"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Price</p>
                <span className="text-xs">(&#8377; /month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="offerPrice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Offer Price</p>
                <span className="text-xs">(&#8377; /month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:&nbsp;
            <span className="font-normal text-gray-600 ml-2">
              First image will be chosen as cover image. (Max images: 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="text-green-700 p-3 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-40">
              Upload
            </button>
          </div>
          <button className="uppercase bg-indigo-700 text-white border rounded-lg p-3 hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}