import { useQuery } from '@tanstack/react-query'
import { PlusCircle } from 'lucide-react'

import { CreateProductDialog } from './components/create-product-dialog'
import { ProductsFilters } from './components/products-filters'
import { Button } from './components/ui/button'
import { Dialog, DialogTrigger } from './components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table'
import { getProducts } from './data/products'

export function App() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <div className="p-6 font-body max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>

      <div className="flex items-center justify-between">
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="size-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]">ID</TableHead>
              <TableHead className="w-[120px]">Produto</TableHead>
              <TableHead className="w-[140px]">Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell className="text-muted-foreground">
                    {product.id}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
