import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className='bg-slate-100 p-24 rounded-md shadow-md'>{children}</div>
  )
}