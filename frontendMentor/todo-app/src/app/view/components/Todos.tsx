import { useRef } from 'react'

import { Todo } from './Todo'

import sunIcon from '../../../assets/icons/sun.svg'
import moonIcon from '../../../assets/icons/moon.svg'

export function Todos() {
  const inputRef = useRef(null)

  return (
    <div className="min-h-full bg-[#171823]">
      <div className="bg-header-image bg-cover bg-no-repeat from-blue-500 to-purple-500 h-[280px] w-full">
        <h1>TODOS</h1>
        <img src={moonIcon} alt="" />
      </div>

      <div className="">
        <div>svg</div>
        <form>
          <input type="text" ref={inputRef} placeholder="Create a new todo..." />
          <button type="submit" hidden></button>
        </form>
      </div>

      <div className="">
        <Todo />

        <footer className="flex items-center justify-between">
          <p>0 items left</p>

          <div className="flex items-center gap-[19px]">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>

          <p>Clear Completed</p>
        </footer>
      </div>
    </div>
  )
}