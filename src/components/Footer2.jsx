import { Container } from "react-bootstrap"

function Footer2() {
  

    return (
      <>
        <body className="bodyFooter">
            
            <container className="container-footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <footer className="footer">
                <div className="containerFooter1">
                    <div className="footer1-row">
                        <div className="footer2">
                        <div className="texto-footer">
                            <small><b>Copyright</b> &copy; 2021  Todos los derechos reservados</small>  
                        </div>
                        <div className="texto-footer">
                        <p>Memoria ambiental  Politica de cookies</p>   
                        </div>
                        <div className="texto-footer">
                            <p>Politca de privacidad Politica de calidad y medio ambiente</p> 
                            </div>
                        </div>
                        <div className="footer2">
                            <div className="red-social">
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-linkedin"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-youtube"></a>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
            </container>
        </body>
      </>
    )
  }
  
  export default Footer2
  