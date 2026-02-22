"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Principal"className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Inicio</span>
              <img alt="Logo"src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"className="h-8 w-auto"/>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button"onClick={() => setMobileMenuOpen(true)}className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name}href={item.href}className="text-sm font-semibold text-white hover:text-indigo-400 transition">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login"className="text-sm font-semibold text-white hover:text-indigo-400 transition">
              Iniciar sesión →
            </Link>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen}onClose={setMobileMenuOpen}className="lg:hidden" >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Inicio</span>
                <img alt="Logo"src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"className="h-8 w-auto"/>
              </Link>
              <button type="button"onClick={() => setMobileMenuOpen(false)}className="-m-2.5 rounded-md p-2.5 text-gray-200">
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name}href={item.href}className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="py-6">
                  <Link href="/login"className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"onClick={() => setMobileMenuOpen(false)}>
                    Iniciar sesión
                  </Link>
                  <Link href="/register"className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-400 hover:bg-white/5"onClick={() => setMobileMenuOpen(false)}>
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Impulsá tu negocio online
          </h1>

          <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
            Gestioná tu plataforma de forma simple, rápida y moderna con nuestra
            solución web desarrollada en Next.js.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register"className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Registrarse
            </Link>

            <Link href="/login"className="text-sm font-semibold text-white hover:text-indigo-400 transition">
              Ya tengo cuenta →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}