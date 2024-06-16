import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './EarnGraph.module.css';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
];

function EarnGraph() {
  const [timeframe, setTimeframe] = useState('Yearly');

  return (
    <div className={styles.earnStatsContainer}>
      <div className={styles.earnStatsCard}>
        <h3>Earning Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
           
            <Line type="linear" dataKey="uv" stroke="#0000ff" dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className={styles.buttonGroup}>
          <button className={timeframe === 'Weekly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Weekly')}>Weekly</button>
          <button className={timeframe === 'Monthly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Monthly')}>Monthly</button>
          <button className={timeframe === 'Yearly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Yearly')}>Yearly</button>
        </div>
      </div>

      <div className={styles.earnStatsCard}>
        <h3>View Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
           
            <Line type="linear" dataKey="pv" stroke="#00ff00" dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className={styles.buttonGroup}>
          <button className={timeframe === 'Weekly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Weekly')}>Weekly</button>
          <button className={timeframe === 'Monthly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Monthly')}>Monthly</button>
          <button className={timeframe === 'Yearly' ? styles.activeButton : styles.NotActive} onClick={() => setTimeframe('Yearly')}>Yearly</button>
        </div>
      </div>
    </div>
  );
}

export default EarnGraph;
