import "./sectionCurriculum.css"
import CurriculumCards from "../componentes/CurriculumCards";

function sectionCurriculum() {
    return (
        <section className="curriculum">
            <div className="content-curriculum">
                <h1>Curriculum</h1>
                <CurriculumCards />
            </div>
        </section>
    );
}

export default sectionCurriculum;