'use client';

import React from 'react';
import { Chart } from 'react-google-charts';

const StackedBarChart = ({ 
  data, 
  title = "Bar Chart", 
  width = "100%", 
  height = "500px",
  colors = ['#60A5FA', '#93C5FD', '#FCA5A5', '#FCD34D', '#FB923C'],
  hAxisTitle = "",
  vAxisTitle = ""
}) => {
  const options = {
    title: title,
    titleTextStyle: {
      fontSize: 18,
      bold: true,
      color: '#1F2937',
      fontName: 'Poppins'
    },
    chartArea: { 
      width: '60%',
      height: '70%'
    },
    isStacked: true,
    colors: colors,
    hAxis: {
      title: hAxisTitle,
      minValue: 0,
      textStyle: {
        fontName: 'Poppins',
        fontSize: 12
      },
      titleTextStyle: {
        fontName: 'Poppins',
        fontSize: 14,
        bold: true,
        italic: true
      }
    },
    vAxis: {
      title: vAxisTitle,
      textStyle: {
        fontName: 'Poppins',
        fontSize: 12
      },
      titleTextStyle: {
        fontName: 'Poppins',
        fontSize: 14,
        bold: true,
        italic: true
      }
    },
    legend: {
      position: 'right',
      alignment: 'center',
      textStyle: {
        fontName: 'Poppins',
        fontSize: 12
      }
    },
    backgroundColor: 'transparent',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </div>
  );
};

export default StackedBarChart;
