import React from 'react'


const Table4 = (props) => {
  return (
    <div>
       
        {
            Object.entries(props.User1).map(([key, value]) =>(
                <div>
                    <table border="1" align="center">
                        <tr>
                            <th>{key}</th>
                            <th>{value}</th>
                        </tr>
                    </table>
                </div>
            ))
        }
        {
            Object.entries(props.User2).map(([key, value]) =>(
                <div>
                    <table border="1" align="center">
                        <tr>
                            <th>{key}</th>
                            <th>{value}</th>
                        </tr>
                    </table>
                </div>
            ))
        }
        {
            Object.entries(props.User3).map(([key, value]) =>(
                <div>
                    <table border="1" align="center">
                        <tr>
                            <th>{key}</th>
                            <th>{value}</th>
                        </tr>
                    </table>
                </div>
            ))
        }
         {/* <h1>{props.User1.dno}</h1>
         <h1>{props.User2.market_value}</h1> */}
         {/* <h1>{props.User1.dno}</h1> */}
    </div>
  )
}

export default Table4