import React, { Component, Fragment, useState, useContext } from "react";
import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import data from "./data/invoice-data";
import Froms from "./From"
import {DataContext} from './context/dataContext'

// import logo from './logo.svg';
import "./App.css";

function App  () {
  const [data,setData,flag, setFlag]= useContext(DataContext)
  // const [fromFlag, setFrom] = useState(false);
  
    return (
    <div>
       
     {/* <Froms></Froms> */}
      <Document>
        <Page size="A4">
          <Fragment>
            {/* <div style={{width:"100%", height:"100vh"}}>
          <Invoice invoice={invoiceData}/>
          </div> */}
            <PDFViewer width="100%" height="1000" className="app">
              <Invoice invoice={data} />
            </PDFViewer>
          </Fragment>
        </Page>
      </Document>
       {/* }  */}
      </div>
    );
  }


export default App;
