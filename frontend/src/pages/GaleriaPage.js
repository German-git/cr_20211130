import PageTitle from '../components/layout/PageTitle'
import AccordionGaleriaPage from '../components/layout/AccordionGaleriaPage'
import CardGaleriaPage from '../components/layout/CardGaleriaPage'

const GaleriaPage = (props) => {

    const arrCards = [
        {
            title: 'Pillars of Eternity II: Deadfire',
            genre: 'RPG',
            image: 'images/games/game_pillars_of_eternity_2_deadfire.jpg',
            value: 5,
            free: 0
        },
        {
            title: 'Total War: Warhammer 2',
            genre: 'Strategy',
            image: 'images/games/game_total_war_warhammer_2.jpg',
            value: 5,
            free: 0
        },
        {
            title: 'Left 4 Dead 2',
            genre: 'FPS',
            image: 'images/games/game_left_4_dead_2.jpg',
            value: 4,
            free: 0
        },
        {
            title: 'BioShock Infinite',
            genre: 'FPS',
            image: 'images/games/game_bioshiock_infinite.jpg',
            value: 5,
            free: 0
        },
        {
            title: 'CS Go',
            genre: 'FPS',
            image: 'images/games/game_cs_go.jpg',
            value: 5,
            free: 1
        },
        {
            title: 'Champions of Regnum',
            genre: 'MMORPG',
            image: 'images/games/game_champions_of_regnum.jpg',
            value: 3,
            free: 1
        },
        {
            title: 'Skullgirls',
            genre: 'Fighting',
            image: 'images/games/game_skullgirls.jpg',
            value: 4,
            free: 0
        },
        {
            title: 'Alien Isolation',
            genre: 'survival horror, action-adventure, stealth',
            image: 'images/games/game_alien_isolation.jpg',
            value: 5,
            free: 0
        },
        {
            title: '0 A.D.',
            genre: 'Strategy',
            image: 'images/games/game_0ad.jpg',
            value: 4,
            free: 1
        },
    ]

    const armarCards = (arrCards) => {
        let arrListado = [];
        
        arrCards.forEach(function(objCarta, ind){

            let c = (

                <div class="col col-md-4 col-sm-12">
                    <CardGaleriaPage title={objCarta.title} image={objCarta.image} value={objCarta.value} free={objCarta.free} genre={objCarta.genre} />
                </div>
            )

            arrListado.push(c);
        });

        return arrListado;
    }

    return (
        <div class="container main text-center pt-2">

            <PageTitle titulo="Encuentra los mejores juegos para GNU/Linux" />

            <div class="row">
                <div class="col col-sm-12">
                    <AccordionGaleriaPage />
                </div>
            </div>

            <div class="row g-2 mt-2 text-start">
                {armarCards(arrCards)}
            </div>

        </div>
    )
}

export default GaleriaPage;