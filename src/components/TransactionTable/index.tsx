import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Category</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>car rent</td>
                        <td className="deposit">R$12.000</td>
                        <td>rents</td>
                        <td>12/03/2021</td>
                    </tr>

                    <tr>
                        <td>snack</td>
                        <td className="withdraw">-R$2.000</td>
                        <td>food</td>
                        <td>15/03/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}