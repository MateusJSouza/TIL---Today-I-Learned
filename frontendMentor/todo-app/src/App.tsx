import { TodoProvider } from "./app/contexts/TodoContext";
import { Add } from "./app/view/components/Add";
import { Header } from "./app/view/components/Header";

export function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex justify-start items-center flex-col text-sm md:text-lg bg-gray-100 dark:bg-gray-900">
        <div className="w-350 md:w-550 px-2 md:px-0">
          <Header />
          <div className="rounded-lg relative shadow-xl">
            <Add />
            {/* <List />
          <Footer /> */}
          </div>
        </div>
        <p className="mt-24 text-gray-600 dark:text-gray-600">Drag and drop to reorder list</p>
      </div>
    </TodoProvider>
  )
}
