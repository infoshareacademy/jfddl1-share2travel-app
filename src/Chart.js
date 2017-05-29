import React from 'react';
import ReactHighcharts from 'react-highcharts';

// const weekday = new Array(7);
// const w = new Date();
// weekday[-6] = "Monday";
// weekday[-5] = "Tuesday";
// weekday[-4] = "Wednesday";
// weekday[-3] = "Thursday";
// weekday[-2] = "Friday";
// weekday[-1] = "Saturday";
// weekday[0] =  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// const currentDay = weekday[w.getDay()];

const config = {
  title: {
    text: 'Historia cen'
  },
  xAxis: {
    // categories: [weekday[w.getDay()-6],weekday[w.getDay()-5],weekday[w.getDay()-4],weekday[w.getDay()-3],weekday[w.getDay()-2],weekday[w.getDay()-1],currentDay]
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Cena'
    }
  },
  series: [{
    name: 'Ceny',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
  }]
};

class Chart extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 6});
  }

  render() {
    return <ReactHighcharts className='wykres' config={{...config, series: this.props.series}} ref="chart"></ReactHighcharts>;
  }
}
export default Chart;