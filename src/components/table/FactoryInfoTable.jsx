import { Table } from 'react-bootstrap'

const style = {
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  }
}

const FactoryInfoTable = () => {
  return (
    <>
      <div style={style.title}>공정정보</div>
      <Table className="table-bordered border-info" bordered responsive hover>
        <thead className="table-dark">
          <tr>
            <th>순번</th>
            <th>Process</th>
            <th colSpan={2}>In</th>
            <th colSpan={2}>Out</th>
          </tr>
          <tr>
            <th colSpan={2}></th>
            <th>Date</th>
            <th>Time</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="table-light">
          <tr>
            <td>1</td>
            <td>IQC</td>
            <td>08/09</td>
            <td>09:10</td>
            <td>08/09</td>
            <td>14:20</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default FactoryInfoTable
