import './About.css'
import { Icon } from "@iconify-icon/react";

export const About = () => {

    return (
        <section className="card">
            <section className="card__body about__body">
                <article className="about__article">
                    <h3 className="about__subtitle">Acerca de WeatherAPP</h3>
                    <p className="about__p">Les presentamos WeatherApp, una aplicación diseñada para consultar el clima en cualquier lugar del mundo, sea donde sea que estés.</p>

                    <p className="about__p">Este proyecto fue creado gracias al curso de especialización en React de Codo a Codo. El principal objetivo de WeatherApp era crear una web funcional aplicando todos nuestros conocimientos en React y utilizando tecnologías como Firebase y cualquier otro tipo de herramienta que nos ayude a concluir nuestra tarea.</p>
                </article>
                <article className="about__article">
                    <h3 className="about__subtitle">Caracteristicas</h3>
                    <p className="about__p">Dentro de esta aplicación podremos consultar el clima en tiempo real de cualquier parte del mundo, con su pronóstico diario y semanal, crear un usuario para así lograr gestionar nuestros lugares favoritos y también poder acceder mediante nuestra ubicación a la información del clima de donde nos encontremos.</p>
                </article>
                <article className="about__article">
                    <h3 className="about__subtitle">Tecnologias</h3>
                    <div className="technologies">
                        <div className="technologies__item">
                            <div className="technologies__icon">
                                <img src="/img/tec/html-5.svg" alt="" />
                            </div>
                            <h5 className="technologies__description">HTML</h5>
                        </div>
                        <div className="technologies__item">
                            <div className="technologies__icon">
                                <img src="/img/tec/css3.svg" alt="" />
                            </div>
                            <h5 className="technologies__description">CSS</h5>
                        </div>
                        <div className="technologies__item">
                            <div className="technologies__icon">
                                <img src="/img/tec/javascript.svg" alt="" />
                            </div>
                            <h5 className="technologies__description">Javascript</h5>
                        </div>
                        <div className="technologies__item">
                            <div className="technologies__icon">
                                <img src="/img/tec/react.svg" alt="" />
                            </div>
                            <h5 className="technologies__description">React</h5>
                        </div>
                        <div className="technologies__item">
                            <div className="technologies__icon">
                                <img src="/img/tec/firebase.svg" alt="" />
                            </div>
                            <h5 className="technologies__description">Firebase</h5>
                        </div>
                    </div>
                </article>
                <article className="about__article">
                    <h3 className="about__subtitle">API's</h3>
                    <ul className='about__ul'>
                        <li className='about__li'>• GeoDB Cities</li>
                        <li className='about__li'>• WeatherAPI</li>
                    </ul>
                </article>
                <article className="about__article">
                    <h3 className="about__subtitle">Librerias</h3>
                    <ul className='about__ul'>
                        <li className='about__li'>• React-awesome-reveal.</li>
                        <li className='about__li'>• React-router-dom.</li>
                        <li className='about__li'>• React-select-async-paginate.</li>
                        <li className='about__li'>• SweetAlert2.</li>
                        <li className='about__li'>• Slick-carousel.</li>
                        <li className='about__li'>• Iconify.</li>
                        <li className='about__li'>• Firebase.</li>
                    </ul>
                </article>
                <article className="about__article">
                    <a className="about__link" href="https://github.com/ch-martinez/react-weather">
                    <Icon icon="tabler:brand-github" className='about__icon-link' />  
                    REPOSITORIO EN GITHUB</a>
                </article>
            </section>
        </section>
        
    )
}