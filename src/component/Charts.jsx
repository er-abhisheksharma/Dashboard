import {React, PureComponent, Fragment} from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line, ResponsiveContainer } from 'recharts';
import './Charts.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
        "name": "2021-12-04",
        "Clicks": 51,
        "Conversion": 37,
        "Earning" :20
    },
    {
        "name": "2021-12-05",
        "Clicks": 71,
        "Conversion": 56,
        "Earning" :17
    },
    {
        "name": "2021-12-06",
        "Clicks": 40,
        "Conversion": 24,
        "Earning" :4
    },
    {
        "name": "2021-12-07",
        "Clicks": 56,
        "Conversion": 39,
        "Earning" :8
    }
    
]
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={-5} y={5} dy={0} textAnchor="end"  fill="#666666" transform="rotate(-45)">
          {payload.value}
        </text>
      </g>
    );
  }
}

function Charts() {
    const options = {
        maintainAspectRatio: false,
        responsive: true,	// Don't maintain w/h ratio
      }
    
  return(
      <Fragment id="flex" >
        <div className="frag">
            <div className='chartheight'> 
            <select name="forma" className='forma' onchange="location = this.value;">
            <option value="">November 11, 2020 - December 7, 2020</option>
            <option value="">December 8, 2020 - December 21, 2020</option>
            <option value="">December 22, 2020 - January 07, 2021</option>
            </select> <button className="btn">Show</button><br/>
                  
            <span id="charttext">Statistics</span>
            <ResponsiveContainer width="99%" height={400} >
 
            <ComposedChart data={data} options={options}  margin={{ top: 20, right: 30, left: 0, bottom: 50 }} barCategoryGap={0} barGap={0}className="height">
            <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} height={60} padding={{ left: 10 }}/>
            <YAxis label={{ value: 'Statistics', angle: -90, position: 'insideLeft'}}/>
            <Tooltip/>
            <Legend iconSize={20} width={120} layout='vertical' verticalAlign='middle' align="right"/>
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="Clicks" stroke="#aceaf2"/>
            <Bar dataKey="Clicks" barSize={10}fill="#c5c7c7" /><Bar dataKey="Conversion" barSize={10} fill="#3684eb" /><Bar dataKey="Earning" barSize={10} fill="#5c9632" />
            
            </ComposedChart>
            </ResponsiveContainer> 
        </div>
        <div className='chartside'>
            <div className="charttext"><span className="chartsidetext">CLICKS</span><HelpOutlineIcon/><br/>98,335</div>
            <div className="charttext"><span className="chartsidetext">CONVERSIONS</span><HelpOutlineIcon/><br/>32</div>
            <div className="charttext"><span className="chartsidetext">EARNING</span><HelpOutlineIcon/><br/>$851.30</div>

        </div>
        </div>
     </Fragment>
  )
}

export default Charts;
