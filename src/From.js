import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as ReactBootstrap from "react-bootstrap";
import "./From.css";
import { DataContext } from "./context/dataContext";

export default function Froms() {
  const [data, setData, flag, setFlag] = useContext(DataContext);

  const [inputList, setInputList] = useState([
    { sno: 1, desc: "", qty: 1, rate: 0 },
  ]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let ojb1 = {
      id: "5df3180a09ea16dc4b95f910",
      invoice_no: data.invoiceNo,
      balance: "$2,283.74",
      company: data.ClientName,
      email: "susanafuentes@mantrix.com",
      phone: data.phone,
      address: data.address,
      trans_date: data.date,
      due_date: "2019-10-12",
      items: inputList,
    };
    console.log(ojb1);
    setData(ojb1)
    setFlag(false);
  }; // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { sno: inputList, desc: "", qty: 1, rate: 0 }]);
  };

  return (
    <div>
      <h1>Invoice</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <label className="text-center">Id</label>
              <input
                className="w-50 mx-auto"
                {...register("invoiceNo", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Invoice No</label>
              <input
                className="w-75 mx-auto"
                {...register("invoiceNo", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Balance</label>
              <input
                className="w-50 mx-auto"
                {...register("invoiceNo", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Company</label>
              <input
                className="w-75 mx-auto"
                {...register("invoiceNo", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <label className="text-center">Transfer Date</label>
              <input
                className="w-50 mx-auto"
                type="date"
                {...register("date", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Due Date</label>
              <input
                className="w-50 mx-auto"
                type="date"
                {...register("date", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <label className="text-center">Client Name</label>
              <input
                className="w-50 mx-auto"
                {...register("ClientName", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Email</label>
              <input
                className="w-50 mx-auto"
                {...register("invoiceNo", {
                  required: true,
                  maxLength: 20,
                  // pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div class="col-sm">
              <label className="text-center">Address</label>
              <input className="w-50 mx-auto" {...register("address", {})} />
            </div>
            <div class="col-sm">
              <label className="text-center">Phone</label>
              <input
                className="w-50 mx-auto"
                type="number"
                {...register("phone", {})}
              />
            </div>
          </div>
        </div>

        {/* {errors?.ClientName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )} */}
        {/* {errors?.ClientName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}

        {/* {errors?.Description?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )} */}

        {/* table starts */}
        <ReactBootstrap.Container className="mt-5">
          <h3>Table Input</h3>
          <ReactBootstrap.Row className="justify-content-md-center">
            {inputList.map((x, i) => {
              return (
                <div className="box d-flex">
                  <ReactBootstrap.Col xs className="m-2" lg="1">
                    <h5>Serial No</h5>
                    <input
                      name="sno"
                      placeholder="Enter SL"
                      value={i + 1}
                      readonly
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs className="m-2" lg="3">
                    <h5>Description</h5>
                    <input
                      className="ml10"
                      name="desc"
                      placeholder="Enter Description"
                      value={x.desc}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs className="m-2" lg="2">
                    <h5>Quantity</h5>
                    <input
                      className="ml10"
                      name="qty"
                      type="number"
                      placeholder="Enter Quantity"
                      value={x.qty}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs className="m-2" lg="2">
                    <h5>Unit Price</h5>
                    <input
                      className="ml10"
                      name="rate"
                      type="number"
                      placeholder="Enter Unit Price"
                      value={x.rate}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs className="m-2" lg="2">
                    <h5>Line Total</h5>
                    <input
                      className="ml10"
                      name="lineTotal"
                      placeholder="Line Total"
                      value={x.rate * x.qty}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </ReactBootstrap.Col>

                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button onClick={handleAddClick}>Add</button>
                    )}
                  </div>
                </div>
              );
            })}
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        <input className="w-25 mx-auto" type="submit" />
      </form>
    </div>
  );
}
