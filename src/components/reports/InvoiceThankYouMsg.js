import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reportTitle: {
    fontSize: 15,
    fontWeight: '80px',
    textAlign: "center",
  },
  authorizeContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },
  authorizeContainer1: {
    flexDirection: "column",
    marginTop: 12,
    width: "120",
    borderTop: "1px solid black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  authorizeContainer2: {
    flexDirection: "column",
    width: "120",

    borderTop: "1px solid black",
    alignItems: "center",
    marginTop: 12,
    justifyContent: "flex-end",
  },
  reportTitleTop:{
    fontSize: 12,
    fontWeight: 'bold',
 
  },
});

const InvoiceThankYouMsg = () => (
  <View>
    <View style={styles.authorizeContainer}>
      <View style={styles.authorizeContainer1}>
        <Text style={{ textAlign: "center" }}>Authorized by</Text>
      </View>
      <View style={styles.authorizeContainer2}>
        <Text style={{ textAlign: "center" }}>Received By</Text>
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.reportTitleTop}>Make all checks payble to the company name</Text>
    </View>
    <View style={styles.titleContainer2}>
      <Text style={styles.reportTitle}>Thank you for your business</Text>
    </View>
  </View>
);

export default InvoiceThankYouMsg;
