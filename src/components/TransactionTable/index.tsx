import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    })
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
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