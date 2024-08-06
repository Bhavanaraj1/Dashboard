import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./BarGraph.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
  const data = {
    labels: [5,7,9,10,11,12,13,14,15,16,17,18,19,20, 21,22, 23,24,25,26,27],
    datasets: [
      {
        label: 'revenue',
        data: [2000, 3000, 5000, 2000, 6000, 4000,2000,10000, 5000, 3000, 5000,
           10000, 11000, 4000,6000, 5000, 7000, 13000, 10000,4000, 5000, 10000, 15000, 10000],
        backgroundColor: '#065885c6 ',
        borderRadius:20,
        barPercentage:0.6,
    
      },
    ],
  };

  const options = {
    scales: {
        x: {
            ticks: {
              color: 'white',
              padding: 5,
              autoSkip: true,
              autoSkipPadding:7,
              borderRadius:9,
            },
            grid: {
              drawTicks: false,
              display:false
            },
          },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          color:'white',
          padding:10,
          callback: function(value) {
            return value === 0 ? value : value/1000 + 'k';
          },
        },
      },
    },
  };

  return (
  <div className = "bar-graph">
    <Bar data={data} options={options} />
  </div>
  );
}

export default BarGraph;
