// app/settings/page.tsx
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, User, MapPin, CreditCard, FileText, ShoppingBag, PackageSearch } from 'lucide-react'

const sections = [
  {
    title: 'Cuenta',
    items: [
      { label: 'Perfil', href: '/profile', icon: <User className="w-5 h-5" /> },
      { label: 'Mis pedidos', href: '/orders', icon: <PackageSearch className="w-5 h-5" /> },
      { label: 'Mis compras', href: '/purchases', icon: <ShoppingBag className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Información de pago',
    items: [
      { label: 'Mis direcciones', href: '/settings/addresses', icon: <MapPin className="w-5 h-5" /> },
      { label: 'Mis tarjetas', href: '/settings/cards', icon: <CreditCard className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Políticas',
    items: [
      { label: 'Uso', href: '/settings/policies/use', icon: <FileText className="w-5 h-5" /> },
      { label: 'Privacidad', href: '/settings/policies/privacy', icon: <FileText className="w-5 h-5" /> },
      { label: 'Devoluciones', href: '/settings/policies/returns', icon: <FileText className="w-5 h-5" /> },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-2">
          <h2 className="text-lg font-semibold font-jakarta text-gray-700"style={{ color:'#1C1C1C'}} >{section.title}</h2>
          {section.items.map((item) => (
            <Link href={item.href} key={item.href}>
              <Card className="rounded-2xl hover:shadow-md transition border border-gray-200 bg-white">
                <CardContent className="flex justify-between items-center py-4 px-2">
                  <div className="flex items-center gap-3" style={{ color: '#4A4A4A' }}>
                    {item.icon}
                    <span className="text-base font-medium font-jakarta" style={{ color: '#4A4A4A' }}>{item.label}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground stroke-[1.2]" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
