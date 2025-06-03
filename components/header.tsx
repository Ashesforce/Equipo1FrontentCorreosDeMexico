// components/Header.tsx
import Image from 'next/image'
import { Menu, Mic, Smartphone, Heart, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/logo-correos.png" alt="Logo Correos" width={130} height={40} />
        <button className="bg-gray-100 p-2 rounded-full">
          <Menu className="w-5 h-5 text-gray-700 stroke-[1.2]" />
        </button>
      </div>

      <div className="flex-1 mx-4 max-w-2xl">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Buscar un producto..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-800"
          />
          <Mic className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Smartphone className="w-4 h-4 stroke-[1.2]" /> App
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <Heart className="w-4 h-4 stroke-[1.2]" />
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <ShoppingCart className="w-4 h-4 stroke-[1.2]" />
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <User className="w-4 h-4 stroke-[1.2]" />
        </button>
        <div className="bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">ES</div>
      </div>
    </header>
  )
}
