import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
     
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="flex">
      <div className="w-96 h-80 bg-green-500 rounded-md m-8 p-2 text-white font-bold  bg-cover bg-no-repeat"
      style={{ backgroundImage:"url(/assets/img.jpg)" }}
      >hello world</div>
      <Image
      src="/assets/jj.jpg"
      width={400}
      height={100}
      />
      <div>hello </div>
      </div>
    
    </div>
      

     
    </div>
  )
}
