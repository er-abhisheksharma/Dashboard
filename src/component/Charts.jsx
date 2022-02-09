import {React, PureComponent, Fragment} from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line } from 'recharts';
import './Charts.css'

const data = [

    {
        "name": "2021-11-20",
        "Clicks": 58,
        "Conversion": 8,
        "Earning": 2
    },
    {
        "name": "2021-11-21",
        "Clicks": 48,
        "Conversion": 4,
        "Earning" :1
    },
    {
        "name": "2021-11-22",
        "Clicks": 66,
        "Conversion": 37,
        "Earning" :4
    },
    {
        "name": "2021-11-23",
        "Clicks": 52,
        "Conversion": 22,
        "Earning" :2
    },
    {
        "name": "2021-11-24",
        "Clicks": 23,
        "Conversion": 4,
        "Earning" :1
    },
    {
        "name": "2021-11-25",
        "Clicks": 40,
        "Conversion": 23,
        "Earning" :6
    },
    {
        "name": "2021-11-26",
        "Clicks": 44,
        "Conversion": 30,
        "Earning" :10
    },
    {
        "name": "2021-11-27",
        "Clicks": 24,
        "Conversion": 9,
        "Earning" :3
    },
    {
        "name": "2021-11-28",
        "Clicks": 42,
        "Conversion": 21,
        "Earning" :5
    },
    {
        "name": "2021-11-29",
        "Clicks": 42,
        "Conversion": 23,
        "Earning" :9
    },
    {
        "name": "2021-11-30",
        "Clicks": 50,
        "Conversion": 29,
        "Earning" :16
    },
    {
        "name": "2021-12-01",
        "Clicks": 61,
        "Conversion": 41,
        "Earning" :11
    },
    {
        "name": "2021-12-02",
        "Clicks": 50,
        "Conversion": 40,
        "Earning" :20
    },
    {
        "name": "2021-12-03",
        "Clicks": 41,
        "Conversion": 33,
        "Earning" :16
    },
    {
        "name": "2021-11-22",
        "Clicks": 66,
        "Conversion": 37,
        "Earning" :4
    },
    {
        "name": "2021-11-23",
        "Clicks": 52,
        "Conversion": 22,
        "Earning" :2
    },
    {
        "name": "2021-11-24",
        "Clicks": 23,
        "Conversion": 4,
        "Earning" :1
    },
    {
        "name": "2021-11-25",
        "Clicks": 40,
        "Conversion": 23,
        "Earning" :6
    },
    {
        "name": "2021-11-26",
        "Clicks": 44,
        "Conversion": 30,
        "Earning" :10
    },
    {
        "name": "2021-11-27",
        "Clicks": 24,
        "Conversion": 9,
        "Earning" :3
    },
    {
        "name": "2021-11-28",
        "Clicks": 42,
        "Conversion": 21,
        "Earning" :5
    },
    {
        "name": "2021-11-29",
        "Clicks": 42,
        "Conversion": 23,
        "Earning" :9
    },
    {
        "name": "2021-11-30",
        "Clicks": 50,
        "Conversion": 29,
        "Earning" :16
    },
    {
        "name": "2021-12-01",
        "Clicks": 61,
        "Conversion": 41,
        "Earning" :11
    },
    {
        "name": "2021-12-02",
        "Clicks": 50,
        "Conversion": 40,
        "Earning" :20
    },
    {
        "name": "2021-12-03",
        "Clicks": 41,
        "Conversion": 33,
        "Earning" :16
    }
    
]
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={10} y={0} dy={6} textAnchor="end" fill="#666666" transform="rotate(-15)">
          {payload.value}
        </text>
      </g>
    );
  }
}

function Charts() {
    
  return(
      <Fragment  >
        <div className="frag">
            <div className='chartheight'>       
            <span id="charttext">Statics</span>  
            <ComposedChart width={800} height={350} data={data} className="height">
            <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
            <YAxis className='height'/>
            <Tooltip/>
            <Legend iconSize={20} width={120} layout='vertical' verticalAlign='middle' align="right"/>
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="Clicks" barSize={20} fill="#c5c7c7" /><Bar dataKey="Conversion" barSize={20} fill="#3684eb" /><Bar dataKey="Earning" barSize={20} fill="#5c9632" />
            <Line type="monotone" dataKey="Clicks" stroke="#aceaf2" />
            </ComposedChart>
        </div>
        <div className='chartside'>
            <div className="charttext text"><span className="chartsidetext">CLICKS</span><HelpOutlineIcon/><br/>98,335</div>
            <div className="charttext"><span className="chartsidetext">CONVERSIONS</span><HelpOutlineIcon/><br/>32</div>
            <div className="charttext"><span className="chartsidetext">EARNING</span><HelpOutlineIcon/><br/>$851.30</div>

        </div>
        </div>
     </Fragment>
  )
}

export default Charts;
