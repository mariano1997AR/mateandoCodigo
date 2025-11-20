import './Portfolio.css';
import imagenPromocional from '../../assets/presentacion/imagen-abogadoc-promocional.png';
import { Meta,Title } from 'react-head';

export const Portfolio = () => {
    return (
        <>
            <Title>Portfolio | Mateando Codigo</Title>
            <Meta name="keywords" content="Portfolio, proyectos de mateando codigo,sistemas" />
            <Meta name='description' content='portfolio de trabajo sobre análisis de datos y desarrollo de sitios web con React y TypeScript para pymes, emprendedores y profesionales. Transformá tu negocio digital.' />
            <Meta property='og:title' content='portfolio de trabajo' />
            <Meta property='og:description' content='Soluciones en análisis de datos y desarrollo web profesional.' />
            <Meta property='og:type' content='website' />



            {/* caracteristicas extensivas  */}


            <section className='container-sector-mas-caracteristicas' id='portfolio' >
                <article className='subtitulo-mas-funcionalidades'>
                    <h1 className='text-center py-2 mx-5 subtitulo-mas-funcionalidades'  ><b>Productos de Software</b></h1>
                    <p className='text-center parrafo-mas-funcionalidades'>Son los demos de nuestro productos de software</p>
                </article>

                <article className='container-card-caracteristica mas-funcionalidad-card'>
                    <article className='cards pb-10 '>
                        <article  >
                            <img className='imagen-promocional svg-image' src={imagenPromocional} alt="es una imagen de muestra de la aplicación abogaDOC" loading='lazy' />
                        </article>
                        <h4 className='text-sm py-2 mx-5 text-center subtitulo-funcionalidades'>AbogaDOC App</h4>
                        <p className='text-sm parrafo-automatizado'>
                            Es un sistema de gestión de casos en donde vas a poseer varios modulos para poder tener tu propio estudio.


                        </p>
                        <a className='pb-5' href="https://aboga-do-ccliente.vercel.app/" target='_blank'>Abrir App</a>
                    </article>



                </article>
            </section>



        </>
    )
}