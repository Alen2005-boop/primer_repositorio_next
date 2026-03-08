'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState , useEffect } from 'react'
import { getPlato , getPlatos } from '../api/api'
import RestaurantRating from './RestaurantRating'
import { useParams } from 'next/navigation'
import ListadoRating from './ListadoRating'
import Link from 'next/link'

export default function DetallePlatoComponent() {
    const params = useParams();
    
    const [isPosted , setIsPosted] = useState(false);
    const [plato , setPlato] = useState({});


    const features = [
        {
            name: 'City.',
            description: plato.city,
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Category.',
            description: plato.category,
            icon: ServerIcon,
        },
        {
            name: 'Price.',
            description: plato.price,
            icon: ServerIcon,
        }
    ]

    useEffect(() => {
        const fetchPlato = async () =>{
            const data = await getPlato(params.id);
            const platoData = data.item;
          
        }
        fetchPlato();
    },[params.id, isPosted])

    return (
        <>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    {plato.name}
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-700">
                                    {plato.description}
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt={plato.name}
                            src={plato.photo? plato.photo : "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"} 
                            width={2432}
                            height={1442}
                            className="w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
            <RestaurantRating 
                plato={{ id: plato.id, name: plato.name, city: plato.city, category: plato.category, price: plato.price }} 
                setIsPosted={setIsPosted}
            />
            <ListadoRating reviews={plato.reviews} />
        </>
    )
}

  // useEffect(() => {

  //   const fetchPlato = async () =>{
  //     const data = await getPlato(params.id);
  //     setPlato(data.item);
  //   }

  //   fetchPlato();

  // }, [params.id])

  