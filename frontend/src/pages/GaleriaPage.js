import React, {useState, useEffect} from 'react';
import axios from 'axios'

import PageTitle from '../components/layout/PageTitle'
import AccordionGaleriaPage from '../components/layout/AccordionGaleriaPage'
import JuegoItem from '../components/juegos/JuegoItem'

const GaleriaPage = (props) => {
    const urlJuegos = 'http://localhost:3000/api/juegos';

    const [loading, setLoading] = useState(false);
    const [juegos, setJuegos] = useState([]);

    const cargarJuegos = async (txtBuscar='') => {
        setLoading(true);

        const urlGet = txtBuscar !== '' ? urlJuegos + '/' + txtBuscar : urlJuegos;
        const response = await axios.get(urlGet);
        setJuegos(response.data);
        setLoading(false);
    }

    useEffect(() => {
        
        cargarJuegos();
    }, []);

    const buscar = function(){
        const txtBuscar = document.getElementById('txtBuscar').value;
        cargarJuegos(txtBuscar);
    }

    return (
        <div class="container main text-center pt-2">

            <PageTitle titulo="Encuentra los mejores juegos para GNU/Linux" />

            <div class="row">
                <div class="col col-sm-12">
                    <AccordionGaleriaPage buscar={buscar}/>
                </div>
            </div>

            <div class="row g-2 mt-2 text-start">
                {loading ? (<p>cargando...</p>) : (
                    juegos.map(
                        item => <JuegoItem 
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

export default GaleriaPage;