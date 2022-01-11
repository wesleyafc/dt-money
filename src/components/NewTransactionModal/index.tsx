import { FormEvent, useState, useContext, } from 'react'
import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext'
import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({ isOpen, onRequestClose }: NewTrasactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({
            title,
            amount,
            category,
            type,
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>new transactions</h2>

                <input
                    placeholder="name"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Value"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"


                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">save</button>

            </Container>
        </Modal>
    )
}