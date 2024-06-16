import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './CollabStats.module.css';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#FF0000', '#800080', '#00FFFF'];

const CollabStats = () => {
  return (
    <div className={styles.collabStatsCard}>
      <h3>Collab Stats</h3>
      <div className={styles.chartsContainer}>
        <div className={styles.chartItem}>
          <h4>Earnings</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartItem}>
          <h4>Views</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartItem}>
          <h4>No. of Collabs</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.collabDetails}>
        <div className={styles.collabItem}>
    
          <span className={styles.dot} style={{ backgroundColor: '#800080' }}></span>
          <div className={styles.collabItemContent}>
            <h5>Amazon</h5>
            <p>Rs 3,90,018</p>
            <p>2 collabs</p>
            <p>2.4 Lakh views</p>
          </div>
        </div>
        <div className={styles.collabItem}>
          <span className={styles.dot} style={{ backgroundColor: '#FF0000' }}></span>
          <div className={styles.collabItemContent}>
            <h5>Burger King</h5>
            <p>Rs 3,90,018</p>
            <p>2 collabs</p>
            <p>2.4 Lakh views</p>
          </div>
        </div>
        <div className={styles.collabItem}>
          <span className={styles.dot} style={{ backgroundColor: '#00FFFF' }}></span>
          <div className={styles.collabItemContent}>
            <h5>Sephora</h5>
            <p>Rs 3,90,018</p>
            <p>2 collabs</p>
            <p>2.4 Lakh views</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default CollabStats;
