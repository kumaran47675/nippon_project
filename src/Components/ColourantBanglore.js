import React, { useState } from "react";
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";
const ColourantBanglore = ({ username }) => {
  const [Date1, setDate] = useState('');
  const [Colorant, setColorant] = useState('');
  const [BatchNo, setBatchNo] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [DispensingMachine, setDispensingMachine] = useState('');
  var CreateBy=username;
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const data = { "Date":Date1, "Colourant":Colorant,"BatchNo":parseInt(BatchNo),"Quantity":parseInt(Quantity), DispensingMachine, day, month, year,CreateBy};
    console.log( JSON.stringify(data))
    fetch('http://localhost:5147/api/tintingcolourants/post', {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      setDate('');
      setColorant('');
      setBatchNo('');
      setQuantity('');
      setDispensingMachine('');
      alert("Data Saved")
    });
  };

  return (
    <>
      <div className="container mt-4">
        <form action="" id="myForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border border-dark border-2 rounded p-2 m-2">
                <div className="form-group">
                  <label>Date</label>
                  <Input
                    type="date"
                    name="date"
                    value={Date1}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card border border-dark border-2 rounded p-2 m-2">
                <div className="form-group">
                  <label>Colorant</label>
                  <Input
                    type="text"
                    name="colorant"
                    value={Colorant}
                    onChange={(e) => setColorant(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border border-dark border-2 rounded p-2 m-2">
                <div className="form-group">
                  <label>Batch Number</label>
                  <Input
                    type="number"
                    name="batchno"
                    value={BatchNo}
                    onChange={(e) => setBatchNo(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card border border-dark border-2 rounded p-2 m-2">
                <div className="form-group">
                  <label>Quantity</label>
                  <Input
                    type="number"
                    name="quantity"
                    value={Quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border border-dark border-2 rounded p-2 m-2">
                <div className="form-group">
                  <label>Dispensing Machine</label>
                  <Input
                    type="text"
                    name="dispensingmachine"
                    value={DispensingMachine}
                    onChange={(e) => setDispensingMachine(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="default"
                onClick={() => {
                  setDate('');
                  setColorant('');
                  setBatchNo('');
                  setQuantity('');
                  setDispensingMachine('');
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ColourantBanglore;