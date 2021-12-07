import React, {useState, useEffect} from 'react';
import axios from 'axios'

import PageTitle from '../components/layout/PageTitle'
import RecomendadoItem from '../components/juegos/RecomendadoItem'

const RecomendadosPage = (props) => {

    const urlJuegos = 'http://localhost:3000/api/recomendados';

    //const {nombre, id_genero, genero, gratis, valoracion, recomendado, nota, img_id, imagen} = props;

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