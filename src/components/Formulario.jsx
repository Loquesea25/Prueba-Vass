function Formulario() {
  
    
    return (
      <>
        <body className="body">
            <div className="content">

            
                <div>
                    <div className="form">
                    

                    <form action="">
                        <p>
                            <label>Nombre y apellidos</label>
                            <input type="text" name="NombreApellido" required/>
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="tel" name="Telefono"/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email" name="Email" required/>
                        </p>
                        
                        <p>
                            <label>Empresa / Organismo</label>
                            <input type="text" name="EmpresaOrganismo" required/>
                        </p>
                        <p>
                            <label>País</label>
                            <input type="text" name="País"/>
                        </p>

                        <p className="block">
                        <label>Mensaje:</label> 
                            <textarea className="text-area" name="Mensaje" rows="3" required></textarea>
                        </p>
                       
                        <p className="block">
                            <button>
                                Enviar
                            </button>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
        </body>
      </>
    )
  }
  
  export default Formulario
  