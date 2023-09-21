import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 

const ApprovalFormat = () => {
  const [Site, setSite] = useState('');
  const [DateAndTime, setDateTime] = useState('');
  const [Issuer, setIssuer] = useState('');
  const [Receiver, setReceiver] = useState('');
  const [NatureofWork, setNatureofWork] = useState('');
  const [WorkArea, setWorkArea] = useState('');
  const [RiskAssociatedwiththeWork, setRiskAssociatedwiththeWork] = useState('');
  const [RiskAssessmentDetail, setRiskAssessmentDetail] = useState('');
  const [RecommendedPPE, setRecommeandedPPE] = useState('');
  const [SpecialInstruction, setSpecialInstruction] = useState('');
  const [PossibleEmergencySituation, setPossibleEmergencySituation] = useState('');
  const [PrecautionTakenToSupportEmergencySituation, setPrecautionTakentoSupportEmergencySituations] = useState('');
  const [OtherpermitsApplicable, setOtherpermitsApplicable] = useState(false);
  const [PermitApprovedbySiteFHS, setPermitApprovedbySiteFHS] = useState(false);
  const [PermitVerifiedandClosed, setPermitVerifiedandClosed] = useState(false);
  const [isPending, setIsPending] = useState(false);
  var Username = 'Kumaran';

 

  const handleChange1 = () => {
    setOtherpermitsApplicable(!OtherpermitsApplicable);
  };

 

  const handleChange2 = () => {
    setPermitApprovedbySiteFHS(!PermitApprovedbySiteFHS);
  };

 

  const handleChange3 = () => {
    setPermitVerifiedandClosed(!PermitVerifiedandClosed);
  };

 

  const handleSubmit = (e) => {
  
    e.preventDefault();
    setIsPending(true);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const data = { Site, DateAndTime, Issuer, Receiver, NatureofWork, WorkArea, RiskAssessmentDetail, RiskAssociatedwiththeWork, RecommendedPPE, SpecialInstruction, PossibleEmergencySituation, PrecautionTakenToSupportEmergencySituation, OtherpermitsApplicable, PermitApprovedbySiteFHS, PermitVerifiedandClosed, day, month, year, Username };

    fetch('https://localhost:7113/api/heightwork/post', {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      setDateTime("");setSite("");setIssuer("");setReceiver("");setNatureofWork("");setWorkArea("");setRiskAssociatedwiththeWork("");setRiskAssessmentDetail("");setRecommeandedPPE("");setSpecialInstruction("");setPossibleEmergencySituation("");setPrecautionTakentoSupportEmergencySituations("");setPermitApprovedbySiteFHS(false);setOtherpermitsApplicable(false);setPermitVerifiedandClosed(false)
      alert("Data Saved")
      setIsPending(false);
    });
  };

 

  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
<div className="container-fluid">
<a className="navbar-brand" href="#">
<img src="icon.png" alt="Logo" className="logo" />
</a>
<button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link" href="#">
                  Home
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">
                  View Details
</a>
</li>
</ul>
</div>
</div>
</nav>

 

      <div className="container mt-4">


<form action="" id="myForm" onSubmit={handleSubmit}>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Site</label>
<input
                  type="text"
                  className="form-control"
                  name="site"
                  value={Site}
                  onChange={(e) => { setSite(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Date & Time</label>
<input
                  type="datetime-local"
                  className="form-control"
                  name="date_time"
                  value={DateAndTime}
                  onChange={(e) => { setDateTime(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Issuer</label>
<input
                  type="text"
                  className="form-control"
                  name="issuer"
                  value={Issuer}
                  onChange={(e) => { setIssuer(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Receiver</label>
<input
                  type="text"
                  className="form-control"
                  name="receiver"
                  value={Receiver}
                  onChange={(e) => { setReceiver(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Nature of Work</label>
<input
                  type="text"
                  className="form-control"
                  name="nature_of_work"
                  value={NatureofWork}
                  onChange={(e) => { setNatureofWork(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Work Area</label>
<input
                  type="text"
                  className="form-control"
                  name="work_area"
                  value={WorkArea}
                  onChange={(e) => { setWorkArea(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Risk Associated with the Work</label>
<input
                  type="text"
                  className="form-control"
                  name="risk_associated"
                  value={RiskAssociatedwiththeWork}
                  onChange={(e) => { setRiskAssociatedwiththeWork(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Risk Assessment Detail</label>
<input
                  type="text"
                  className="form-control"
                  name="risk_assessment_detail"
                  value={RiskAssessmentDetail}
                  onChange={(e) => { setRiskAssessmentDetail(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Recommended PPE</label>
<input
                  type="text"
                  className="form-control"
                  name="recommended_ppe"
                  value={RecommendedPPE}
                  onChange={(e) => { setRecommeandedPPE(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Special Instruction</label>
<input
                  type="text"
                  className="form-control"
                  name="special_instruction"
                  value={SpecialInstruction}
                  onChange={(e) => { setSpecialInstruction(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Possible Emergency Situation</label>
<input
                  type="text"
                  className="form-control"
                  name="emergency_situation"
                  value={PossibleEmergencySituation}
                  onChange={(e) => { setPossibleEmergencySituation(e.target.value) }}
                  required
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Precaution Taken To Support Emergency Situation</label>
<input
                  type="text"
                  className="form-control"
                  name="precaution_emergency_situation"
                  value={PrecautionTakenToSupportEmergencySituation}
                  onChange={(e) => { setPrecautionTakentoSupportEmergencySituations(e.target.value) }}
                  required
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Other permits Applicable</label>
<input
                  type="checkbox"
                  className="form-check-input"
                  name="other_permits"
                  checked={OtherpermitsApplicable}
                  onChange={handleChange1}
                />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label>Permit Approved by Site FHS</label>
<input
                  type="checkbox"
                  className="form-check-input"
                  name="permit_approved"
                  checked={PermitApprovedbySiteFHS}
                  onChange={handleChange2}
                />
</div>
</div>
</div>

 

          <div className="row">
<div className="col-12">
<div className="form-group">
<label>Permit Verified and Closed</label>
<input
                  type="checkbox"
                  className="form-check-input"
                  name="permit_verified"
                  checked={PermitVerifiedandClosed}
                  onChange={handleChange3}
                />
</div>
</div>
</div>

 

          {!isPending && (
<div className="row">
<div className="col-12">
<button type="submit" className="btn btn-primary">Submit</button>
<button type="reset"  className="btn btn-primary" onClick={()=>{setDateTime("");setSite("");setIssuer("");setReceiver("");setNatureofWork("");setWorkArea("");setRiskAssociatedwiththeWork("");setRiskAssessmentDetail("");setRecommeandedPPE("");setSpecialInstruction("");setPossibleEmergencySituation("");setPrecautionTakentoSupportEmergencySituations("");setPermitApprovedbySiteFHS(false);setOtherpermitsApplicable(false);setPermitVerifiedandClosed(false)}}>Clear</button>
</div>
</div>
          )}
</form>
</div>

 

      <ToastContainer />
</>
  );
}

 

export default ApprovalFormat;