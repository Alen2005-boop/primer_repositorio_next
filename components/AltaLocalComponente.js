'use client';

import { useState } from 'react';
import { postLocal } from '../api/api';
import { useRouter } from 'next/navigation';

const AltaLocalComponent = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [photo, setPhoto] = useState("");
  const [photos, setPhotos] = useState([]);
  const router = useRouter();

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (photo.trim() !== "") {
      setPhotos((prev) => [...prev, photo]);
      setPhoto("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLocal(name, type, priceRange, city, zone, address, hours, photos);
    router.push('/ListadoPrincipal');
  };

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Alta de Local</h2>
        <p className="text-gray-600 text-center mb-8">Agrega tu restaurante o local</p>

        <form className="space-y-6">

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre del local"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            />
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Zona"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            />
          </div>

          
          <input
            type="text"
            placeholder="Horario"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
          />

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            >
              <option value="">Tipo de local</option>
              <option value="CAFETERIA">Cafeteria</option>
              <option value="RESTAURANTE">Restaurante</option>
              <option value="BAR">Bar</option>
              <option value="FOOD_TRUCK">Food Truck</option>
              <option value="OTROS">Otros</option>
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            >
              <option value="">Rango de precio</option>
              <option value="ECONOMICO">Económico</option>
              <option value="MEDIO">Medio</option>
              <option value="ALTO">Alto</option>
            </select>
          </div>

          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="URL de la foto"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500"
            />
            <button
              onClick={handleAddPhoto}
              className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Añadir
            </button>
          </div>

          
          <div className="flex flex-wrap gap-2">
            {photos.map((ph, i) => (
              <span key={i} className="px-2 py-1 bg-gray-900 rounded-full text-sm">{ph}</span>
            ))}
          </div>

          
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition shadow-md"
          >
            Alta Local
          </button>

        </form>
      </div>
    </div>
  );
};

export default AltaLocalComponent;