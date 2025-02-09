import styles from "./DashboardSecondary.module.css";

const DashboardSecondary = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeaderContainer}>
            <h2 className={styles.cardHeader}>Recent Patients</h2>
          </div>
          <div className={styles.cardDataContainer}>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.avatarContainer}>
                  <img src="./avatar.png" alt="" />
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>Sara Johnson</p>
                  <p className={styles.patientNote}>General Checkup</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <p className={styles.time}>2 hours</p>
              </div>
            </div>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.avatarContainer}>
                  <img src="./avatar.png" alt="" />
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>Sara Johnson</p>
                  <p className={styles.patientNote}>General Checkup</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <p className={styles.time}>2 hours</p>
              </div>
            </div>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.avatarContainer}>
                  <img src="./avatar.png" alt="" />
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>Sara Johnson</p>
                  <p className={styles.patientNote}>General Checkup</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <p className={styles.time}>2 hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeaderContainer}>
            <h2 className={styles.cardHeader}>Upcoming Appointments</h2>
          </div>
          <div className={styles.cardDataContainer}>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.timeContainer}>
                  <p className={styles.timeStamp}>10:00</p>
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>Robert Wilson</p>
                  <p className={styles.patientNote}>Dental Cleaning</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.statusPill}>
                  <p className={styles.statusText}>Confirmed</p>
                </div>
              </div>
            </div>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.timeContainer}>
                  <p className={styles.timeStamp}>11:30</p>
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>Lisa Anderson</p>
                  <p className={styles.patientNote}>Follow-up</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.pendingStatusPill}>
                  <p className={styles.pendingStatusText}>Pending</p>
                </div>
              </div>
            </div>
            <div className={styles.DataEntryContainer}>
              <div className={styles.leftSide}>
                <div className={styles.timeContainer}>
                  <p className={styles.timeStamp}>14:15</p>
                </div>
                <div className={styles.patientDetails}>
                  <p className={styles.patientName}>James Taylor</p>
                  <p className={styles.patientNote}>Consultation</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.statusPill}>
                  <p className={styles.statusText}>Confirmed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSecondary;
