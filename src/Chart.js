import React from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  title: {
    text: 'Historia cen'
  },
  xAxis: {
    categories: ['Pon','Wt','Śr','Czw','Pt','Sob','Ndz']
  },
  yAxis: {
    title: {
      text: 'Cena'
    }
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
  }]
};

class Chart extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 6, y: 5});
  }

  render() {
    return <ReactHighcharts className='wykres' config={{...config, series: this.props.series}} ref="chart"></ReactHighcharts>;
  }
}
export default Chart;