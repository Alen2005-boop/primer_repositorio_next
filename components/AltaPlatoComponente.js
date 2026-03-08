'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';
import { postPlato } from '../api/api';
import { useRouter } from 'next/navigation';

const AltaPlatoComponent = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [localId, setLocalId] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [photos, setPhotos] = useState([]);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    await postPlato(name, category, localId, city, price, description);
    router.push('/ListaPlato');
  }


  return (
    <div className="bg-orange-100 min-h-screen px-6 py-24">
      <div className="mx-auto max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">Alta Plato</h2>
        <p className="text-gray-600 text-center mb-8">Sube tu plato!!!</p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-900 font-semibold mb-1">Nombre *</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre del plato"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Local ID */}
          <div>
            <label htmlFor="localId" className="block text-gray-900 font-semibold mb-1">Local ID *</label>
            <input
              id="localId"
              type="number"
              value={localId}
              onChange={(e) => setLocalId(e.target.value)}
              placeholder="ID del local"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Ciudad */}
          <div>
            <label htmlFor="city" className="block text-gray-900 font-semibold mb-1">Ciudad *</label>
            <input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ciudad"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Precio */}
          <div>
            <label htmlFor="price" className="block text-gray-900 font-semibold mb-1">Precio *</label>
            <input
              id="price"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Precio"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Categoría */}
          <div className="sm:col-span-2">
            <label htmlFor="category" className="block text-gray-900 font-semibold mb-1">Categoría</label>
            <div className="relative">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Seleccionar categoría</option>
                <option value="Entrada">Entrada</option>
                <option value="Principal">Principal</option>
                <option value="Postre">Postre</option>
                <option value="Bebida">Bebida</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Descripción */}
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-gray-900 font-semibold mb-1">Descripción *</label>
            <textarea
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción del plato"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Botones finales */}
          <div className="sm:col-span-2 flex gap-4 justify-center">
            <button
              type="submit"
              onClick={handleClick}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition shadow-md"
            >
              Alta Plato
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default AltaPlatoComponent;