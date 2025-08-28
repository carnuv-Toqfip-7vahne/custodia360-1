'use client'

import Link from 'next/link'

export default function DatosEntidadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Datos de la Entidad</h1>
          <p className="text-gray-600">Complete los datos de su entidad para continuar con la contratación</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Entidad *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CIF/NIF *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Menores *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" required>
                <option value="">Seleccionar rango</option>
                <option value="1-50">1-50 menores</option>
                <option value="51-200">51-200 menores</option>
                <option value="201-500">201-500 menores</option>
                <option value="501+">+501 menores</option>
              </select>
            </div>

            <div className="flex justify-between">
              <Link
                href="/planes"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Volver a Planes
              </Link>

              <Link
                href="/contratar/datos-delegado"
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
              >
                Continuar →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
