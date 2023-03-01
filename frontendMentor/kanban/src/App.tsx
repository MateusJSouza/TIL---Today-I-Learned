import { DotsThreeOutlineVertical, EyeSlash, MoonStars, Sun, Table } from 'phosphor-react';
import { useState } from 'react';
import logo from './assets/kanban.svg';
import Switch from './components/Switch';

export function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsEnabled(checked);
  }
  
  return (
    <main className=" flex w-screen h-screen">
      <aside className="h-full w-96 bg-darkGrey border-r border-white border-opacity-10 overflow-y-auto text-xs">
        <div className="p-5 flex-column w-full">
          <img src={logo} alt="" />
          <p className="text-mediumGrey tracking-widest leading-4 mt-14">ALL BOARDS (0)</p>
        </div>
        <div>
          <div className=" px-5 py-3 cursor-pointer flex gap-2 hover:bg-mainPurple rounded-r-3xl transition-colors mr-5">
            <Table size={16} color="#828FA3" weight="bold" />
            Platform Launcher
          </div>

          <div className="px-5 py-3 cursor-pointer flex gap-2 hover:bg-mainPurple rounded-r-3xl transition-colors mr-5">
            <Table size={16} color="#828FA3" weight="bold" />
            Marketing Plan
          </div>

          <div className="px-5 py-3 mr-5 cursor-pointer flex gap-2 hover:bg-mainPurpleHover hover:text-white rounded-r-3xl transition-colors">
            <Table size={16} color="#635FC7" weight="bold" />
            <p className="text-mainPurple">+ Create New Board</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 fixed bottom-28 h-12 w-60 ml-4 bg-veryDark rounded mb-5">
          <Sun size={18} color="#828fa3" weight="fill" />
          <Switch checked={isEnabled} onChange={handleToggle} />
          <MoonStars size={18} color="#828fa3" weight="bold" />
        </div>

        <div className="flex items-center fixed bottom-20 h-12 w-60 ml-4 gap-3 cursor-pointer">
          <EyeSlash size={16} color="#828fa3" />
          <p className="text-mediumGrey">Hide Sidebar</p>
        </div>
      </aside>
      <section className="w-full overflow-hidden">
        <header className="py-6 px-24 w-full bg-darkGrey flex items-center justify-between h-24">
          <p className="text-2xl">Teste</p>

          <div className="flex items-center gap-6">
            <button className="rounded-3xl bg-mainPurple px-6 py-3">
              + Add New Task
            </button>
            <DotsThreeOutlineVertical height={20} color="#828FA3" weight="bold" />
          </div>
        </header>
      </section>
    </main>
  )
}
