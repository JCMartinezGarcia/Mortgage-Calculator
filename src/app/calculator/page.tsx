//directive to make this component a client rendered component
'use client'
//Imports and styles 
import Calculator from '@/components/calculator/Calculator';
import styles from './page.module.css';
//Page component for the calculator route
export default function Page() {
    // initial variables to be passed as props to the calculator component
    const initMort = 100000;
    const initRate = 5;
    const initYears = 30;

    return (
        //calcualtor page container
        <div className={styles.calculatorPage}>
            { /**calculator reusable component */}
            <Calculator
                mrt={initMort}
                rt={initRate}
                yrs={initYears}
            />
        </div>
    );
}