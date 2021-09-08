import React, { useContext } from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceTableBlankSpace from "./InvoiceTableBlankSpace";
import InvoiceTableFooter from "./InvoiceTableFooter";
import invoiceData from "../../data/invoice-data";
import { DataContext } from "../../context/dataContext";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "black",
  },
});

const InvoiceItemsTable = ({ invoice,flag }) => {

  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={invoice} />
      {/* <InvoiceTableBlankSpace
        rowsCount={tableRowsCount - invoice.items.length}
      /> */}
      {flag&&
        <InvoiceTableFooter items={invoice} />
      }
    </View>
  );
};

export default InvoiceItemsTable;
