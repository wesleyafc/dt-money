import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({ isOpen, onRequestClose }: NewTrasactionModalProps) {
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

            <Container>
                <h2>new transactions</h2>

                <input
                    placeholder="name" />

                <input
                    type="number"
                    placeholder="Value" />

                <input
                    placeholder="category" />

                <button type="submit">save</button>

            </Container>
        </Modal>
    )
}