import React, { useState, useEffect } from "react";
import { Page, Document, Image, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../src/logo.svg";
import invoiceData from "../../data/invoice-data";
import { DataContext } from "../../context/dataContext";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    marginTop: "100px",
  },
});

async function createGroups(arr, numGroups) {
  if (arr.length < 12) {
    let a = [arr];
    return a;
  }
  if (arr.length > 12) {
    return new Array(2).fill("").map((_, i) => {
      if (i == 0) return arr.slice(i, (i + 1) * 14);
      else return arr.slice(i * 13, 40);
    });
  }
}
const Invoice = ({ invoice }) => {
  const [tables, setTables] = useState([]);

  useEffect(async () => {
    let tables1 = await createGroups(invoice.items, 20);
    setTables(tables1);
  }, []);

  // console.log(tables.length,invoice.items.length,createGroups(invoice.items, 20));

  return (
    <Document>
      {tables.map((x, idx) => {
        if (idx === 0 && idx === tables.length-1) {
          console.log(1);
          return (
            <Page size="A4" style={styles.page}>
              <Image style={styles.logo} src={logo} />
              <view style={{ textAlign: "right" }}>
                <InvoiceTitle title="Invoice" />
              </view>
              <InvoiceNo invoice={invoice} />
              <BillTo invoice={invoice} />
              <InvoiceItemsTable invoice={x} flag={true} />;
              {/* <InvoiceItemsTable invoice={x} flag={true} /> */}
              <InvoiceThankYouMsg />
            </Page>
          );
        }
        if (idx === 0 && tables.length>1) {
          console.log(2);

          return (
            <Page size="A4" style={styles.page}>
              <Image style={styles.logo} src={logo} />
              <view style={{ textAlign: "right" }}>
                <InvoiceTitle title="Invoice" />
              </view>
              <InvoiceNo invoice={invoice} />
              <BillTo invoice={invoice} />
              <InvoiceItemsTable invoice={x} flag={false} />;
              {/* <InvoiceItemsTable invoice={x} flag={true} /> */}
              {/* <InvoiceThankYouMsg /> */}
            </Page>
          );
        }
        if (idx > 0 && idx<tables.length-1) {
          console.log(3);

          return (
            <Page size="A4" style={styles.page}>
              <InvoiceItemsTable invoice={x} flag={false} />;
              {/* <InvoiceItemsTable invoice={x} flag={true} /> */}
              {/* <InvoiceThankYouMsg /> */}
            </Page>
          );
        }
        if (idx&& idx === tables.length-1) {
          console.log(4);

          return ( 
            <Page size="A4" style={styles.page}>
              <Image style={styles.logo} src={logo} />
              <view style={{ textAlign: "right" }}>
                <InvoiceTitle title="Invoice" />
              </view>
              <InvoiceNo invoice={invoice} />
              <BillTo invoice={invoice} />
              <InvoiceItemsTable invoice={x} flag={true} />;
              {/* <InvoiceItemsTable invoice={x} flag={true} /> */}
              <InvoiceThankYouMsg />
            </Page>
          );
        }
      })}
    </Document>
  );
};

export default Invoice;
