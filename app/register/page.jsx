'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from '../../api/api';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(username, name, password);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/Login');
    }
  }

  return (
    <div className="relative isolate bg-orange-100 min-h-screen overflow-hidden px-4 lg:px-6">
      
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[144.5rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[288.75rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
          Registrate
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-900 sm:text-xl">
          Crea tu cuenta para gestionar tu plataforma de forma simple y moderna
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="mt-10 flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-orange-500 px-4 py-3 text-white font-semibold shadow hover:bg-orange-400 transition"
          >
            Registrarse
          </button>

          <p className="text-gray-400 text-sm text-center">
            ¿Ya tienes cuenta?{" "}
            <Link href="/Login" className="text-indigo-400 font-semibold hover:text-indigo-300">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}