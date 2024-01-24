import { Input } from './ui/input'

export function ProductsFilters() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <Input placeholder="ID do pedido" />
        <Input placeholder="Nome do produto" />
      </div>
    </div>
  )
}
