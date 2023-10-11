import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "antd/es/form/Form";
import './Form.css'
import { Button , Form ,Input,DatePicker,InputNumber ,Select} from 'antd';
import axios from "axios";
import {CheckOutlined} from '@ant-design/icons';

const Tinting = ({username}) => {
     
     const handleSubmit=()=>{
        let Input=FormInsert.getFieldValue()
        Input["CreateBy"]=username;
         const date = new Date();
         let day = date.getDate();
         let month = date.getMonth() + 1;
         let year = date.getFullYear();
         Input["day"]=day;
         Input["month"]=month;
         Input["year"]=year;  
         console.log(JSON.stringify(Input))
        axios.post('http://localhost:5147/api/tintingbanglore/post',Input).then(
            toast('Data is being saved', {
                position: "top-center",
                autoClose: 50,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        )
         
        }
    const [FormInsert] = useForm()

 
    return (
    <>
    
        <h1 className="text-center">Tinting Banco</h1>
        <div className="container-fluid mt-5">
            <Form form={FormInsert} className="FormMainClass"  onFinish={() => handleSubmit()}>
                <div className= "row "> 

                   
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Date:" name={"Date"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <DatePicker format={'YYYY-MM-DD'} style={{ width: '100%' }} allowClear showTime={false}  required />
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Name Of Project:" name={"NameOfTheProject"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} className="form-control"    maxLength={20} allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Fandeck:" name={"Fandeck"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={40} className="form-control"     allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Code:" name={"ShadeCode"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}   maxLength={40} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Name:" name={"ShadeName"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={20} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Product:" name={"Product"}rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}    maxLength={20} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Base:" name={"Base"}rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>
                                    <Input style={{ width: '100%' }}  maxLength={20} className="form-control"     allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Base Batch Number:" name={"BaseBatchNo"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }}  maxLength={10} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Formulation for 1L:" name={"FormulationFor1LitrePackSize"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Quantity Tinted in Litres:" name={"QuantityTintedInLitres"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <InputNumber style={{ width: '100%' }} min={0} max={100000} className="form-control"  allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Reference-Standard/Customized:" name={"Reference"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>  
                                    
                                    <Select className="form-control"   allowClear required>
                                        <Select.Option value="">Select</Select.Option>
                                        <Select.Option value="Standard">Standard</Select.Option>
                                        <Select.Option value="Customized">Customized</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Project/Retail:" name={"ForProjectOrRetail"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Select className="form-control"  allowClear required>
                                        <Select.Option value="">Select Project or Retail</Select.Option>
                                        <Select.Option value="Project">Project</Select.Option>
                                        <Select.Option value="Retail">Retail</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div> 
                        </div>      
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Match Confirmation:" name={"ShadeMatchConfirmation"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Select className="form-control"   allowClear required>
                                        <Select.Option value="">Select Yes or No</Select.Option>
                                        <Select.Option value="yes">YES</Select.Option>
                                        <Select.Option value="no">NO</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Shade Patch/Swatch:" name={"ShadePatch"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                <   Input style={{ width: '100%' }} maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Other Observations:" name={"OtherObservations"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}>
                                    <Input style={{ width: '100%' }}   maxLength={40} className="form-control"    allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="card border border-dark border-2 rounded p-2 m-2">
                            <div className="form-group">
                                <Form.Item label="Dispensing Machine:" name={"DispensingMachine"} rules={[
                                {
                                    required: true,
                                    message: 'Please  give a Input',
                                }
                            ]}> 
                                    <Input style={{ width: '100%' }} maxLength={40} className="form-control"   allowClear required/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 px-0 m-2">
                        <Form.Item className="FormButtonClass" >
                                    <Button type="primary" danger onClick={() => FormInsert.resetFields()}>Cancel </Button>
                                    <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>Save</Button>
                        </Form.Item>
                    </div>
                </div> 
            
            </Form>
        </div>
        <ToastContainer />
    </>

    );

}

export default Tinting;