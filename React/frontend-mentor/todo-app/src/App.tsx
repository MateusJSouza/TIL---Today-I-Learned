import { useState } from "react";

import sun from './assets/icons/sun.svg'
import moon from './assets/icons/moon.svg'
import { CircleIcon } from "./assets/icons/CircleIcon";

export function App() {
  const [theme, setTheme] = useState<string>('dark');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  function toggleCheckbox() {
    setIsChecked(prevChecked => !prevChecked)
  }

  return (
    <div className="w-full bg-[#171823] h-screen flex flex-col items-center justify-center">
      <header className="bg-header-image w-full bg-cover bg-no-repeat h-80 flex items-center justify-center gap-[348px]">
        <p className="tracking-[15px] text-white text-[40px] font-bold">TODO</p>

        <button onClick={() => handleToggleTheme()} className="cursor-pointer bg-transparent">
          {theme === 'dark' && <img src={theme === 'dark' ? sun : moon} alt="Ícone de alteração de tema da aplicação" />}
        </button>
      </header>

      <div className="bg-[#25273D] text-white w-[540px] flex items-center justify-center mt-12 gap-6 rounded-md px-6 py-5">
        <CircleIcon checked={isChecked} onClick={toggleCheckbox} />

        <input type="text" name="name" placeholder="Create a new todo..." className="bg-transparent w-full outline-none text-lg" />
      </div>

      <main className="flex flex-col justify-center mt-6 items-center gap-6 bg-[#25273D] w-[540px] h-full rounded-md">
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <input type="text" name="name" placeholder="Teste..." className="bg-transparent outline-none text-lg tracking-tighest" />
          </div>

          <div className="w-full">
            <input type="text" name="name" placeholder="Teste..." className="bg-transparent outline-none text-lg tracking-tighest" />
          </div>

          <div className="w-full">
            <input type="text" name="name" placeholder="Teste..." className="bg-transparent outline-none text-lg tracking-tighest" />
          </div>
        </div>

        <div className="flex text-sm items-center justify-around w-full py-4 px-6 text-[#5B5E7E]">
          <span className="tracking-tighter">5 items left</span>

          <div className="flex items-center justify-around gap-[19px]">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>

          <button>Clear Completed</button>
        </div>
      </main>

      <footer>
        <span>Drag and drop to reorder list</span>
      </footer>
    </div>
  )
}
