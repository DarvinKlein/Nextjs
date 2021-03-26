import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rem libero atque dignissimos ratione, doloremque eius id, quas laudantium accusantium quo, temporibus facilis totam odit voluptatum vero ipsa aut beatae!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rem libero atque dignissimos ratione, doloremque eius id, quas laudantium accusantium quo, temporibus facilis totam odit voluptatum vero ipsa aut beatae!</p>
      <Link href="ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
