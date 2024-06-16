import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CollabSchedule.module.css';

function CollabSchedule() {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    const dateString = date.toLocaleDateString();
    const events = {
      '5/2/2024': { name: 'Burger King', color: 'red' },
      '5/3/2024': { name: 'Burger King', color: 'red' },
      '5/4/2024': { name: 'Burger King', color: 'red' },
      '5/5/2024': { name: 'Burger King', color: 'red' },
      '5/18/2024': { name: 'Burger King', color: 'blue' },
      '5/19/2024': { name: 'Burger King', color: 'blue' },
      '5/20/2024': { name: 'Burger King', color: 'blue' },
    };

    if (events[dateString]) {
      return <div className={`${styles.event} ${styles[events[dateString].color]}`}></div>;
    }
    return null;
  };

  return (
    <div className={styles.collabScheduleCard}>
      <h3>Collab Schedule</h3>
      <div className={styles.legend}>
        <span><span className={`${styles.dot} ${styles.red}`}></span> Burger King</span>
        <span><span className={`${styles.dot} ${styles.blue}`}></span> Burger King</span>
      </div>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
        next2Label={null}
        prev2Label={null}
        minDetail="month"
        className={styles.customCalendar}
      />
    </div>
  );
}

export default CollabSchedule;
