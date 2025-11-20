import './Inicio.css';
import { useState, useEffect, useRef } from 'react';
import { Title, Meta } from 'react-head';
import excelLogo from '../../assets/brands/excel-logo-400x400.webp';
import pandasLogo from '../../assets/brands/pandas-logo.webp';
import powerbilogo from '../../assets/brands/power-bi-logo.webp';
import jupyterLogo from '../../assets/brands/jupyter-seeklogo.webp';
import presentacionUnoInicio from '../../assets/presentacion/presentacion-uno-mateando-codigo.webp';
import { Contacto } from '../Contacto/Contacto';
import { Carrousel } from '../../components/Carrousel/Carrousel';
import nosotros from '../../assets/logo/Mateando-codigo.png';
import googlestudiodata from '../../assets/brands/google-data-studio-seeklogo.webp';
import presentacionDosInicio from '../../assets/presentacion/presentacion-dos-mateando-codigo.webp';
import presentacionTresInicio from '../../assets/presentacion/presentacion-tres-mateando-codigo.webp';


const frases = [
    "Bienvenido a Mateando™, tu socio en análisis de datos y desarrollo web.",
    "Asesoría personalizada para tu empresa o emprendimiento.",
    "Sin tecnicismos: hablás directamente con quien desarrolla.",
    "Trabajo con herramientas modernas, seguras y escalables.",
    "Simplificamos tus pedidos con calcular",
    "Te acompaño en todo el proceso: desde la idea hasta la implementación.",

]
const brands = [

    excelLogo,
    pandasLogo,
    powerbilogo,
    jupyterLogo,
    googlestudiodata

]


export const Inicio = () => {

    const [fraseActual, setFraseActual] = useState<string>(frases[0]);
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const carouselRef = useRef<any>(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()


    }, []);



    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollleft += 1;
                if (carouselRef.current.scrollleft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollleft = 0;
                }
            }
        };

        const interval = setInterval(scrollCarousel);
        return () => clearInterval(interval);

    }, [])
    return (
        <>
            <Title>Inicio | Mateando Codigo</Title>
            <Meta name='title' content='Desarrollo de Apps, Dashboards y Análisis de Negocios'></Meta>
            <Meta name="keywords" content="desarrollo de aplicaciones,dashboards empresariales, análisis de negocios, analítica para pymes, optimización comercial, transformación digital, software para negocios, métricas empresariales" />
            <Meta name='description' content='Somos una empresa dedicada al desarrollo de aplicaciones, dashboards y análisis de negocios. Ayudamos a pymes y comercios a descubrir oportunidades, optimizar decisiones y mejorar su rentabilidad mediante métricas claras y estrategias basadas en datos' />
            <Meta property='og:title' content='Servicios de Análisis de Datos y Sitios Web' />
            <Meta property='og:description' content='Soluciones en análisis de datos y desarrollo web profesional.' />
            <Meta property='og:type' content='website' />
            <main className='container-inicio'>


                {/* caracteristicas principales de calcular AI */}

                <section>
                    <section className='desaparecer-pc aparecer-phone'>
                        <h1 className='text-center py-2 mx-2 titulo-version-mobile'>Bienvenidos  </h1>
                        <p className="text-center parrafo-presentacion-phone ">
                            <strong> {fraseActual}</strong>
                        </p>
                    </section>

                </section>

                <section>
                    <article ref={ref} className={`zoom-animado py-4 ${visible ? 'visible' : ''}`} id="servicios">
                        <h1 className='text-center titulo-caracteristica ' >Sobre Mateando Codigo</h1>
                        <Carrousel images={[presentacionUnoInicio, presentacionDosInicio, presentacionTresInicio]} interval={4000} />
                        <section className='container-info-mateandocodigo'>
                            <article className='item-left-container-inicio'>
                                <h2 className='text-center text-2xl'>¿Que es Mateando Código?</h2>
                                <p className='indent-8 py-2'>
                                    Somos una empresa dedicada al desarrollo de aplicaciones, dashboards empresariales y análisis de negocios. Nuestro enfoque está en identificar el verdadero potencial de cada producto o servicio mediante métricas precisas y datos confiables, acompañados por el trabajo de nuestros expertos.
                                </p>
                                <p className='indent-8 py-2'>
                                    Nacimos a partir de una necesidad real: ayudar a empresas en momentos difíciles, cuando la rentabilidad baja y ya no es posible invertir en grandes volúmenes de mercadería. En esos escenarios críticos, los pequeños y medianos comercios necesitan información clara, herramientas digitales accesibles y acompañamiento cercano para tomar decisiones inteligentes.
                                </p>
                                <p className='indent-8 py-2'>
                                    Por eso, nuestro propósito es brindar soluciones tecnológicas que potencien el crecimiento, optimicen los recursos y acerquen a cada negocio a su máximo rendimiento. Creemos en la cercanía, en el valor humano y en transformar datos en decisiones que marcan la diferencia.
                                </p>
                            </article>
                            <article className='item-right-container-inicio'>
                                <img src={nosotros} alt="" loading='lazy' />

                            </article>
                        </section>

                        <article className='py-4'>
                            <h2 className=' text-2xl text-center my-2'>Estas son nuestras áreas de trabajo: </h2>
                        </article>
                        <article>
                            <article className='container-card-caracteristica py-4'>
                                <article className='cards'>
                                    <article className='svg-container'>
                                        <svg className='svg-negocios' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M2295 5100 c-322 -68 -609 -258 -791 -525 -78 -115 -117 -191 -159
-318 -54 -160 -68 -264 -63 -457 3 -91 8 -173 13 -182 7 -17 -27 -18 -624 -18
-618 0 -631 0 -651 -20 -19 -19 -20 -33 -20 -380 0 -434 -12 -400 140 -400
l100 0 0 -1320 0 -1320 -100 0 c-87 0 -103 -3 -120 -20 -27 -27 -27 -93 0
-120 20 -20 33 -20 2540 -20 2507 0 2520 0 2540 20 13 13 20 33 20 60 0 68
-22 80 -140 80 l-100 0 0 1320 0 1320 100 0 c152 0 140 -34 140 400 0 347 -1
361 -20 380 -20 20 -33 20 -651 20 -597 0 -631 1 -624 18 5 9 10 91 13 182 5
183 -8 285 -54 431 -139 443 -508 776 -963 869 -135 27 -395 27 -526 0z m385
-154 c41 -3 116 -17 166 -30 383 -104 683 -404 791 -792 26 -92 28 -112 28
-284 -1 -193 -5 -222 -57 -375 -95 -276 -337 -533 -609 -647 -172 -71 -233
-83 -439 -83 -171 0 -192 2 -284 28 -390 109 -684 403 -794 796 -25 88 -27
111 -27 281 0 170 2 193 28 283 107 387 411 691 791 792 90 24 252 45 306 39
14 -2 59 -5 100 -8z m-1313 -1578 c15 -40 30 -76 31 -80 2 -5 -276 -8 -617 -8
l-621 0 0 80 0 80 589 0 589 0 29 -72z m3593 -8 l0 -80 -621 0 c-341 0 -619 3
-617 8 2 4 16 40 31 80 l29 72 589 0 589 0 0 -80z m-3450 -260 c6 -11 33 -47
61 -80 l50 -60 -731 0 -730 0 0 80 0 80 670 0 c656 0 670 0 680 -20z m3450
-60 l0 -80 -730 0 -731 0 50 60 c28 33 55 69 61 80 10 20 24 20 680 20 l670 0
0 -80z m-3110 -271 c72 -49 214 -117 308 -149 127 -42 245 -60 402 -60 157 0
275 18 402 60 94 32 236 100 308 149 l45 31 703 0 702 0 0 -1160 0 -1160 -720
0 -720 0 0 653 c0 618 -1 658 -20 731 -63 248 -268 453 -516 516 -53 14 -111
20 -184 20 -73 0 -131 -6 -184 -20 -248 -63 -453 -268 -516 -516 -19 -73 -20
-113 -20 -731 l0 -653 -720 0 -720 0 0 1160 0 1160 703 0 702 0 45 -31z m878
-564 c172 -54 328 -216 366 -380 4 -16 9 -38 12 -47 5 -17 -26 -18 -546 -18
-520 0 -551 1 -546 18 3 9 8 31 12 47 32 140 172 303 310 361 121 52 267 59
392 19z m-248 -1325 l0 -720 -240 0 -240 0 0 720 0 720 240 0 240 0 0 -720z
m640 0 l0 -720 -240 0 -240 0 0 720 0 720 240 0 240 0 0 -720z m-1280 -640 l0
-80 -720 0 -720 0 0 80 0 80 720 0 720 0 0 -80z m2880 0 l0 -80 -720 0 -720 0
0 80 0 80 720 0 720 0 0 -80z"/>
                                                <path d="M2420 4780 c-18 -18 -20 -33 -20 -180 0 -147 2 -162 20 -180 13 -13
33 -20 60 -20 27 0 47 7 60 20 18 18 20 33 20 180 0 147 -2 162 -20 180 -13
13 -33 20 -60 20 -27 0 -47 -7 -60 -20z"/>
                                                <path d="M2100 4700 c-18 -18 -20 -33 -20 -180 0 -147 2 -162 20 -180 13 -13
33 -20 60 -20 27 0 47 7 60 20 18 18 20 33 20 180 0 147 -2 162 -20 180 -13
13 -33 20 -60 20 -27 0 -47 -7 -60 -20z"/>
                                                <path d="M2740 4700 c-18 -18 -20 -33 -20 -180 0 -147 2 -162 20 -180 13 -13
33 -20 60 -20 27 0 47 7 60 20 18 18 20 33 20 180 0 147 -2 162 -20 180 -13
13 -33 20 -60 20 -27 0 -47 -7 -60 -20z"/>
                                                <path d="M1780 4140 c-19 -19 -20 -33 -20 -328 0 -342 3 -361 67 -484 65 -124
197 -229 342 -272 79 -23 543 -23 622 0 157 46 284 152 352 296 l42 87 80 1
c120 1 200 48 239 142 22 53 22 303 0 356 -38 92 -119 141 -231 142 -66 0 -73
2 -73 20 0 11 -9 29 -20 40 -20 20 -33 20 -700 20 -667 0 -680 0 -700 -20z
m1260 -327 c-1 -303 -22 -386 -124 -489 -98 -97 -190 -124 -436 -124 -246 0
-338 27 -436 124 -102 103 -123 186 -124 489 l0 187 560 0 560 0 0 -187z m264
93 c42 -17 56 -55 56 -148 0 -117 -32 -158 -126 -158 l-34 0 0 160 0 160 35 0
c20 0 51 -6 69 -14z"/>
                                                <path d="M960 2381 c-144 -46 -269 -147 -333 -269 -68 -131 -67 -117 -67 -724
0 -535 0 -548 20 -568 19 -19 33 -20 540 -20 507 0 521 1 540 20 20 20 20 33
20 568 0 607 1 594 -66 723 -64 122 -179 217 -317 264 -95 31 -249 34 -337 6z
m320 -182 c78 -37 153 -108 189 -181 54 -107 87 -98 -349 -98 -432 0 -400 -8
-356 87 45 95 137 176 239 209 69 22 210 14 277 -17z m-240 -839 l0 -400 -160
0 -160 0 0 400 0 400 160 0 160 0 0 -400z m480 0 l0 -400 -160 0 -160 0 0 400
0 400 160 0 160 0 0 -400z"/>
                                                <path d="M3814 2372 c-169 -59 -287 -177 -346 -346 l-28 -81 0 -552 c0 -540 0
-553 20 -573 19 -19 33 -20 540 -20 507 0 521 1 540 20 20 20 20 33 20 573 l0
552 -28 81 c-59 168 -178 287 -346 346 -69 24 -97 28 -186 28 -89 0 -117 -4
-186 -28z m346 -173 c78 -37 153 -108 189 -181 54 -107 87 -98 -349 -98 -432
0 -400 -8 -356 87 45 95 137 176 239 209 69 22 210 14 277 -17z m-240 -839 l0
-400 -160 0 -160 0 0 400 0 400 160 0 160 0 0 -400z m480 0 l0 -400 -160 0
-160 0 0 400 0 400 160 0 160 0 0 -400z"/>
                                            </g>
                                        </svg>



                                    </article>
                                    <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Restaurantes y Cafeterias</h4>
                                    <ul className='text-sm lista-automatizada'>
                                         <li> - Optimización del menú</li>
                                         <li> - Determinar precios correctos(Pricing)</li>
                                         <li> - Análisis de horarios con alta demanda y personal</li>
                                         <li> - Predicción de demanda semanal </li>
                                    
                                    </ul>
                                </article>
                                <article className='cards'>
                                    <article className='svg-container'>
                                        <svg className='svg-negocios' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M2360 5105 c-329 -66 -614 -305 -737 -617 l-26 -68 -592 0 -592 0
-27 -26 -26 -27 0 -247 0 -247 26 -27 c24 -23 34 -26 100 -26 l74 0 0 -219 0
-219 31 -26 c42 -35 96 -35 138 0 l31 26 0 219 0 219 418 0 418 0 37 -89 c101
-238 293 -431 527 -532 129 -55 199 -70 353 -76 155 -6 249 5 366 44 280 94
514 316 617 585 l26 68 414 0 414 0 0 -1410 0 -1410 -345 0 -345 0 0 892 0
891 -25 43 c-15 26 -43 54 -69 69 l-43 25 -963 0 -963 0 -43 -25 c-26 -15 -54
-43 -69 -69 l-25 -43 0 -891 0 -892 -350 0 -350 0 0 788 c0 871 4 819 -65 842
-26 9 -44 9 -70 0 -69 -23 -65 29 -65 -842 l0 -788 -74 0 c-66 0 -76 -3 -100
-26 l-26 -27 0 -173 0 -174 -24 0 c-13 0 -35 -12 -50 -26 l-26 -27 0 -247 0
-247 26 -27 27 -26 2247 0 2247 0 27 26 26 27 0 247 0 247 -26 27 c-15 14 -37
26 -50 26 l-24 0 0 174 0 173 -26 27 c-24 23 -34 26 -100 26 l-74 0 0 1410 0
1410 74 0 c66 0 76 3 100 26 l26 27 0 247 0 247 -26 27 -27 26 -592 0 -593 0
-26 68 c-120 314 -408 553 -744 618 -91 17 -304 17 -392 -1z m389 -216 c154
-35 317 -137 423 -265 62 -74 142 -237 162 -331 21 -93 20 -254 0 -346 -35
-157 -144 -335 -267 -437 -78 -64 -239 -143 -337 -165 -96 -21 -244 -21 -340
0 -41 9 -120 38 -175 65 -172 84 -281 193 -365 365 -59 122 -80 212 -80 345 0
133 21 223 80 345 84 172 193 281 365 365 178 87 337 104 534 59z m-1189 -769
l0 -100 -500 0 -500 0 0 100 0 100 500 0 500 0 0 -100z m3000 0 l0 -100 -500
0 -500 0 0 100 0 100 500 0 500 0 0 -100z m-2100 -2260 l0 -860 -400 0 -400 0
0 860 0 860 400 0 400 0 0 -860z m1000 0 l0 -860 -400 0 -400 0 0 860 0 860
400 0 400 0 0 -860z m1100 -1160 l0 -100 -2000 0 -2000 0 0 100 0 100 2000 0
2000 0 0 -100z m100 -400 l0 -100 -2100 0 -2100 0 0 100 0 100 2100 0 2100 0
0 -100z"/>
                                                <path d="M2353 4694 c-24 -14 -54 -44 -68 -68 -21 -36 -25 -55 -25 -124 l0
-82 -82 0 c-69 0 -88 -4 -124 -25 -26 -15 -54 -43 -69 -69 -24 -41 -25 -49
-25 -206 0 -157 1 -165 25 -206 15 -26 43 -54 69 -69 36 -21 55 -25 124 -25
l82 0 0 -82 c0 -69 4 -88 25 -124 15 -26 43 -54 69 -69 41 -24 49 -25 206 -25
157 0 165 1 206 25 26 15 54 43 69 69 21 36 25 55 25 124 l0 82 82 0 c69 0 88
4 124 25 26 15 54 43 69 69 24 41 25 49 25 206 0 157 -1 165 -25 206 -15 26
-43 54 -69 69 -36 21 -55 25 -124 25 l-82 0 0 82 c0 69 -4 88 -25 124 -15 26
-43 54 -69 69 -41 24 -49 25 -207 25 -158 0 -166 -1 -206 -26z m307 -298 c0
-120 1 -124 26 -150 26 -25 30 -26 150 -26 l124 0 0 -100 0 -100 -124 0 c-120
0 -124 -1 -150 -26 -25 -26 -26 -30 -26 -150 l0 -124 -100 0 -100 0 0 124 c0
120 -1 124 -26 150 -26 25 -30 26 -150 26 l-124 0 0 100 0 100 124 0 c120 0
124 1 150 26 25 26 26 30 26 150 l0 124 100 0 100 0 0 -124z"/>
                                                <path d="M2086 2034 c-26 -26 -26 -28 -26 -174 0 -146 0 -148 26 -174 21 -21
36 -26 74 -26 38 0 53 5 74 26 26 26 26 28 26 174 0 146 0 148 -26 174 -21 21
-36 26 -74 26 -38 0 -53 -5 -74 -26z"/>
                                                <path d="M2886 2034 c-26 -26 -26 -28 -26 -174 0 -146 0 -148 26 -174 21 -21
36 -26 74 -26 38 0 53 5 74 26 26 26 26 28 26 174 0 146 0 148 -26 174 -21 21
-36 26 -74 26 -38 0 -53 -5 -74 -26z"/>
                                                <path d="M613 3075 c-39 -17 -53 -42 -53 -95 0 -89 100 -132 169 -74 26 22 31
33 31 71 0 57 -14 81 -55 99 -42 17 -51 17 -92 -1z"/>
                                            </g>
                                        </svg>


                                    </article>


                                    <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Clinicas pequeñas y Consultorios</h4>
                                   
                                    <ul className='text-sm  lista-automatizada'>
                                        <li> - Optimización de turnos</li>
                                        <li> - Reducción de ausentismo</li>
                                        <li> - Análisis por demanda por profesionalidad</li>
                                        <li> - Optimización de precios</li>
                                    </ul>
                                </article>
                                <article className='cards'>
                                    <article className='svg-container' >
                                        <svg className='svg-negocios' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                            width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                                            preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            </metadata>
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M3048 5095 c-14 -14 -28 -39 -32 -56 -3 -18 -6 -269 -6 -560 l0 -529
-937 0 c-516 0 -955 -3 -975 -6 -21 -4 -49 -18 -63 -32 l-25 -25 0 -543 0
-544 -427 0 -427 0 -28 -27 -28 -27 0 -1273 0 -1273 -24 0 c-71 0 -104 -119
-48 -173 l28 -27 2504 0 2504 0 28 27 c39 38 40 108 2 147 -15 14 -37 26 -50
26 l-24 0 0 2089 0 2090 -22 25 c-32 35 -1823 716 -1884 716 -31 0 -48 -6 -66
-25z m999 -541 l763 -289 0 -2027 0 -2028 -115 0 -115 0 0 1617 0 1617 -27 28
c-22 23 -35 28 -74 28 -57 0 -93 -31 -103 -88 -3 -20 -6 -749 -6 -1619 l0
-1583 -175 0 -175 0 0 1839 0 1838 -26 27 c-21 21 -36 26 -74 26 -58 0 -94
-31 -104 -88 -3 -20 -6 -848 -6 -1839 l0 -1803 -175 0 -175 0 0 1839 0 1838
-25 25 c-27 28 -69 38 -157 38 l-58 0 0 460 0 460 33 -13 c17 -8 375 -144 794
-303z m-787 -1004 l0 -190 -689 0 -688 0 -27 -26 c-21 -21 -26 -36 -26 -74 0
-38 5 -53 26 -74 l27 -26 688 0 689 0 0 -180 0 -180 -269 0 -269 0 -26 -31
c-35 -42 -35 -96 0 -138 l26 -31 269 0 269 0 0 -180 0 -180 -269 0 -269 0 -26
-31 c-18 -21 -26 -42 -26 -69 0 -27 8 -48 26 -69 l26 -31 269 0 269 0 0 -174
0 -175 -266 -3 -266 -3 -29 -33 c-41 -45 -41 -102 0 -143 l29 -29 266 0 266 0
0 -174 0 -175 -266 -3 -266 -3 -29 -33 c-41 -45 -41 -102 0 -143 l29 -29 266
0 266 0 0 -355 0 -355 -360 0 -360 0 0 1269 0 1268 -26 27 -27 26 -633 0 -634
0 0 470 0 470 1020 0 1020 0 0 -190z m-930 -2145 l0 -1195 -1010 0 -1010 0 0
1195 0 1195 1010 0 1010 0 0 -1195z"/>
                                                <path d="M4406 3914 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36
-26 74 -26 38 0 53 5 74 26 36 37 36 100 0 143 -22 27 -32 31 -74 31 -38 0
-53 -5 -74 -26z"/>
                                                <path d="M1486 3334 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36
-26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36
26 -74 26 -38 0 -53 -5 -74 -26z"/>
                                                <path d="M548 2294 c-15 -8 -32 -23 -38 -34 -14 -25 -14 -565 0 -591 24 -45
53 -49 332 -49 243 0 265 2 295 20 47 28 53 65 53 325 0 260 -6 297 -53 325
-30 18 -52 20 -297 20 -214 -1 -270 -4 -292 -16z m432 -329 l0 -135 -135 0
-135 0 0 135 0 135 135 0 135 0 0 -135z"/>
                                                <path d="M1508 2294 c-15 -8 -32 -23 -38 -34 -14 -25 -14 -565 0 -591 24 -45
53 -49 330 -49 277 0 306 4 330 49 14 26 14 566 0 592 -25 45 -53 49 -332 49
-213 -1 -268 -4 -290 -16z m432 -329 l0 -135 -140 0 -140 0 0 135 0 135 140 0
140 0 0 -135z"/>
                                                <path d="M548 1334 c-15 -8 -32 -23 -38 -34 -14 -25 -14 -565 0 -591 24 -45
53 -49 332 -49 243 0 265 2 295 20 47 28 53 65 53 325 0 260 -6 297 -53 325
-30 18 -52 20 -297 20 -214 -1 -270 -4 -292 -16z m432 -329 l0 -135 -135 0
-135 0 0 135 0 135 135 0 135 0 0 -135z"/>
                                                <path d="M1508 1334 c-15 -8 -32 -23 -38 -34 -14 -25 -14 -565 0 -591 24 -45
53 -49 330 -49 277 0 306 4 330 49 14 26 14 566 0 592 -25 45 -53 49 -332 49
-213 -1 -268 -4 -290 -16z m432 -329 l0 -135 -140 0 -140 0 0 135 0 135 140 0
140 0 0 -135z"/>
                                            </g>
                                        </svg>

                                    </article>
                                    <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Sector Inmobiliario</h4>
                        
                                    <ul className='text-sm lista-automatizada'>
                                        <li> - Análisis de precios de mercado</li>
                                        <li> - Análisis de demanda por zona</li>
                                        <li> - Tiempo promedio de venta o alquiler (Time to sell/Rent)</li>
                                        <li> - Análisis de competencia en portales</li>
                                     
                                    </ul>
                                </article>
                            </article>
                        </article>
                    </article>
                </section>



                {/* sector de marcas con que se trabaja */}


                <section className='carousel-container-brand'>
                    <section className='carousel-track' ref={carouselRef}>
                        {[...brands, ...brands].map((brand, index) => (
                            <img key={index} src={brand} alt='Brand Logo' className='brand-logo' loading='lazy' />
                        ))}
                    </section>
                </section>



                {/* sector de contacto  */}

                <section className='py-5' id='contacto'>
                    <h4 className='text-center'>Contacto</h4>
                    <Contacto />
                </section>


            </main>
        </>
    )
}