import fotoPerfil from '../assets/avatar.avif'
import './Banner.css'

function Banner() {
    return (
        < section className = 'bannerFondo' >
            <div className='contenedor-banner'>
                <div className='sobre-mi'>
                    <h1>Hola, Soy Arley</h1>
                    <p>Desarrollador frontend apasionado por el arte, disfruto crear interfaces limpias, funcionales y visualmente armoniosas.<br /> Enfocado en escribir código claro y construir experiencias que conecten de forma auténtica con las personas.</p>
                </div>
                <div className="avatar-container">
                    <img src={fotoPerfil} alt="Arley Benavides" className="avatar-img" />
                </div>
            </div>
        </section >
    )
}

export default Banner;