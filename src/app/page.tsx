// Importing button variants from the UI button module
import { buttonVariants } from "@/components/ui/button"
//Import Next.js components and styles
import Link from 'next/link'
import Image from "next/image";
import landPic from '../../public/heyHome.jpg'
import styles from "./landing.module.css";
// Home component fo the landing page
export default function Home() {
  return (
    //container
    <div className={styles.landingContainer}>
      { /**landing page content */}
      <div className={styles.landingContent}>
        { /**logo image */}
        <Image
          src={landPic}
          alt="Picture of the company"
        />
        { /**title and description section */}
        <h1><strong>Mortgage Calculator</strong></h1>
        <p>Mortgage calculator helps you know the exact monthly payments you need to do based on a given mortage amount, anual rate, and loan years term</p>
        { /**link to the calculator page */}
        <Link href="calculator" className={buttonVariants({ variant: "outline" })}>Calculator</Link>
      </div>
    </div>
  )
}
