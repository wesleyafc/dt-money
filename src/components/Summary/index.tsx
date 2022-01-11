import React, { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";


export function Summary() {

    const { transactions } = useContext(TransactionsContext)
    console.log(transactions)
    return (
        <Container>

            <div>
                <header>
                    <p>incomes</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>outcome</p>
                    <img src={outcomeImg} alt="outcome" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

        </Container >
    )
}