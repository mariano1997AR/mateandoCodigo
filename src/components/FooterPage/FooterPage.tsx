import './FooterPage.css';
import { Link } from 'react-router-dom';
import { Whatsapp } from '../Whatsapp/Whatsapp';


export const FooterPage = ()=>{
    return(
        <>
               <footer className='container-footer'>
                <section className="container-footer-pc top-line-copy">
                    <section className='columna-container desaparecer-columnas'>
                        <article className='columna-redes-sociales'>
                            <ul className='submenu-redesociales'>
                                <li className="logo-footer">© {new Date().getFullYear()} Mateando<span className='logo-oscuro'> Código</span></li>
                            </ul>

                        </article>
                        <article className='columna-redes-sociales'>
                            <ul >
                                <li className='subtitulo-footer'><b>Nuestra politicas</b></li>
                                <li><Link to='/terminos-condiciones' className="link" >Terminos y condiciones</Link></li>
                                <li><a href="#principal">Inicio</a></li>
                                <li><a href="#contacto">Contacto</a></li>
                            </ul>
                        </article>

                        <article className='columna-redes-sociales'>
                            <ul>
                                <li className='subtitulo-footer'><b>Sociales</b></li>
                                <li><a target="_blank" className="link" href="https://www.linkedin.com/company/tensiora-electric/?viewAsMember=true">Linkedln</a></li>
                                <li><a target='_blank' className='link' href="https://www.reddit.com/user/ScaryWeakness1024/">Reddit</a></li>
                                
                            </ul>
                        </article>
                    </section>

               

                </section>
                <section className="container-footer-dispositivos">
                    <header className="logo-dispositivo">Mateando<span className='logo-oscuro'> Código</span> ™</header>
                    <ul className={` submenu-footer-dispositivo `}>
                        <li><Link to='/terminos-condiciones'   > Términos y Condiciones</Link></li>
                        <li><a target='_blank' className='link' href="https://wa.me/5491133550437?text=Hola,%20quiero%20hablar%20contigo">Whatsapp</a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/tensiora-automatic/?viewAsMember=true">Linkedln</a></li>

                    </ul>
                </section>
                    {/*vamos hacia abajo para abrir el chatbot */}  
                <span id='chatbot'></span>
                <Whatsapp />

            
             

            </footer>
        
        </>
    )
}