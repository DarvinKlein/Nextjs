import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rem libero atque dignissimos ratione, doloremque eius id, quas laudantium accusantium quo, temporibus facilis totam odit voluptatum vero ipsa aut beatae!</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rem libero atque dignissimos ratione, doloremque eius id, quas laudantium accusantium quo, temporibus facilis totam odit voluptatum vero ipsa aut beatae!</p>
      <Link href="ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
