import { randomNeonColor } from '@/utils/randomNeonColor';
import React, { useEffect } from 'react'

type CardProps = {
  children: React.ReactNode
  withNeon?: boolean
  style?: string
}

export default function Card({ children, style, withNeon }: CardProps) {
  useEffect(() => {
    randomNeonColor('imageNeon');
  }, []);
  let withNeonClass = withNeon ? 'imageNeon' : ''
  return (
    <div className={`bg-slate-50 rounded-md shadow-md text-black m-4 ${withNeonClass} ${style}`}>{children}</div>
  )
}