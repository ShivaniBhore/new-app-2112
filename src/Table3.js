import React,{useState} from 'react'

const Table3 = (props) => {
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
        s_specification : "",
        h_f :"",
        b_s: "",
        l_o: "",
    });
  }
  return (
    <div>
     <table border="1" align="center">
             
                <tr>
                    <th colspan="3"><h2>RATE</h2></th>
                </tr>
            <tr>
                <td>1</td>
                    <td>After analyzing the comparable sale instances,
                    for a similar flat with same specifications in
                    The adjoining locality?
                    </td>
                    <td><input type="text"
                    name="s_specification" 
                    value={User.s_specification}
                    onChange = {handleChange}
                    /></td>
                </tr>
            <tr>
                    <td></td>
                        <td> (Along with details/referance of at least
                            two least deals/transactions withh respect to
                            adjacent properties in the areas)
                        </td>
                        <td></td>
            </tr>
            <tr>
            <td>2</td>
                <td> Assuming it is a new constraction,
                    what is the adopted basic composite rate of the house
                    under valuation after comparing <br/>with the specifications
                    and other factors with the row house under comparison (give details)
                </td>
                <td><input type="text"
                name="h_f" 
                value={User.h_f}
                onChange = {handleChange}
                /></td>
            </tr>
            <tr>
                <td>3</td>
                <td> Break up for the Rate
                </td>
                <td></td>
            </tr>
            <tr>
            <td></td>
            <td>i.Buluding + Services
                </td>
                <td><input type="text"
                name="b_s" 
                value={User.b_s}
                onChange = {handleChange}
                /></td>
            </tr>
            <tr>
            <td></td>
            <td>ii.Land + Others
            </td>
                <td><input type="text"
                 name="l_o" 
                 value={User.l_o}
                 onChange = {handleChange}
                /></td>
            </tr>
        <tr>
            <td>4</td>
                <td>Guideline rate oriented from the Registar's office
                    (an evidence there of to be enclosed)
                </td>
                <td><input type="text"/></td>
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

export default Table3