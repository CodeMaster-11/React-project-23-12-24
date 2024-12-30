import { Name } from "./App"

const CompC=()=>{
    return(
        <>
          <Name.Consumer>
            {
                (n)=>{
                    return <h1>HELLO {n}</h1>
                }
            }
          </Name.Consumer>  
        </>
    )
}

export default CompC;