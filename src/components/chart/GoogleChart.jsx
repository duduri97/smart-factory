import React from 'react'
import { Chart } from 'react-google-charts'

const GoogleChart = () => {
  return (
    <>
      <Chart
        chartType="ScatterChart"
        data={[
          ['Age', 'Weight'],
          [4, 5.5],
          [8, 12]
        ]}
        width={'100%'}
        height={'100%'}
        legendToggle
      />
    </>
  )
}

export default GoogleChart
