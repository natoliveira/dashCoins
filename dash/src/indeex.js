import React from 'react'

const Table = ({ data }) => {
    const Keys = Object.Keys(data[0])
    return (
        <table>

            <thead>
                <tr>
                   {
                       keys.map(key => <th>{Key}</th>)
                   }
                    <th>Price</th>


                </tr>


            </thead>
            <tbody>
                <tr>
                    <td>Data</td>
                </tr>


            </tbody>

        </table>
    )
}

export default Table