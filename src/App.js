import './App.css';
//import {pintarLogin} from './login.js';
/**
 * FUNCIONES PRINCIPALES INDEX
 * 
 * Contiene todo el html base común a todas los
 * servicios de la página web.
 */

// PARÁMETROS GLOBALES
const raiz = "http://localhost:8080/api"; // "http://localhost:8080/api";
let alerta = "";

/**
 * Crea una variable htmlBase interna que contiene
 * el html base. Las funcionalidades de la página web
 * se van a desplegar en una carta maindCard
 */


 function pintarLogin() {
  return(
      <div class="row g-0">

          <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                      <img src="img/zorrillo.png" style={{width: '185px'}} alt="logo" />
                      <h4 class="mt-1 mb-5 pb-1">Zorrillo LTDA</h4>
                  </div>

                  <form action="/action_page.php">

                      <p>Ingresa tus credenciales:</p>

                      <div class="form-floating mb-4">
                          <input type="email" id="email" class="form-control" placeholder="Correo"/>
                          <label for="correo">Correo</label>
                      </div>

                      <div class="form-floating mb-4">
                          <input type="password" id="password" class="form-control" placeholder="Contraseña" />
                          <label for="clave">Contraseña</label>
                      </div>

                      <div class="text-center pt-1 mb-4 pb-1">
                          <button class="btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3" type="button" onclick="entrarUser()">Entrar</button><br />
                          ¿No tienes una cuenta?<br/>
                          Crea una <a class="text-muted" href="new.html">Aquí</a>.
                      </div>

                  </form>

              </div>
          </div>

          <div class="card-body rounded col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Somos más que una compañía</h4>
                  <p class="small mb-0">Zorrillo LTDA es una empresa Ibaguereña con más de 10 años de trayectoria en la venta de perfumes y colonias mediante el servicio de venta directa por catalogo, se ubica en el barrio Interlaken. Actualmente cuenta con más de 80 empleados entre directos y fuerza de ventas independiente.</p>
                  <p class="small mb-0">Contamos con una gran variedad de colonias. Estamos en constante contacto con nuestros clientes para ofrecer las fragancias que justamente ellos quieren.</p>
              </div>
          </div>

      </div>
  );

}






function App() {
  return (
    <section class="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3" id="mainCard">
                      {pintarLogin()}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default App;
