import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { EllipsisVertical } from 'lucide-react'
import logoKanban from './assets/kanban.svg'
import { Button } from './components/button'
import { NewBoardDialog } from './components/new-board'
import { Dialog, DialogTrigger } from './components/dialog'

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Dialog>
      <div className="flex flex-col h-screen bg-light-grey dark:bg-very-dark-grey text-black dark:text-white">
        <header className="flex items-center p-4 bg-white dark:bg-dark-grey z-10 dark:border-b-zinc-300 border-b-zinc-800">
          <div className="flex items-center gap-4 px-8 flex-1">
            <img src={logoKanban} alt="" />
            <h1 className="text-2xl font-bold text-black dark:text-white">
              kanban
            </h1>
          </div>
          <div className="flex items-center justify-between w-[calc(100%-300px)]">
            <h2 className="text-xl font-bold w-[240px]">Platform Launch</h2>
            <div className="flex items-center gap-4">
              <Button type="button" variant="primary" size={'large'}>
                + Add New Task
              </Button>
              <EllipsisVertical size={24} />
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <NewBoardDialog />
          <main className="flex-1 overflow-auto p-8">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-medium-grey mb-6">
                This board is empty. Create a new column to get started.
              </p>
              <DialogTrigger asChild>
                <Button type="button" variant="primary" size={'large'}>
                  + Add New Column
                </Button>
              </DialogTrigger>
            </div>
          </main>
        </div>
      </div>
    </Dialog>
  )
}
