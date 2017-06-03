import React from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  title: {
    text: 'Historia cen'
  },
  xAxis: {
  type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Cena'
    },
  },
  series: [{
    name: 'ceny',
  }]
};

class Chart extends React.Component {

  render() {
    return <ReactHighcharts className='wykres' config={{...config, series: this.props.series}} ref="chart"></ReactHighcharts>;
  }
}
export default Chart;