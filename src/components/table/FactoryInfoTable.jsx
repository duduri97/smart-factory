import { Table } from 'react-bootstrap'

const style = {
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  },
  td: {
    color:'white'
  }
}

const FactoryInfoTable = () => {
  return (
    <>
      <div style={style.title}>공정정보</div>
      <Table className="table-dark table-bordered border-secondary" bordered responsive hover>
        <thead>
          <tr>
            <th style={style.td}>순번</th>
            <th style={style.td}>Process</th>
            <th style={style.td} colSpan={2}>In</th>
            <th style={style.td} colSpan={2}>Out</th>
          </tr>
          <tr>
            <th style={style.td} colSpan={2}></th>
            <th style={style.td}>Date</th>
            <th style={style.td}>Time</th>
            <th style={style.td}>Date</th>
            <th style={style.td}>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={style.td}>1</td>
            <td style={style.td}>IQC</td>
            <td style={style.td}>08/09</td>
            <td style={style.td}>09:10</td>
            <td style={style.td}>08/09</td>
            <td style={style.td}>14:20</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default FactoryInfoTable
