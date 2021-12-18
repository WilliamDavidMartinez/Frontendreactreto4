import react from 'react';
import './App.css';

function App() {
  return (
    <div>
          <div className="row g-0">
              <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                          <img src="img/zorrillo.png" style={{width:'185px'}} alt="logo" />
                          <h4 className="mt-1 mb-5 pb-1">Zorrillo LTDA</h4>
                      </div>

                      <form action="/action_page.php">

                          <p>Ingresa tus credenciales:</p>

                          <div className="form-floating mb-4">
                              <input type="email" id="email" className="form-control" placeholder="Correo"/>
                              <label for="correo">Correo</label>
                          </div>

                          <div className="form-floating mb-4">
                              <input type="password" id="password" className="form-control" placeholder="Contraseña" />
                              <label for="clave">Contraseña</label>
                          </div>

                          <div className="text-center pt-1 mb-4 pb-1">
                              <button className="btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3" type="button" onclick="entrarUser()">Entrar</button><br />
                              ¿No tienes una cuenta?<br />
                              Crea una <a className="text-muted" href="new.html">Aquí</a>.
                          </div>

                      </form>

                  </div>
              </div>

            
              <div className="card-body rounded col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Somos más que una compañía</h4>
                      <p className="small mb-0">Zorrillo LTDA es una empresa Ibaguereña con más de 10 años de trayectoria en la venta de perfumes y colonias mediante el servicio de venta directa por catalogo, se ubica en el barrio Interlaken. Actualmente cuenta con más de 80 empleados entre directos y fuerza de ventas independiente.</p>
                      <p className="small mb-0">Contamos con una gran variedad de colonias. Estamos en constante contacto con nuestros clientes para ofrecer las fragancias que justamente ellos quieren.</p>
                  </div>
              </div>

          </div>

    </div>
  );
}

export default App;
