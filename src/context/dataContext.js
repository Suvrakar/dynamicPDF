
import React  from "react";
// import countries1 from "../data/json/countries"

export const DataContext= React.createContext();

export const DataProvider=(props)=>{
    // storedData=null
    const [flag, setFlag] = React.useState(true)
    const [data, setData] = React.useState({
        id: "5df3180a09ea16dc4b95f910",
        invoice_no: "#123123123",
        balance: "$2,283.74",
        company: "MANTRIX",
        email: "susanafuentes@mantrix.com",
        phone: "+1 (872) 588-3809",
        address: "922 Campus Road, Drytown, Wisconsin, 1986",
        trans_date: "2019-09-12",
        due_date: "2019-10-12",
        items: [
          {
            sno: 1,
            desc: "ad sunt culpa occaecat qui",
            qty: 5,
            rate: 405.89,
          },
          {
            sno: 2,
            desc: "cillum quis sunt qui aute",
            qty: 5,
            rate: 373.11,
          },
          {
            sno: 3,
            desc: "ea commodo labore culpa irure",
            qty: 5,
            rate: 458.61,
          },
          {
            sno: 4,
            desc: "nisi consequat et adipisicing dolor",
            qty: 10,
            rate: 725.24,
          },
          {
            sno: 5,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 6,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 7,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 8,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 9,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 10,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 1,
            desc: "ad sunt culpa occaecat qui",
            qty: 5,
            rate: 405.89,
          },
          {
            sno: 2,
            desc: "cillum quis sunt qui aute",
            qty: 5,
            rate: 373.11,
          },
          {
            sno: 3,
            desc: "ea commodo labore culpa irure",
            qty: 5,
            rate: 458.61,
          },
          {
            sno: 4,
            desc: "nisi consequat et adipisicing dolor",
            qty: 10,
            rate: 725.24,
          },
          {
            sno: 5,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 6,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 7,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 8,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 9,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 10,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 1,
            desc: "ad sunt culpa occaecat qui",
            qty: 5,
            rate: 405.89,
          },
          {
            sno: 2,
            desc: "cillum quis sunt qui aute",
            qty: 5,
            rate: 373.11,
          },
          {
            sno: 3,
            desc: "ea commodo labore culpa irure",
            qty: 5,
            rate: 458.61,
          },
          {
            sno: 4,
            desc: "nisi consequat et adipisicing dolor",
            qty: 10,
            rate: 725.24,
          },
          {
            sno: 5,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 6,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 7,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 8,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 9,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 10,
            desc: "proident cillum anim elit esse",
            qty: 4,
            rate: 141.02,
          },
          {
            sno: 1,
            desc: "ad sunt culpa occaecat qui",
            qty: 5,
            rate: 405.89,
          },
          {
            sno: 2,
            desc: "cillum quis sunt qui aute",
            qty: 5,
            rate: 373.11,
          },
          // {
          //   sno: 3,
          //   desc: "ea commodo labore culpa irure",
          //   qty: 5,
          //   rate: 458.61,
          // },
          // {
          //   sno: 4,
          //   desc: "nisi consequat et adipisicing dolor",
          //   qty: 10,
          //   rate: 725.24,
          // },
          // {
          //   sno: 5,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
          // {
          //   sno: 6,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
          // {
          //   sno: 7,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
          // {
          //   sno: 8,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
          // {
          //   sno: 9,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
          // {
          //   sno: 10,
          //   desc: "proident cillum anim elit esse",
          //   qty: 4,
          //   rate: 141.02,
          // },
        ],
      })

    return(
        <DataContext.Provider value={[data,setData,flag, setFlag]}>
            {props.children}
        </DataContext.Provider>
    )
}