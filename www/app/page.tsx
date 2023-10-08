import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-24"></div>
      <div className="font-bold text-2xl max-w-md md:text-3xl">High-quality software for web developers.</div>
      <div className="h-24"></div>
      <div className="px-4 lg:max-w-screen-lg md:mx-auto">
        <h3 className="text-4xl font-light">Lj Fe Libraries</h3>
        {[
          {
            key: 'react-hook',
            title: 'react-hook',
          },
          {
            key: 'shared',
            title: 'shared',
          },
          {
            key: 'rc',
            title: 'react component',
          },
        ].map((item) => (
          <div
            key={item.key}
            className="rounded-lg p-4 md:p-8 transition-all bg-white dark:bg-gray-800 shadow-xl shadow-red-700/20 dark:shadow-lg dark:shadow-red-500/30 text-red-500 border-2 border-transparent hover:border-current"
          >
            <Link href={'/' + item.key}>{item.title}</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
