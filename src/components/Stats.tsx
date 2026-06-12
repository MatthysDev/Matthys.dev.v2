import React from 'react'

const STATS = [
    { value: '6+', label: 'years of React Native' },
    { value: '11+', label: 'clients shipped' },
    { value: '3×', label: 'App.js Conf' },
]

export default function Stats() {
    return (
        <dl className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                    <dd className="text-3xl font-bold tracking-tight">{stat.value}</dd>
                    <dt className="mt-1 text-sm text-stone-500 dark:text-white/50">
                        {stat.label}
                    </dt>
                </div>
            ))}
        </dl>
    )
}
