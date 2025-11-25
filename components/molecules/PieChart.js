'use client';

import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ 
  data, 
  title = "Pie Chart", 
  width = "100%", 
  height = "350px",
  colors = ['#93C5FD', '#5EEAD4'],
  showLegend = true,
  legendPosition = 'right'
}) => {
  const options = {
    title: title,
    titleTextStyle: {
      fontSize: 18,
      bold: true,
      color: '#1F2937',
      fontName: 'Poppins'
    },
    colors: colors,
    legend: {
      position: legendPosition,
      alignment: 'center',
      textStyle: {
        fontSize: 14,
        fontName: 'Poppins'
      }
    },
    pieSliceText: 'value',
    pieSliceTextStyle: {
      color: 'white',
      fontSize: 14,
      fontName: 'Poppins'
    },
    chartArea: {
      width: '90%',
      height: '80%'
    },
    backgroundColor: 'transparent',
    is3D: false,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </div>
  );
};

export default PieChart;
