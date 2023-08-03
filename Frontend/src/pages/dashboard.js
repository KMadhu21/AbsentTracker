import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

function Dashboard(){
    const [reason_d,setReason_d] = useState([])
    let arr=[];
    const [brr,Setdata]= useState([]);
    const [crr,Setcrr]=useState([])
    const [temp,Settemp]= useState([]);
    const[d,setD] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8009/sdash').then((res)=>{
             for(let i=0;i<res.data.length;i++){
                if(res.data[i].rollno===localStorage.getItem("token")){
                    let obj={
                        rollno : res.data[i].rollno,
                        jant: res.data[i].jant,
                        janp: res.data[i].janp,
                        jana: res.data[i].jana,
                        febt: res.data[i].febt,
                        febp: res.data[i].febp,
                        feba: res.data[i].feba,
                        mart: res.data[i].mart,
                        marp: res.data[i].marp,
                        mara: res.data[i].mara,
                        aprt: res.data[i].aprt,
                        aprp: res.data[i].aprp,
                        apra: res.data[i].apra,
                        mayt: res.data[i].mayt,
                        mayp: res.data[i].mayp,
                        maya: res.data[i].maya,
                        junt: res.data[i].junt,
                        junp: res.data[i].junp,
                        juna: res.data[i].juna,
                        attend : res.data[i].attend
                    }
                    setD(obj)
                    
                    arr.push(obj);
                }
             }
            console.log(arr)
            
        })
     },[])
     console.log(temp);
     console.log(crr);
    return(
        <div className="container">
            <h3 style={{color:'#083d56',fontWeight:'bold',marginBottom:'20px'}}>Dashboard</h3>
            <div className="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 ">
                    <h4 style={{color:'#003060'}}>Attendance</h4>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%',backgroundColor:'green'}}>70%</div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 cardmain">
                    <div class="card">
                        <div class="card-header">January</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td> :</td>
                                    <td> {d.jant}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.janp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>{d.jana}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">February</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>{d.febt}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.febp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                     <td>{d.feba}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">March</div>
                        <div class="card-body">
                            <center>
                            <table>
                            <tr>
                                    <td>Total</td>
                                    <td> :</td>
                                    <td> {d.mart}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.marp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>{d.mara}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 cardmain">
                    <div class="card">
                        <div class="card-header">April</div>
                        <div class="card-body">
                            <center>
                            <table>
                            <tr>
                                    <td>Total</td>
                                    <td> :</td>
                                    <td> {d.aprt}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.aprp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>{d.apra}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">May</div>
                        <div class="card-body">
                            <center>
                            <table>
                            <tr>
                                    <td>Total</td>
                                    <td> :</td>
                                    <td> {d.mayt}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.mayp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>{d.maya}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">June</div>
                        <div class="card-body">
                            <center>
                            <table>
                            <tr>
                                    <td>Total</td>
                                    <td> :</td>
                                    <td> {d.junt}</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>{d.junp}</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>{d.juna}</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}
export default Dashboard;