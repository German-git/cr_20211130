import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav class="navbar fixed-top navbar-light bg-light navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo_tux_juegox.png" alt="Logo - Tux Juegos" class="logo-navbar d-inline-block align-text-top" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBarra">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarBarra">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="galeria">Galería</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="recomendados">Recomendados</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;