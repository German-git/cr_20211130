import React, {useState, useEffect} from 'react';
import axios from 'axios'

import PageTitle from '../components/layout/PageTitle'
import CardRecomendadosPage from '../components/layout/CardRecomendadosPage'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import RecomendadoItem from '../components/juegos/RecomendadoItem'

const RecomendadosPage = (props) => {

    const urlJuegos = 'http://localhost:3000/api/recomendados';

    const {nombre, id_genero, genero, gratis, valoracion, recomendado, nota, img_id, imagen} = props;

    const [loading, setLoading] = useState(false);
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        const cargarJuegos = async () => {
            setLoading(true);
            const response = await axios.get(urlJuegos);
            setJuegos(response.data);
            setLoading(false);
        }

        cargarJuegos();
    }, []);

    
    /*
    const arrCards = [
        {
            title: 'Total War: Warhammer 2',
            genre: 'Turn-based strategy, real-time tactics',
            image: 'images/games/game_total_war_warhammer_2.jpg',
            value: 5,
            free: 0,
            text: "Cuando la gente sueña con qué franquicia de videojuegos encajaría bien con películas, juegos de mesa o similares, la combinación de Total War con Warhammer seguramente ocuparía un lugar destacado en muchas listas. Hace unos años, este sueño se hizo realidad, y el tren de Total War: Warhammer ha seguido adelante sin oposición desde entonces.\nTotal War: Warhammer 2 se acumula sobre el juego original si eres el propietario, lo que te permite combinar todas las facciones de ambos juegos en una súper campaña. Cada facción se siente completamente única para jugar, y ver a miles de ejércitos de Skaven, No-muertos, Hombres Lagarto, Caos y las otras facciones de los Grimdark atacar es un espectáculo para la vista. Varios otros juegos de Total War, como Three Kingdoms y Attila, también están disponibles en Linux."
        },

        {
            title: 'Pillars of Eternity II: Deadfire',
            genre: 'RPG',
            image: 'images/games/game_pillars_of_eternity_2_deadfire.jpg',
            value: 5,
            free: 0,
            text: "Uno de los títulos que mejor representa el resurgimiento de los cRPG de los últimos años hace que tu típico juego de rol de Bethesda parezca una fácil aventura de acción. La última entrada de la majestuosa serie Pillars of Eternity tiene un sesgo más bucanero mientras navegas con una tripulación por islas llenas de aventuras y peligros.\nAgregando combate naval a la mezcla, Deadfire continúa con la rica narración y la excelente escritura de su predecesor mientras se basa en esos hermosos gráficos y fondos pintados a mano del juego original. Este es un juego de rol profundo e incuestionablemente difícil que puede hacer que algunos lo rechacen, pero aquellos que lo adopten estarán absorbidos en su mundo durante meses. "
        },

        {
            title: 'Left 4 Dead 2',
            genre: 'FPS, Horror, Survival',
            image: 'images/games/game_left_4_dead_2.jpg',
            value: 5,
            free: 0,
            text: "No es necesario guardar progresos, no hay rutina ni compromiso, es solo un juego que puedes jugar con algunos amigos, luego irte y no quedarte atrás en las cosas. Es tan sencillo que solo necesitas tomar un arma, apuntar y disparar. Con tan pocos juegos cooperativos existentes en la actualidad, especialmente tan pocos que permitan el modo cooperativo de 4 jugadores, Left 4 Dead 2 siempre tendrá poder de permanencia. Es una de las mejores opciones que tendrás para jugar con tus amigos.\nEl juego presenta pantanos, ciudades, cementerios y muchos más entornos para mantener las cosas interesantes y horribles. Las armas no son súper tecnológicas, pero brindan una experiencia realista considerando que es un juego antiguo."
        },
    ]

    */

    const armarCards = (arrCards) => {
        let arrListado = [];
        
        arrCards.forEach(function(objCarta, ind){

            let c = (
                
                <Col md={{span: 8, offset: 2}}>
                    <CardRecomendadosPage title={objCarta.title} image={objCarta.image} value={objCarta.value} free={objCarta.free} genre={objCarta.genre} text={objCarta.text} />
                </Col>
            )

            arrListado.push(c);
        });

        return arrListado;
    }

    return(
        <div class="container main text-center pt-2">

            <PageTitle titulo="Recomendados" />

            <div class="row g-2 mt-2 text-start">
            {loading ? (<p>cargando...</p>) : (
                    juegos.map(
                        item => <RecomendadoItem 
                                    nombre = {item.nombre} id_genero={item.id_genero} genero={item.genero} gratis={item.gratis} 
                                    valoracion={item.valoracion} recomendado={item.recomendado} nota={item.nota} 
                                    img_id={item.img_id} imagen={item.imagen}
                                />
                        )
                )}
            </div>

        </div>
    )
}

export default RecomendadosPage;