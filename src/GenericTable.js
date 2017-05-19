import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
// import Comp from "./Comp";
// import Comp from './Comp'



const GenericTable = (props) => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            {
                props.config.map(
                    (item, index) => <th key={index}>{item.label}</th>
                )
            }
        </tr>
        </thead>
        <tbody>
        {
            props.data.map(
                dataItem => (
                    <tr key={dataItem.id}>
                        {
                            props.config.map(
                                configItem => configItem.name
                            ).map(
                                (name, index) => (
                                    <td key={index}>
                                        {
                                            props.linked === true ?
                                                <Link to={'/Comp'}>
                                                    {dataItem[name]}
                                                </Link> :
                                                dataItem[name]
                                        }
                                    </td>
                                )
                            )
                        }
                    </tr>
                )
            )
        }
        </tbody>
    </Table>
)

export default GenericTable