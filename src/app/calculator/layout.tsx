import Navbar from "@/components/navbar/Navbar"
import styles from './layout.module.css'

export default function CalculatorLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.calculatorLayout}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Navbar />
            {children}
        </section>
    )
}