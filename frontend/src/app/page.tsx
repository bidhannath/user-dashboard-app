'use client'
import Login from '@/components/Login'

export default function Home() {
  return (
    <section className='flex h-screen overflow-hidden px-5 py-5'>
      <div className='text-black dark:text-white'>
        <h1 className='text-primary'>User Dashboard App</h1>
        <p>The User Dashboard has the light and dark theme features. Check out the theme toggle button on the top right corner.</p>
      </div>
    </section>
  )
}
