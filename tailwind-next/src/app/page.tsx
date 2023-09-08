export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-8 h-screen flex flex-col items-center text-center">
      <div className="max-w-app">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>

        <p className="mt-4 dark:text-slate-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>

        <button className="bg-sky-500 px-4 py-2 text-white rounded-md font-medium enabled:hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed mt-4 dark:bg-sky-400 dark:text-sky-950">
          Sign in
        </button>
      </div>
    </div>
  )
}
