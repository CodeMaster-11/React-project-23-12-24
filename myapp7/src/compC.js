import { Name , Name1 } from "./App"

const CompC=()=>{
    return(
        <>
          <Name.Consumer>
            {
                (n)=>{
                    return (
                        <Name1.Consumer>
                            {
                                (n1)=>{
                                    return (
                                        <h1>well come {n} {n1} from C</h1>
                                    )
                                }
                            }
                        </Name1.Consumer>
                    )
                }
            }
          </Name.Consumer>  
        </>
    )
}

export default CompC;