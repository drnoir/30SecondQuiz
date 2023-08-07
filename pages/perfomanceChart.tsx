// performanceChart 
// For now doughtnut but do switching later (chart types)

import { Doughnut } from 'react-chartjs-2';

export default function performanceChart(arr) {
    return <div>
        <Doughnut data={arr} /> 
    </div>
  }
  