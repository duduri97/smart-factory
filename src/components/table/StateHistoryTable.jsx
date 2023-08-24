import { Table } from 'react-bootstrap'

import '../table/custom-table.scss'

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

const StateHistoryTable = () => {
  return (
    <>
      <div style={style.title}>상태이력조회</div>
      <Table className="table-dark table-bordered border-secondary"  bordered responsive hover>
        <thead>
          <tr>
            <th style={style.td}>이상 감지 일자</th>
            <th style={style.td} >내역</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={style.td}>23-05-01</td>
            <td style={style.td}>전력이상</td>
          </tr>
          <tr>
            <td style={style.td}>23-08-02</td>
            <td style={style.td}>전력이상</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default StateHistoryTable
