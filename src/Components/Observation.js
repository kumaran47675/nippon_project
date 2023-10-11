
import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Forms.css';
import { Button } from 'antd';
// import './CSS/nipponlogo2.png';
// import './login.css';

function Observation({username}) {
  const [Depot,setDepot]=useState('')
  const [BaseTintedAsPerReportInLit,setBr]=useState(0)
  const [BaseTintedAsPerHistoryFileInLit,setBrh]=useState(0)
  const [ColorantPouredInCannistersInLit,setColrcan]=useState(0)
  const [ColorantConsumedInLit,setColrcon]=useState(0)
  const [Remarks,setRemarks]=useState('')
  const [BrandlingForDispensingMachine,setBdm]=useState('OLD')
  const [BrandlingForGyroshakerMachine,setBgm]=useState('OLD')
  const [isPending,setIsPending]=useState(false)
  var CreateBy=username;
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsPending(true)
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    toast('Data is being saved', {
        position: "top-center",
        autoClose: 50,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  const data={Depot,BaseTintedAsPerReportInLit,BaseTintedAsPerHistoryFileInLit, ColorantPouredInCannistersInLit,ColorantConsumedInLit,Remarks,BrandlingForDispensingMachine,BrandlingForGyroshakerMachine,CreateBy,day,month,year}
  fetch('http://localhost:5147/api/observation/post',{
    method:'POST',
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
      setDepot('');setBr(0);setBrh(0);setColrcan(0);setColrcon(0);setRemarks('');setBdm('OLD');setBgm('OLD');
      toast('Data Saved', {
        position: "top-center",
        autoClose: 50,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     


      setIsPending(false);
  })
  }
  return ( 
    <>
      <h1 className="text-center">Observations</h1>
      {/* <h3 >Enter details:</h3> */}
      <div className="container mt-5">
        <form className="forms" onSubmit={handleSubmit}>
          <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="Depot">Depot :</label>
                            <input type="text" className="form-control" id="Depot" placeholder="Enter Depot" name="Depot" value={Depot} onChange={(e) => { setDepot(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="baser">Base Tinted as per Report :</label>
                            <input type="number" className="form-control" id="baser" placeholder="Enter Base Tinted as per Report" name="baser" value={BaseTintedAsPerReportInLit} onChange={(e) => { setBr(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="baseh">Base Tinted as per History :</label>
                            <input type="number" className="form-control" id="baseh" placeholder="Enter Base Tinted as per History" name="baseh" value={BaseTintedAsPerHistoryFileInLit} onChange={(e) => { setBrh(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="colourant">Colourant Poured in Cannister :</label>
                            <input type="number" className="form-control" id="colourant" placeholder="Enter Colourant poured in Litres" name="colourant" value={ColorantPouredInCannistersInLit} onChange={(e) => { setColrcan(e.target.value) }} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="colcon">Colourant Consumed :</label>
                            <input type="number" className="form-control" id="colcon" placeholder="Enter Colourant Consumed in Litres" name="colcon" value={ColorantConsumedInLit} onChange={(e) => { setColrcon(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="remarks">Remarks :</label>
                            <input type="text" className="form-control" id="remarks" placeholder="Enter Remarks" name="remarks" value={Remarks} onChange={(e) => { setRemarks(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="brand">Branding for Dispensing Machine:</label>
                            <select className="form-control" name="brand" id="barnd" value={BrandlingForDispensingMachine} onChange={(e) => { setBdm(e.target.value) }} required >
                                <option value="">Select</option>
                                <option value="OLD">Old</option>
                                <option value="NEW">New</option>
                                <option value="NO">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="brand">Branding for Gyroshaker Machine:</label>
                            <select className="form-control" name="brand" id="brand" value={BrandlingForGyroshakerMachine} onChange={(e) => { setBgm(e.target.value) }} required >
                                <option value="">Select</option>
                                <option value="OLD">Old</option>
                                <option value="NEW">New</option>
                                <option value="NO">No</option>
                            </select>
                        </div>
                    </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              {isPending && (
                <Button className="form-button" type="primary" disabled htmlType="submit">
                  Submit
                </Button>
              )}
              {!isPending && (
                <Button className="form-button" type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>

    );
}

export default Observation;