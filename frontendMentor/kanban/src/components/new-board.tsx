import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState, useCallback, useId, type FormEvent } from 'react'
import { Button } from './button'
import { Input } from './input'
import { DialogClose, DialogContent, DialogTitle } from './dialog'
import { createBoard } from '../api/boards' // Assuma que esta função existe
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function NewBoardDialog() {
  const [columns, setColumns] = useState(['Todo', 'Doing'])
  const [boardName, setBoardName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      // Invalida e busca novamente a query 'boards'
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      // Fecha o diálogo
      // Limpa o formulário
    },
  })

  const updateColumn = useCallback((index: number, value: string) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns]
      newColumns[index] = value
      return newColumns
    })
  }, [])

  const addColumn = useCallback(() => {
    setColumns(prevColumns => [...prevColumns, ''])
  }, [])

  const removeColumn = useCallback((index: number) => {
    setColumns(prevColumns => prevColumns.filter((_, i) => i !== index))
  }, [])

  const columnId = useId()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutation.mutate({ name: boardName, columns })
  }

  return (
    <DialogContent>
      <div className="flex items-center justify-between mb-8">
        <DialogTitle>Add New Board</DialogTitle>

        <DialogClose>
          <X className="size-5 text-white" />
        </DialogClose>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="boardName" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="boardName"
            placeholder="e.g. Web Design"
            value={boardName}
            onChange={e => setBoardName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Columns</label>
          {columns.map((column, index) => (
            <div
              key={`${columnId}-${index}`}
              className="flex items-center mb-2 gap-2"
            >
              <Input
                value={column}
                onChange={event => updateColumn(index, event.target.value)}
                className="flex-grow mr-4"
              />
              <button
                type="button"
                onClick={() => removeColumn(index)}
                className="text-medium-grey hover:text-main-red"
              >
                <X size={20} />
              </button>
            </div>
          ))}
          <Button
            type="button"
            variant="secondary"
            onClick={addColumn}
            className="w-full mt-2"
          >
            + Add New Column
          </Button>
        </div>
        <Button type="submit" variant="primary" className="w-full">
          Create New Board
        </Button>
      </form>
    </DialogContent>
  )
}
