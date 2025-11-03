import './NavbarPhone.css'
import { Link } from 'react-router-dom';


export const NavbarPhone = () => {
    return (
        <>
            <nav className="menu-container">

                <section className='logo-responsive '>

                    <Link className="a-logo mx-5 py-2 " to="/inicio">
                        Mateando<span className='etiqueta-codigo'> Código</span>
                    </Link>
                    {/* svg-logo */}

                    <svg className='svg-logo' version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M871 4530 c-12 -44 -20 -84 -17 -88 2 -4 137 -59 299 -122 l296 -115
6 -35 c11 -59 51 -109 109 -136 l52 -24 102 -219 c56 -121 102 -222 102 -224
0 -3 -29 -21 -64 -41 -81 -45 -171 -127 -199 -180 -28 -55 -29 -146 -2 -201
64 -133 287 -258 596 -334 216 -53 376 -72 664 -78 355 -7 585 15 850 82 383
96 604 253 605 429 1 357 -926 602 -1835 485 -49 -7 -95 -15 -101 -18 -7 -4
39 -115 132 -314 79 -170 144 -310 144 -313 0 -2 -60 -4 -132 -4 l-133 0 -243
521 c-232 500 -242 523 -232 558 24 88 1 171 -63 228 -48 42 -97 57 -169 50
-52 -5 -98 5 -391 84 -183 49 -337 89 -343 89 -7 0 -22 -36 -33 -80z"/>
                            <path d="M1844 2623 c18 -89 26 -171 26 -274 l0 -116 128 -42 c151 -49 342
-93 507 -118 187 -27 631 -25 820 5 168 26 307 59 476 112 l126 40 6 147 c3
82 11 174 18 206 6 31 10 60 7 62 -2 2 -27 -4 -55 -15 -79 -30 -272 -78 -401
-99 -535 -90 -1151 -54 -1582 93 -41 14 -76 26 -78 26 -2 0 -1 -12 2 -27z"/>
                            <path d="M1870 1722 c0 -274 9 -349 55 -465 32 -80 106 -196 160 -250 53 -54
547 -424 605 -453 69 -35 142 -47 245 -41 141 7 166 21 486 260 308 231 346
268 418 407 82 157 84 170 89 499 3 266 2 293 -12 288 -24 -9 -211 -63 -285
-82 -306 -78 -738 -106 -1061 -70 -170 20 -399 66 -549 111 -64 19 -124 37
-133 40 -17 5 -18 -11 -18 -244z"/>
                        </g>
                    </svg>


                </section>


                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-button py-2">☰</label>

                <ul className="menu py-1" >

                    <li><a href="https://wa.me/5491133550437" target='_blank' className='a'>Agenda</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto" className='a'>Contacto</a></li>
                 



                </ul>

            </nav>

        </>
    )
}