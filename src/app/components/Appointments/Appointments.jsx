"use client";
import styles from "./Appointments.module.css";
import { useScroll } from "@/app/context/ScrollContext";

const Appointments = () => {
  const { sectionRefs } = useScroll();
  return (
    <>
      <div ref={sectionRefs.schedule} className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <h2 className={styles.sectionHeader}>Appointments</h2>
            <p className={styles.sectionDescription}>
              Manage and schedule patient appointments
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.searchButton}>
              <button className={styles.buttonElement}>New Appointment</button>
            </div>
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.calendarHeaderContainer}>
            <div className={styles.leftSide}>
              <div className={styles.switcherContainer}>
                <div className={styles.tab1}>Calendar</div>
                <div className={styles.tab2}>List</div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.monthSwitcher}>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <p>October 2023</p>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.calendarBody}>
            <div className={styles.weekdayContainer}>
              <p>Sun</p>
              <p>Mon</p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
              <p>Fri</p>
              <p>Sat</p>
            </div>
            <div className={styles.firstCalendarRow}>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>25</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>26</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>27</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>28</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>29</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.calendarFont}>30</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>1</p>
              </div>
            </div>
            <div className={styles.secondCalendarRow}>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>2</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>3</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>4</p>
                <div className={styles.statusIndicator}></div>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>5</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>6</p>
                <div className={styles.greenStatusIndicator}></div>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>7</p>
              </div>
              <div className={styles.calendarCard}>
                <p className={styles.lastCalendarCard}>8</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.todaysAppointment}>
          <div className={styles.headerAppointment}>
            <h3 className={styles.appListHeader}>Today's Appointments</h3>
            <div className={styles.appointmentCardContainer}>
              <div className={styles.appointmentCard}>
                <div className={styles.leftSide}>
                  <div className={styles.timeContainer}>
                    <p className={styles.patientTimeNumber}>09:00</p>
                    <p className={styles.patientTime}>AM</p>
                  </div>
                  <div className={styles.patientDetails}>
                    <div className={styles.patientAvatar}>
                      <img
                        className={styles.patientAvatarImage}
                        src="./avatar.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.patientName}>
                      <p className={styles.patientText}>Sarah Johnson</p>
                      <p className={styles.patientService}>General Checkup</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.pillContainer}>
                    <p className={styles.confirmContainer}>Confirmed</p>
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.appointmentCard}>
                <div className={styles.leftSide}>
                  <div className={styles.timeContainer}>
                    <p className={styles.patientTimeNumber}>11:30</p>
                    <p className={styles.patientTime}>AM</p>
                  </div>
                  <div className={styles.patientDetails}>
                    <div className={styles.patientAvatar}>
                      <img
                        className={styles.patientAvatarImage}
                        src="./avatar.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.patientName}>
                      <p className={styles.patientText}>Michael Brown</p>
                      <p className={styles.patientService}>Dental Cleaning</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rightSide}>
                  <div className={styles.pillContainer}>
                    <p className={styles.pendingContainer}>Pending</p>
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
