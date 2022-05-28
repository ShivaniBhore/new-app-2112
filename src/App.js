import {useState} from 'react';
import './Styles.css';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';


function App() {
  // Start of the state
  const [User, setUser] = useState({});
  const [T2, setT2] = useState();
  const [T3, setT3] = useState();
  const [data_submit, setdata_submit] = useState(false)
  let name, value

  const handleChange = (e) =>{
    name = e.target.name
    value = e.target.value

    setUser({...User , [name] : value})
    // if(typeof(value) === 'number'){
    //   setUser({...User , [name] : value})
    // }else{
    //   alert('Please enter numbers')
    // }
    
  }
  const changePage = () =>{
    setdata_submit(!data_submit);
  }

  const data1 = (dataone) =>{
    console.log(dataone);
    setT2(dataone);
    
  }
  const data2 = (datatwo) =>{
    console.log(datatwo);
    setT3(datatwo);

  }

  const remove = ()=>{
    setUser({
      floor : "", 
      dno : "",
      specs_roof : "", 
      specs_flooring : "",
      specs_doors : "",
      specs_windows :"",
      specs_fittings :"",
      specs_finshing :"",
      assessment_no:"",
      tax_amount:"",
      paid_by:"",
      esn_no:"",
      mcard_name:"",
      q1:"",
      sales_deed:"",
      undivided:"",
      area_of_house:"",
      q2:"",
      carpet_area:"",
      posh:"Posh",
      res:"Commerical",
      occupied:"",
      Rent:"",
      remark:"",
    });
  }

   return (
    <div className="App">
      { !data_submit? (
        <>
      <table border="1" align="center">
       
       <tr>
           <th colspan="3"><h2>ROW HOUSE</h2></th>
       </tr>
       <tr>
           <td>1</td>
           <td>The floor in which the Row House is situated</td>
           <td><input type="number" 
            name="floor" 
            value={User.floor}
            onChange = {handleChange}
            /></td>
       </tr>
       <tr>

        <td>2</td>
          <td>Door Number of the Row House</td>
          <td><input type="number"
            name ="dno"
            value={User.dno}
            onChange = {handleChange}
            /></td>
        </tr>
        <tr> 
          <td>3</td>
          <td >Specification of the Row House</td>
        <td></td>  
        </tr>
        <tr>
            <td></td>
             <td>Roof</td>
             <td><input type="text"
             name ="specs_roof"
             value={User.specs_roof}
             onChange = {handleChange}
             /></td>
         </tr>
            <td></td>
             <td> Flooring</td>
             <td><input type="text"
             name ="specs_flooring"
             value={User.specs_flooring}
             onChange = {handleChange}
             /></td>
             <tr></tr>
             <td></td>
             <td>Doors</td>
             <td><input type="text"
              name ="specs_doors"
              value={User.specs_doors}
              onChange = {handleChange}
             /></td>
             <tr></tr>
             <td></td>
             <td>Windows</td>
             <td><input type="text"
              name ="specs_windows"
              value={User.specs_windows}
              onChange = {handleChange}
              /></td>
             <tr></tr>
             <td></td>
             <td>Fittings</td>
             <td><input type="text"
              name ="specs_fittings"
              value={User.specs_fittings}
              onChange = {handleChange}
             /></td>
             <tr></tr>
             <td></td>
             <td >Finshing</td>
             <td><input type="text"
             name ="specs_finshing"
             value={User.specs_finshing}
             onChange = {handleChange}
             /></td>
             <tr></tr>
          <tr> 
            <td>4</td>
            <td>House Tax</td>
              <td></td>  
          </tr>

             <tr>
                <td></td>
                 <td>Assessment no.</td>
                 <td><input type="text"
                  name ="assessment_no"
                  value={User.assessment_no}
                  onChange = {handleChange}
                 /></td>
              </tr>
                <td></td>
                 <td>Tax amount</td>
                 <td><input type="text"
                  name ="tax_amount"
                  value={User.tax_amount}
                  onChange = {handleChange}
                 /></td>
                 <tr></tr>
                 <td></td>
                 <td>Tax paid in the name of</td>
                 <td><input type="text"
                  name ="paid_by"
                  value={User.paid_by}
                  onChange = {handleChange}
                 /></td>
                 <tr></tr>
          <tr>
            <td>5</td>
              <td>Electricity Service connection no.</td>
              <td><input type="number"
                name ="esn_no"
                value={User.esn_no}
                onChange = {handleChange}
              /></td>
            </tr>
            <td></td>
              <td>Meter Card is in the name of</td>
              <td><input type="text"
                name ="mcard_name"
                value={User.mcard_name}
                onChange = {handleChange}
              /></td>
              <tr></tr>
              <tr>
            <td>6</td>
              <td>How is the maintenance of the Row House?</td>
              <td><input type="text"
                 name ="q1"
                 value={User.q1}
                 onChange = {handleChange}
              /></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Sales Deed executed in the name of</td>
              <td><input type="text"
                 name ="sales_deed"
                 value={User.sales_deed}
                 onChange = {handleChange}
              /></td>
            </tr>
            <tr>
              <td>8</td>
                <td>what is the undivided area of land as per sale deed?</td>
                <td><input type="number"
                   name ="undivided"
                   value={User.undivided}
                   onChange = {handleChange}
                /></td>
            </tr> 
            <tr>
              <td>9</td>
              <td>What is the plinth area of the Row House</td>
              <td><input type="number"
                name ="area_of_house"
                value={User.area_of_house}
                onChange = {handleChange}
              /></td>
            </tr>
            <tr>
              <td>10</td>
              <td>What is the floor space index(Approx)?</td>
              <td><input type="text"
                name ="q2"
                value={User.q2}
                onChange = {handleChange}
              /></td>
            </tr> 
            <tr>
              <td>11</td>
              <td>what is the carpet area of the Row House?</td>
              <td><input type="number"
                name ="carpet_area"
                value={User.carpet_area}
                onChange = {handleChange}
              /></td>  
            </tr>
            <tr>
              <td>12</td>
              <td>Is it Posh/I Class/Medium/Ordinary</td>
              <td><select
                name ="posh"
                value={User.posh}
                onChange = {handleChange}
              >
                <option value="Posh">Posh</option>
                <option value="I_class"> I class</option>
                <option value ="medium"> Medium</option>
                <option value="ordinary"> Ordinary</option>
              
              </select></td>
            </tr>
            <tr>
            <td>13</td>
              <td>Is it being used for Residential or Commerical</td>
              
              <td><select
                name ="res"
                value={User.res}
                onChange = {handleChange}
              >
                <option value="Residential">Residential</option>
                <option value="Commerical"> Commerical</option>
              
              </select></td>
            </tr>
            <tr>
             <td>14</td>
             <td>Is it owner occupied or tenanted</td>
             <td><input type="text"
               name ="occupied"
               value={User.occupied}
               onChange = {handleChange}
             /></td>
            </tr>
            <tr>
             <td>15</td>
             <td>If tenated,what is the montly rent?</td>
             <td><input type="number"
               name ="Rent"
               value={User.Rent}
               onChange = {handleChange}
             /></td>
            </tr> 
            <tr>
              <td></td>
              <td>Remark</td>
              <td><input type="text"
                 name ="remark"
                 value={User.remark}
                 onChange = {handleChange}
              /></td>
            </tr>
            <tr>
            <td></td>
              <td rowspan="1">DRAWING APPROVAL(dicuss here the building approval,<br/>
              reference,violations observed if any,and its consequences there of)
              
              <td></td>
              </td>
            </tr>    
        <tr>
             <td></td>
             <td></td>
             <td><button type="button1">Add</button>
                 <button type="button" onClick={remove}>Delete</button>
             </td>
         </tr>
      </table>
      <br></br>
      <br></br>

      <Table2 datasend ={data1}/>
      <br></br>
      <br></br>

      <Table3 datasend ={data2}/>
      <br></br>
    <button className='Submit' onClick={changePage}>Submit</button>
    </>
    ):(
      <>
        <Table4 User1 ={User} User2 ={T2} User3={T3}/>
      </>
      
    )}
    </div>
  );
}

export default App;
