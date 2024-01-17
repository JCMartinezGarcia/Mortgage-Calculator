// Importing button variants from the UI button module
import { buttonVariants } from '../ui/button';
//Import Next.js components, images and styles
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/nav-logo.jpg'
import styles from './Navbar.module.css';

//Navbar reusable component
const Navbar = () => {
    return (
        //navbar container
        <nav className={styles.navbarContainer}>
            { /**logo section content */}
            <ul className={styles.logoContent}>
                <li>
                    { /**image logo */}
                    <Image
                        src={logo}
                        alt='Picture of the logo'
                    />
                </li>
            </ul>
            { /**button section content */}
            <ul className={styles.buttonContent}>
                <li>
                    { /**link to go back to landing page */}
                    <Link
                        href="../"
                        className={buttonVariants({ variant: "outline" })}
                    >
                        Exit
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;