import Link from 'next/link'

const Navbar = () => {
    return (  
        <div>
            <nav>
                <div className="logo">
                    <h1>Ninja List</h1>
                </div>
                <Link href="\"><a>Home</a></Link>
                <Link href="\about"><a>About</a></Link>
                <Link href="\ninjas"><a>Ninja Listing</a></Link>
            </nav>
        </div>
    );
}
 
export default Navbar;