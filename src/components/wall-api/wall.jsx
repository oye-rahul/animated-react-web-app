import React, { useState, useEffect } from 'react';
import { Floating3DCard } from './card.jsx';

const Wall = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchWallpapers() {
    try {
      setLoading(true);
      const res = await fetch(
        'https://nexwall.kodnextech.com/api/developer/v1/wallpapers?per_page=20',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer 263|yHecxs72jqYk186qDYmNjOoolsy7aZ6Om5Ga27YFade792df',
            Accept: 'application/json',
          },
        }
      );

      const data = await res.json();
      console.log(data);
      setWallpapers(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Auto-run when the component mounts
  useEffect(() => {
    fetchWallpapers();
  }, []);

  const wallpaperz = wallpapers.map((elem) => ({
    id: elem.id,
    image: elem.image_url,
    thumbnail: elem.thumbnail_url,
    category: elem.category?.name || elem.category,
    resolution: elem.resolution,
    tags: elem.tags,
  }));

  return (
    <div className="p-3 sm:p-6 w-full">
      <div className="flex justify-center mb-6">
        <button 
          onClick={fetchWallpapers}
          disabled={loading}
          className="px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition cursor-pointer shadow disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Refresh Wallpapers'}
        </button>
      </div>

      {loading && wallpapers.length === 0 ? (
        <div className="flex justify-center items-center py-20 text-gray-500 font-medium">
          Loading wallpapers...
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {wallpaperz.map((elem) => (
            <Floating3DCard key={elem.id} elem={elem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wall;