import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColourantsNoombal = ({ username }) => {
  const [Date1, setDate] = useState('');
  const [Colorant, setColorant] = useState('');
  const [BatchNo, setBatchNo] = useState('');
  const [Quantity, setQuantity] = useState('');
  var CreateBy=username;
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    const data = { Date:Date1, Colorant, "BatchNo":parseInt(BatchNo), "Quantity":parseInt(Quantity), day, month, year,CreateBy};
    console.log(JSON.stringify(data))
    fetch('http://localhost:5147/api/colourantsnoombal/post/', {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      setDate('');
      setColorant('');
      setBatchNo('');
      setQuantity('');
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
                  <input
                    type="date"
                    className="form-control"
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
                  <input
                    type="text"
                    className="form-control"
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
                  <input
                    type="number"
                    className="form-control"
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
                  <input
                    type="number"
                    className="form-control"
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
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-primary"
                onClick={() => {
                  setDate('');
                  setColorant('');
                  setBatchNo('');
                  setQuantity('');
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ColourantsNoombal;