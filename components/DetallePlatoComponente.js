'use client'

import { CloudArrowUpIcon, TagIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { getPlato, getPlatos } from '../api/api'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function DetallePlatoComponent() {

  const params = useParams()
  const [isPosted, setIsPosted] = useState({})
  const [dishes, setdishes] = useState({})

  const features = [
    {
      name: 'Category.',
      description: dishes.category,
      icon: TagIcon,
    },
    {
      name: 'City.',
      description: dishes.city,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Price.',
      description: dishes.price,
      icon: CurrencyDollarIcon,
    }
  ]

  useEffect(() => {

    const fetchdishes = async () => {
      const data = await getPlato(params.id)
      setdishes(data.item)
    }

    fetchdishes()

  }, [isPosted])

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
               {dishes.name}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
              {dishes?.description}
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
                <h1 className=" pt-6 text-gray-700">
                    <Link href={`/Perfil/${dishes.creatorId}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dishes.creator?.name}
                    </Link>
                  </h1>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={dishes.photos? dishes.photos[0] : "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"} 
            width={2432}
            height={1442}
            className="w-3xl  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
