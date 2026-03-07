'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';
import { postLocal } from '../api/api';


const AltaPlatoComponent = () => {
    const [name , setName] = useState("");
    const [localId , setlocalId] = useState("");
    const [city , setCity] = useState("");
    const [price , setprice] = useState("");
    const [description , setdescription] = useState("");
    const [photo , setPhoto] = useState("");
    const [photos , setPhotos] = useState([]);


    const handleClick = async (e) => {
        e.preventDefault();
        await postLocal(name, type, localId, city,price,description );
    }

    const handleAddPhoto = (e) => {
        e.preventDefault();
        setPhotos((prev) => [...prev , photo]);
        setPhoto("");
    }


    return(
         <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Alta Plato</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Sube tu plato!!!</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
            <div>
            <label htmlFor="zone" className="block text-sm/6 font-semibold text-gray-900">
              Local
            </label>
            <div className="mt-2.5">
              <input
                id="localId"
                name="localId"
                type="text"
                autoComplete="given-name"
                onChange={(e) => setlocalId(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
            <div>
            <label htmlFor="address" className="block text-sm/6 font-semibold text-gray-900">
              price
            </label>
            <div className="mt-2.5">
              <input
                id="description"
                name="description"
                type="text"
                onChange={(e) => setdescription(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm/6 font-semibold text-gray-900">
              price
            </label>
            <div className="mt-2.5">
              <input
                id="price"
                name="price"
                type="text"
                onChange={(e) => setprice(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="photo" className="block text-sm/6 font-semibold text-gray-900">
              photo
            </label>
            <div className="mt-2.5">
              <input
                id="photo"
                name="photo"
                type="text"
                onChange={(e) => setPhoto(e.target.value)}
                autoComplete="give-photo"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
         <div className="mt-10">
          <button
            type="submit"
            onClick={handleAddPhoto}
            className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Photo
          </button>
        </div>

        {photos.map((ph) => <p key={ph}> {ph} </p> )}


        <div className="mt-10">
          <button
            type="submit"
            onClick={handleClick}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Alta Local
          </button>
        </div>
      </form>
    </div>
    );

}

export default AltaPlatoComponent;