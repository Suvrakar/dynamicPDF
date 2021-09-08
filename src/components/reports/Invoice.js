import React, { useState, useEffect } from "react";
import { Page, Document, Image, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../src/logo.svg";

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
  header:{
    marginTop:"90px"
  }
});

async function createGroups(arr, numGroups) {
  if (arr.length < 12) {
    let a = [arr];
    return a;
  }
  if (arr.length > 12) {
    let num= (Math.ceil((arr.length-14)/20))+1
    console.log("num2232131",num,);
    return new Array(2).fill("").map((_, i) => {
      if (i == 0) return arr.slice(i, (i + 1) * 14);
      else return arr.slice(14+((i-1)*20), 14+((i)*20)); 
      // else return arr.slice(i * 13, 40); 

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
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <view style={{ textAlign: "right" }}>
          <InvoiceTitle title="Invoice" />
        </view>
        <InvoiceNo invoice={invoice} />
        <BillTo invoice={invoice} />
        {tables.map((x, idx) => {
          if (idx == 0) {
            return <InvoiceItemsTable invoice={x} flag={false} />;
          }
          if (idx == tables.length - 1 && idx) {
            return (
              <div style={styles.header}>
                <InvoiceItemsTable invoice={x} flag={true} />
              </div>
            );
          } else
            return (
              <div style={styles.header}>
                <InvoiceItemsTable invoice={x} flag={false} />
              </div>);
            
        })}

        <InvoiceThankYouMsg />
        {/* <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        /> */}
      </Page>
    </Document>
  );
};

export default Invoice;
