import React,{useState} from 'react'

const Table2 = (props) => {
  const [User, setUser] = useState({});

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
  const remove = ()=>{
    setUser({
      market : "",
      extra_p : "",
      market_value: "",
    });
  }
  return (
    <div>
       <table border="1" align="center">
            
              <tr>
                  <th colspan="3"><h2>GENERAL</h2></th>
              </tr>
              <tr>
                <td>1</td>
                 <td>How is the Marketability?</td>
                 <td><input type="text"
                 name="market" 
                 value={User.market}
                 onChange = {handleChange}
                 /></td>
             </tr>
             <tr>
                <td>2</td>
                 <td>What are the factors favoring for 
                     an Extra potential value?</td>
                 <td><input type="text"
                  name="extra_p" 
                  value={User.extra_p}
                  onChange = {handleChange}
                 /></td>
             </tr>
             <tr>
                <td>3</td>
                 <td>Any Negative Factors Observed which
                     Affect the Market value in Genral.
                 </td>
                 <td><input type="text"
                  name="market_value" 
                  value={User.market_value}
                  onChange = {handleChange}
                 /></td>
             </tr>
             <tr>
                <td></td>
                <td></td>
                <td><button type="button" onClick={() =>props.datasend(User)}>Add</button>
                    <button type="button"onClick={remove}>Delete</button>
                </td>
            </tr>
           </table>
    </div>
  )
}

export default Table2