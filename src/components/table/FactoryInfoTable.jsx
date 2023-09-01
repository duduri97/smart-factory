import { Table } from 'react-bootstrap'

const style = {
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  },
  th: {
    color:'white'
  },
  td: {
    color:'white',
    backgroundColor:'#2a3f55'
  }
}

const FactoryInfoTable = () => {
  return (
    <>
      <div style={style.title}>공정정보</div>
      <Table className="table-dark table-bordered border-secondary" bordered responsive>
        <thead className='text-center'>
          <tr>
            <th style={style.th}>순번</th>
            <th style={style.th}>Process</th>
            <th style={style.th} colSpan={2}>In</th>
            <th style={style.th} colSpan={2}>Out</th>
          </tr>
          <tr>
            <th style={style.th} colSpan={2}></th>
            <th style={style.th}>Date</th>
            <th style={style.th}>Time</th>
            <th style={style.th}>Date</th>
            <th style={style.th}>Time</th>
          </tr>
        </thead>
        <tbody className='text-center'>
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
