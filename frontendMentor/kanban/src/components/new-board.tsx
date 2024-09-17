import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState, useCallback } from 'react'
import { Button } from './button'
import { Input } from './input'
import { DialogClose, DialogContent, DialogTitle } from './dialog'

export function NewBoardDialog() {
  const [columns, setColumns] = useState(['Todo', 'Doing'])

  const addColumn = () => {
    setColumns([...columns, ''])
  }

  const removeColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index))
  }

  const updateColumn = useCallback((index: number, value: string) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns]
      newColumns[index] = value
      return newColumns
    })
  }, [])

  return (
    <DialogContent>
      <div className="flex items-center justify-between mb-8">
        <DialogTitle>Add New Board</DialogTitle>

        <DialogClose>
          <X className="size-5 text-white" />
        </DialogClose>
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="boardName" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="boardName" placeholder="e.g. Web Design" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Columns</label>
          {columns.map((column, index) => (
            <div
              key={`column-${index}-${column}`}
              className="flex items-center mb-2 gap-2"
            >
              <Input
                value={column}
                onChange={e => updateColumn(index, e.target.value)}
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
