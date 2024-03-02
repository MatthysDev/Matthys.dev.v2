import React from 'react'

type CardProps = {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className='bg-slate-50 p-24 rounded-md shadow-md'>{children}</div>
  )
}