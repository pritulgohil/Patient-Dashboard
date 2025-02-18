import styles from "./Prescriptions.module.css";

const Prescriptions = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <h2 className={styles.sectionHeader}>Prescriptions</h2>
          <p className={styles.sectionDescription}>
            Manage and track patient prescriptions
          </p>
        </div>
        <div className={styles.headerRight}>
          <div className={`relative ${styles.searchContainer}`}>
            <input
              type="text"
              placeholder="Search prescriptions..."
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
      <div className={styles.patientsTable}>
        <div className={styles.subSectionHeader}>
          <h3>Active Prescriptions</h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr className={styles.tableHeaderRow}>
                <th className={styles.firstHeader}>Patient</th>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th className={styles.actionHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td>
                  <div className={styles.tableDataColumn}>
                    <div className={styles.rowleftSide}>
                      <img
                        className={styles.avatarImage}
                        src="./avatar.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.rowRightSide}>
                      <p className={styles.tableDataFontSize}>Sara Johnson</p>
                      <p className={styles.tableDataFontSize}>#PT0001</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Amoxicillin</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>500mg</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>3x daily</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Oct 24, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Oct 31, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <div className={styles.statusPill}>
                      <p className={styles.statusText}>Active</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.lastColumn}>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Cancel</button>
                  </div>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <div className={styles.tableDataColumn}>
                    <div className={styles.rowleftSide}>
                      <img
                        className={styles.avatarImage}
                        src="./avatar.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.rowRightSide}>
                      <p className={styles.tableDataFontSize}>Michael Brown</p>
                      <p className={styles.tableDataFontSize}>#PT0002</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Lisinopril</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>10mg</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>1x daily</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Oct 22, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Nov 22, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <div className={styles.statusPill}>
                      <p className={styles.statusText}>Active</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.lastColumn}>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.recentContainer}>
        <div className={styles.prescriptionContainer}>
          <div className={styles.subHeaderContainer}>
            <h3>Recent Prescriptions</h3>
          </div>
          <div className={styles.prescriptionCard}>
            <div className={styles.prescriptionHeader}>
              <h4 className={styles.prescriptionName}>Metformin</h4>
              <p className={styles.prescriptionDate}>Oct 15, 2023</p>
            </div>
            <div className={styles.dosageContainer}>
              <p>1000mg - 2x daily</p>
            </div>
            <div className={styles.patientName}>
              <div className={styles.avatar}>
                <img src="./avatar.png" alt="" />
              </div>
              <div className={styles.patient}>Emily Davis</div>
            </div>
          </div>
          <div className={styles.prescriptionCard}>
            <div className={styles.prescriptionHeader}>
              <h4 className={styles.prescriptionName}>Ibuprofen</h4>
              <p className={styles.prescriptionDate}>Oct 12, 2023</p>
            </div>
            <div className={styles.dosageContainer}>
              <p>400mg - As needed</p>
            </div>
            <div className={styles.patientName}>
              <div className={styles.avatar}>
                <img src="./avatar.png" alt="" />
              </div>
              <div className={styles.patient}>James Wilson</div>
            </div>
          </div>
        </div>
        <div className={styles.prescriptionContainer}>
          <div className={styles.subHeaderContainer}>
            <h3>Prescription Analytics</h3>
          </div>
          <div className={styles.analyticsCard}>
            <div className={styles.analyticsHeaderContainer}>
              <h4 className={styles.analyticsHeader}>
                Most Prescribed Medications
              </h4>
              <p className={styles.analyticsDate}>Last 30 days</p>
            </div>
            <div className={styles.medicineContainer}>
              <div className={styles.medicine}>
                <p>Amoxicillin</p>
                <p>75%</p>
              </div>
              <div className={styles.medicineBar}>
                <div className={styles.medicineActiveBar}></div>
              </div>
            </div>
            <div className={styles.medicineContainer}>
              <div className={styles.medicine}>
                <p>Lisinopril</p>
                <p>50%</p>
              </div>
              <div className={styles.medicineBar}>
                <div className={styles.medicineTwoActiveBar}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
