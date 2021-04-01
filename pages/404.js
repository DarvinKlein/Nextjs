import Link from 'next/link'
const Notfound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooooopss.....</h1>
            <h2>Something went wrong</h2>
            <p>Go back to <Link href="/"><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default Notfound;