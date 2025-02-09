import styles from "./PatientList.module.css";
const PatientList = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <h2 className={styles.sectionHeader}>Patients List</h2>
            <p className={styles.sectionDescription}>
              Manage and view patient information
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={`relative ${styles.searchContainer}`}>
              <input
                type="text"
                placeholder="Search patients..."
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
              <button>Add New Patient</button>
            </div>
          </div>
        </div>
        <div className={styles.dropDownContainer}>
          <select className={styles.dropDown}>
            <option value="">All Patients</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
          </select>
          <select className={styles.dropDown}>
            <option value="">All Departments</option>
            <option value="">Cardiology</option>
            <option value="">Neurology</option>
            <option value="">Dental</option>
          </select>
        </div>
        <div className={styles.patientsTable}>
          <div style={{ overflowX: "auto" }}>
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr className={styles.tableHeaderRow}>
                  <th className={styles.firstHeader}>Patient</th>
                  <th>ID</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Last Visit</th>
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
                        <p className={styles.tableDataFontSize}>
                          sarah.j@email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>#PT0001</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>32</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>
                        +1 234-567-8901
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>Oct 24, 2023</p>
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
                      <button className={styles.deleteButton}>Delete</button>
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
                        <p className={styles.tableDataFontSize}>
                          Michael Brown
                        </p>
                        <p className={styles.tableDataFontSize}>
                          m.brown@email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>#PT0002</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>45</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>
                        +1 234-567-8902
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>Oct 22, 20233</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <div className={styles.pendingStatusPill}>
                        <p className={styles.pendingStatusText}>Pending</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.lastColumn}>
                      <button className={styles.editButton}>Edit</button>
                      <button className={styles.deleteButton}>Delete</button>
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
                        <p className={styles.tableDataFontSize}>Emily Davis</p>
                        <p className={styles.tableDataFontSize}>
                          emily.d@email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>#PT0003</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>28</p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>
                        +1 234-567-8903
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tableDataColumn}>
                      <p className={styles.tableDataFontSize}>Oct 20, 2023</p>
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
                      <button className={styles.deleteButton}>Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.tableFooter}>
              <div className={styles.entriesContainer}>
                <p>Showing 1 to 3 of 50 entries</p>
              </div>
              <div className={styles.paginationContainer}>
                <div className={styles.buttonContainer}>Previous</div>
                <div className={styles.oneContainer}>1</div>
                <div className={styles.buttonContainer}>2</div>
                <div className={styles.buttonContainer}>3</div>
                <div className={styles.buttonContainer}>Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientList;
