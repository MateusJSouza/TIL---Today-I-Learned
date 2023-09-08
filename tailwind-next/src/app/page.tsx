export default function Home() {
  return (
    <div className="bg-slate-800 text-slate-100 p-4 h-screen">
      <h1 className="font-bold text-5xl flex items-center gap-2 before:w-0.5 before:h-8 before:bg-sky-500">
        Hello World
      </h1>
      <strong>
        Hello World
      </strong>
      <h2>Hello World</h2>

      <button className="bg-sky-500 px-4 py-2 rounded-md font-medium enabled:hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed mt-4">
        Sign in
      </button>
    </div>
  )
}
