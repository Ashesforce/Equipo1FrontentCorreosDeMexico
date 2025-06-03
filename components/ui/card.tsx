// components/ui/card.tsx
export function Card({ children, className = '' }: any) {
  return <div className={`bg-white rounded-lg border ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
