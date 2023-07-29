import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Formulario from "./Formulario"
import Header from "./Header"



function Main() {
  

    return (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <Header></Header>

          <Formulario></Formulario>
          <hr className="hrMain"/>
          <Footer1></Footer1>
          <hr className="hrMain"/>
          <Footer2></Footer2>
      </>
    )
  }
  
  export default Main
  