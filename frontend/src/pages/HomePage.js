import PageTitle from '../components/layout/PageTitle'
import CarouselHomePage from '../components/layout/CarouselHomePage'

const HomePage = (props) => {
    return (
        <div class="container main text-center pt-2">

        <PageTitle titulo="Juegos nativos para tu sistema operativo favorito" />

        <div class="row">
            <div class="col col-md-8 offset-md-2 col-sm-12">
                <CarouselHomePage/>
            </div>
        </div>

    </div>
    )
}

export default HomePage;