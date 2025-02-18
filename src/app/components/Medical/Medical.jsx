"use client";
import styles from "./Medical.module.css";
import { useScroll } from "@/app/context/ScrollContext";

const Medical = () => {
  const { sectionRefs } = useScroll();
  return (
    <div ref={sectionRefs.medical} className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <h2 className={styles.sectionHeader}>Medical Records</h2>
          <p className={styles.sectionDescription}>
            View and manage patient medical records
          </p>
        </div>
        <div className={styles.headerRight}>
          <div className={`relative ${styles.searchContainer}`}>
            <input
              type="text"
              placeholder="Search records..."
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${styles.searchInput}`}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className={styles.searchButton}>
            <button>Add Record</button>
          </div>
        </div>
      </div>
      <div className={styles.recordContainer}>
        <div className={styles.patientDetails}>
          <div className={styles.leftSide}>
            <div className={styles.avatarContainer}>
              <img className={styles.avatarImage} src="./avatar.png" alt="" />
            </div>
            <div className={styles.patientNameContainer}>
              <p>Sarah Johnson</p>
              <p>Patient ID: #PT0001</p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <button class="flex items-center text-blue-600 hover:text-blue-800">
              <svg
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Export Records
            </button>
          </div>
        </div>
        <div className={styles.patientCardContainer}>
          <div className={styles.card}>
            <p className={styles.patientSmall}>Age</p>
            <p className={styles.patientLarge}>32 years</p>
          </div>
          <div className={styles.card}>
            <p className={styles.patientSmall}>Blood Type</p>
            <p className={styles.patientLarge}>A+</p>
          </div>
          <div className={styles.card}>
            <p className={styles.patientSmall}>Last Visit</p>
            <p className={styles.patientLarge}>Oct 24, 2023</p>
          </div>
        </div>
      </div>
      <div className={styles.historyContainer}>
        <div className={styles.subHeaderContainer}>
          <h3 className={styles.subHeader}>Medical History</h3>
        </div>
        <div className={styles.historyCardContainer}>
          <div className={styles.historyLeft}>
            <div className={styles.circle}></div>
            <div className={styles.verticalLine}></div>
          </div>
          <div className={styles.historyRight}>
            <div className={styles.cardLeft}>
              <div className={styles.cardHeader}>
                <h3>General Checkup</h3>
                <p className={styles.cardDate}>Oct 24, 2023</p>
              </div>
              <div className={styles.cardDescription}>
                <p className={styles.descriptionElement}>
                  Routine health examination and blood pressure check.
                </p>
              </div>
              <div className={styles.patientPill}>
                <div className={styles.bluePill}>BP: 120/80</div>
                <div className={styles.greenYellow}>Normal</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.historyCardContainer}>
          <div className={styles.historyLeft}>
            <div className={styles.circle}></div>
            <div className={styles.verticalLine}></div>
          </div>
          <div className={styles.historyRight}>
            <div className={styles.cardLeft}>
              <div className={styles.cardHeader}>
                <h3>Dental Procedure</h3>
                <p className={styles.cardDate}>Sep 15, 2023</p>
              </div>
              <div className={styles.cardDescription}>
                <p className={styles.descriptionElement}>
                  Cavity filling and dental cleaning performed.
                </p>
              </div>
              <div className={styles.patientPill}>
                <div className={styles.yellowPill}>Follow-up Required</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.historyCardContainer}>
          <div className={styles.historyLeft}>
            <div className={styles.lastCircle}></div>
          </div>
          <div className={styles.historyRight}>
            <div className={styles.cardLeft}>
              <div className={styles.cardHeader}>
                <h3>General Checkup</h3>
                <p className={styles.cardDate}>Oct 24, 2023</p>
              </div>
              <div className={styles.cardDescription}>
                <p className={styles.descriptionElement}>
                  Complete physical examination and lab work.
                </p>
              </div>
              <div className={styles.patientPill}>
                <div className={styles.bluePill}>BP: 120/80</div>
                <div className={styles.greenYellow}>Normal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.documentsReportsContainer}>
        <div className={styles.subHeaderContainer}>
          <h3 className={styles.subHeader}>Documents & Reports</h3>
        </div>
        <div className={styles.reportsCardContainer}>
          <div className={styles.reportCard}>
            <div className={styles.reportCardLeft}>
              <div className={styles.reportLogo}>
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div className={styles.reportDetails}>
                <p className={styles.reportName}>Blood Test Results</p>
                <p className={styles.reportDate}>Oct 24, 2023</p>
              </div>
            </div>
            <div className={styles.reportCardRight}>
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.reportCard}>
            <div className={styles.reportCardLeft}>
              <div className={styles.reportLogo}>
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div className={styles.reportDetails}>
                <p className={styles.reportName}>Blood Test Results</p>
                <p className={styles.reportDate}>Oct 24, 2023</p>
              </div>
            </div>
            <div className={styles.reportCardRight}>
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
