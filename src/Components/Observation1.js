const Observation1 = () => {
    return ( 
    <>
        <h1 className="text-center">Observations</h1>

        <h3 className="enter-details">Enter details:</h3>
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
                            <label htmlFor="brand">Branding for Dispensing Machine :</label>
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
                {isPending && <div className="col-md-3"><button className="btn btn-primary observation-form-button" disabled type="submit">Submit</button></div>}
                {!isPending && <div className="col-md-3"><button className="btn btn-primary observation-form-button" type="submit">Submit</button></div>}
            </form>
        </div>
        <ToastContainer />
    </>

    );
}
 
export default Observation1;