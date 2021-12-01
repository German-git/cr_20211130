import { Carousel } from 'react-bootstrap';

const CarouselHomePage = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/home/home_alien_isolation.jpg"
                alt="Alien Isolation"
                />
                <Carousel.Caption>
                <h3>Un camino de ida</h3>
                <p>Nuestro sitio está dedicado a todos los usuarios de este gran sistema operativo que 
                    buscan los mejores juegos, o los más nuevos.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/home/home_bioshock_infinite.jpg"
                alt="Bioshock"
                />

                <Carousel.Caption>
                <h3>Recomendados</h3>
                <p>
                    Mira nuestra sección <a href="/recomendados" class="fw-bold">recomendados</a> si buscas lo mejor o más nuevo.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/home/home_skull_girls.jpg"
                alt="Skull Girls"
                />

                <Carousel.Caption>
                <h3>Galería</h3>
                <p>
                    Encuentra los mejores juegos para GNU/Linux en nuestra <a href="/galeria" class="fw-bold">galería</a>.
                </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/home/home_civilization_vi.jpg"
                alt="Civilization VI"
                />

                <Carousel.Caption>
                <h3>Contacto</h3>
                <p>
                    Ponte en <a href="/contacto" class="fw-bold">contacto</a> con nosotros si sabes de algún juego que no esté en nuestra lista, o si tienes alguna sugerencia.
                </p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
    )
}

export default CarouselHomePage