import React from 'react'

// TODO -> color scheme to be perfected

const Button:React.FC = () => {
  return (
    <div>
      <a className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105 ml-3" href="/about">
        <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"></span>
        <span className="relative flex items-center justify-center gap-2">
          Content 
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
          </svg>
        </span>
      </a>
    </div>
  )
}

export default Button
