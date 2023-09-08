import { cn } from "../../../utils/cn";

export function Add() {

  return (
    <div className={cn(
      'relative flex justify-start items-center w-full border-b h-14 first:rounded-tl-lg',
      'mb-4 rounded-md border-transparent bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-900'
    )}>
      <button
        onClick={() => { }}
        style={{ minWidth: '20px', minHeight: '20px' }}
        className="rounded-full border-gray-300 border ml-4"
      ></button>
      <input
        type="text"
      />
    </div>
  )
}