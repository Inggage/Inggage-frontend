import React from "react";
import styles from "./EarningCom.module.css";

function EarningCom() {
  return (
    <div className={styles.earningStatsCard}>
      <div className={styles.earningStats}>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Total earnings</p>
          <p className={styles.statValue}>Rs 3,90,018</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Monthly Earning</p>
          <p className={styles.statValue}>Rs 10,018</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Monthly Increase</p>
          <p className={styles.statValue}>
            <span className={styles.increaseArrow}>▲ 12.70</span> 
          </p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statLabel}>Collabs this month</p>
          <p className={styles.statValue}>12</p>
        </div>
      </div>
    </div>
  );
}

export default EarningCom;
