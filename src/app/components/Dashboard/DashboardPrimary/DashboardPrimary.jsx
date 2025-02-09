import styles from "./DashboardPrimary.module.css";

const DashboardPrimary = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.leftSide}>
            <div className={styles.iconContainer1}>
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.cardTitle}>Today's Patients</p>
            <p className={styles.cardData}>1,482</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.leftSide}>
            <div className={styles.iconContainer2}>
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.cardTitle}>Today's Appointments</p>
            <p className={styles.cardData}>32</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.leftSide}>
            <div className={styles.iconContainer3}>
              <svg
                class="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.cardTitle}>Revenue</p>
            <p className={styles.cardData}>$24,890</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.leftSide}>
            <div className={styles.iconContainer4}>
              <svg
                class="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.cardTitle}>Completed Visits</p>
            <p className={styles.cardData}>892</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPrimary;
