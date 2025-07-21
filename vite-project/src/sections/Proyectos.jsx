import IconoPortafolio from "../assets/portfolio.png"
import ProjectCards from "../componentes/Projectcards";
import "./Proyectos.css"

function Cards() {
    return (
        <>
            <section id="proyectos" className="section-portfolio">
                <div className="title-icon">
                    <img src={ IconoPortafolio } alt="Icono de un portafolio" className="icono-portafolio" />
                    <h2>Proyectos</h2>
                </div>
                <div className="content-cards">
                    <ProjectCards />
                </div>
            </section>
        </>
        
    );
}

export default Cards;