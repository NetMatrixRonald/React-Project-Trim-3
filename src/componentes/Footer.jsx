import React from "react";
import "../assets/Cards.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="foo-row">
            <div className="foo-col">
              <h2>
                Mantente <br />
                Actualizado
              </h2>
              <form action="" method="post">
                <div className="f-input">
                  <input
                    type="email"
                    placeholder="Ingrese su correo"
                    name="email"
                    required
                  />
                  <button
                    type="submit"
                    className="hm-btn-round btn-primary"
                    name="submit"
                    value="Registrar"
                  >
                    <i className="far fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="foo-col">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li>
                  <a href="https://www.samsung.com/co/">Productos</a>
                </li>
                <li>
                  <a href="https://www.motorola.com.co/">Campañas</a>
                </li>
                <li>
                  <a href="https://www.apple.com.co/">Nosotros</a>
                </li>
                <li>
                  <a href="https://www.xiaomi-store.co/">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="foo-col">
              <h3>Contáctanos</h3>
              <p>Teléfono: +1 (234) 567-890</p>
              <p>Email: info@Latorre.com</p>
            </div>
            <div className="foo-col">
              <h3>Síguenos</h3>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
