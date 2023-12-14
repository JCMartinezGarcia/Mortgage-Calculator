import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { useState, ChangeEvent, useEffect } from "react";
import styles from './Calculator.module.css';

/**
 * Props for the Calculator component
 */
interface CalculatorProps {
    mrt: number;
    rt: number;
    yrs: number;
}

/**
 * Calculator component for calculating monthly mortgage payments
 * @param {CalculatorProps} props - The component props.
 * @returns {React.FC} - The rendered Calculator component.
 */
const Calculator: React.FC<CalculatorProps> = ({ mrt, rt, yrs }) => {
    // State for input values and calculated payment
    const [values, setValues] = useState({
        mortgage: mrt,
        rate: rt,
        years: yrs,
    });

    const [payment, setPayment] = useState<number>(0.00);

    /**
      * Effect to recalculate monthly payment when input values change
    */
    useEffect(() => {
        calculateMPayment();
    }, [values]);

    /**
       * Function to calculate monthly mortgage payment
    */
    function calculateMPayment() {
        const { mortgage, rate, years } = values;
        const monthlyInterest = (rate / 100) / 12;
        const months = years * 12;
        const monthlyPayments = mortgage * (monthlyInterest * ((1 + monthlyInterest) ** months)) / ((1 + monthlyInterest) ** months - 1);
        setPayment(monthlyPayments);
    }

    /**
     * Function to handle input value changes
     * @param {ChangeEvent<HTMLInputElement>} e - The change event.
    */

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        let nValue: number = +value;
        if (nValue === 0) {
            nValue = 1;
            alert('The minimun value is 1');
        }
        setValues({
            ...values,
            [name]: nValue
        });

    }
    // Render the Calculator component
    return (
        <Card className={styles.calculatorContainer}>
            <CardHeader>
                <CardTitle>Mortgage Calculator</CardTitle>
                <CardDescription>calculate monthly mortgage payment</CardDescription>
            </CardHeader>
            <CardContent className={styles.calculatorContent}>
                {/* ... (Input fields for amount, rate, and years) */}
                <div>
                    <label htmlFor="amount"><strong>Amount</strong></label>
                    <small>amount of the mortage</small>
                    <Input
                        id="amount"
                        min={1}
                        name="mortgage"
                        type="number"
                        value={values.mortgage}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="rate"><strong>Rate</strong></label>
                    <small>annual interest rate %</small>
                    <Input
                        id="rate"
                        min={1}
                        name="rate"
                        type="number"
                        value={values.rate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="years"><strong>Years</strong></label>
                    <small>loan terms in years</small>
                    <Input
                        id="years"
                        min={1}
                        name="years"
                        type="number"
                        value={values.years}
                        onChange={handleChange}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <h1><strong>Monthly Payment:</strong></h1>
                <span>&nbsp;{payment.toFixed(2)}</span>
            </CardFooter>
        </Card>
    );
}
export default Calculator;