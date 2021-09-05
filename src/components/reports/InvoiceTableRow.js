import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";

const borderColor = "black";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "50px",
  },
  description: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingLeft: "5px",
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "left",
    paddingRight: 8,
    paddingLeft: "5px",
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
    textAlign: "left",
    paddingLeft: "5px",
  },
  amount: {
    width: "15%",
    paddingRight: 8,
    textAlign: "left",
    paddingLeft: "5px",
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item, idx) => {
    console.log(idx);
    if (idx === 14) {
      return (
        <View style={{ marginTop: "150px" }}>
          <InvoiceTableHeader />
          <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.qty}>{item.sno}</Text>
            <Text style={styles.description}>{item.desc}</Text>
            <Text style={styles.qty}>{item.qty}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
            <Text style={styles.amount}>
              {(item.qty * item.rate).toFixed(2)}
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.row} key={item.sno.toString()}>
        <Text style={styles.qty}>{item.sno}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.qty}>{item.qty}</Text>
        <Text style={styles.rate}>{item.rate}</Text>
        <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
      </View>
    );

    // } idx===7?
    //     <View style={{marginTop :"50px"}}>
    //     <InvoiceTableHeader />
    //     <View style={styles.row} key={item.sno.toString()}>
    //       <Text style={styles.qty}>{item.sno}</Text>
    //       <Text style={styles.description}>{item.desc}</Text>
    //       <Text style={styles.qty}>{item.qty}</Text>
    //       <Text style={styles.rate}>{item.rate}</Text>
    //       <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
    //     </View>
    //     </View>:
    //     <View style={styles.row} key={item.sno.toString()}>
    //       <Text style={styles.qty}>{item.sno}</Text>
    //       <Text style={styles.description}>{item.desc}</Text>
    //       <Text style={styles.qty}>{item.qty}</Text>
    //       <Text style={styles.rate}>{item.rate}</Text>
    //       <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
    //     </View>
  });
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
