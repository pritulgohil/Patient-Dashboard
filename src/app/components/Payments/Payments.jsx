"use client";
import styles from "./Payments.module.css";
import { useScroll } from "@/app/context/ScrollContext";

const Payments = () => {
  const { sectionRefs } = useScroll();
  return (
    <div ref={sectionRefs.billing} className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <h2 className={styles.sectionHeader}>Billing & Payments</h2>
          <p className={styles.sectionDescription}>
            Manage patient invoices and payments
          </p>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchButton}>
            <button className={styles.buttonElement}>Create Invoice</button>
          </div>
        </div>
      </div>
      <div className={styles.billingCardsContainer}>
        <div className={styles.billingCard}>
          <div className={styles.firstRow}>
            <div class="p-2 bg-green-100 rounded-lg">
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className={styles.dateStatus}>This month</div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.priceContainer}>$24,890</div>
            <div className={styles.cardDescription}>Total Revenue</div>
          </div>
        </div>
        <div className={styles.billingCard}>
          <div className={styles.firstRow}>
            <div class="p-2 bg-yellow-100 rounded-lg">
              <svg
                class="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <div className={styles.dateStatus}>Pending</div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.priceContainer}>15</div>
            <div className={styles.cardDescription}>Unpaid Invoices</div>
          </div>
        </div>
        <div className={styles.billingCard}>
          <div className={styles.firstRow}>
            <div class="p-2 bg-blue-100 rounded-lg">
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className={styles.dateStatus}>Last 7 Days</div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.priceContainer}>$8,320</div>
            <div className={styles.cardDescription}>Recent Payments</div>
          </div>
        </div>
        <div className={styles.billingCard}>
          <div className={styles.firstRow}>
            <div class="p-2 bg-purple-100 rounded-lg">
              <svg
                class="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div className={styles.dateStatus}>Average</div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.priceContainer}>$450</div>
            <div className={styles.cardDescription}>Per Invoice</div>
          </div>
        </div>
      </div>
      <div className={styles.patientsTable}>
        <div className={styles.subSectionHeader}>
          <h3>Recent Invoices</h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr className={styles.tableHeaderRow}>
                <th className={styles.firstHeader}>Invoice ID</th>
                <th>Patient</th>
                <th>Service</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className={styles.actionHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>#INV001</p>
                  </div>
                </td>
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
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>General Checkup</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Oct 24, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>$150.00</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <div className={styles.statusPill}>
                      <p className={styles.statusText}>Paid</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.lastColumn}>
                    <button className={styles.editButton}>View</button>
                  </div>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>#INV002</p>
                  </div>
                </td>
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
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Dental Surgery</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>Oct 23, 2023</p>
                  </div>
                </td>
                <td>
                  <div className={styles.tableDataColumn}>
                    <p className={styles.tableDataFontSize}>$850.00</p>
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
                    <button className={styles.editButton}>View</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.paymentMethodContainer}>
        <div className={styles.subHeadingContainer}>
          <h3>Payment Methods</h3>
        </div>
        <div className={styles.paymentCardContainer}>
          <div className={styles.paymentLeft}>
            <div className={styles.cardIconContainer}>
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <p className={styles.fontBlack}>Credit Card</p>
              <p className={styles.fontGray}>**** **** **** 4242</p>
            </div>
          </div>
          <div className={styles.paymentRight}>
            <div className={styles.statusPill}>
              <p className={styles.statusText}>Default</p>
            </div>
          </div>
        </div>
        <div className={styles.paymentButtonContainer}>
          <button className={styles.paymentButton}>Add Payment Method</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
