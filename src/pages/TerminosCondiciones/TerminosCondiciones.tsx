import './TerminosCondiciones.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { generarPDF, type DatosPDF } from '../../utils/generarPDF';
import { Meta, Title } from 'react-head';
import { FirmaDigital } from '../../components/FirmaDigital/FirmaDigital';


interface FormData {
    nombreEmisor: string;
    nombreEmpresaPedido: string;
    nombreNegocio: string;
    localidad: string;
    direccion: string;
    telefono: string;
    email: string;

}


export const TerminosCondiciones = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [firma, setFirma] = useState<string>('');
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const onSubmit = (data: FormData) => {
        if (!firma) {
            return;
        }

        const datosPDF: DatosPDF = { ...data, firma };
        generarPDF(datosPDF);
    }

    return (
        <>
            <Title>Términos y condiciones | Mateando Codigo</Title>
            <Meta name="keywords" content="análisis de datos, desarrollo web, React, landing page, automatización, SEO, Argentina" />
            <Meta name='description' content='Ofrezco análisis de datos y desarrollo de sitios web con React y TypeScript para pymes, emprendedores y profesionales. Transformá tu negocio digital.' />
            <Meta property='og:title' content='Servicios de Análisis de Datos y Sitios Web' />
            <Meta property='og:description' content='Soluciones en análisis de datos y desarrollo web profesional.' />
            <Meta property='og:type' content='website' />



            <main>
               
                <section className="container-politica-privacidad" >
                    <section className='container-politicas'>
                        <article className='terminos-condiciones'>
                            <h1 className='terminos-privacidad text-center'><u>TÉRMINOS Y CONDICIONES DE USO</u></h1>
                            <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                            <h2>Bienvenido/a a Mateando Código. Al utilizar mis servicios, aceptás los siguientes términos y condiciones. Por favor, leé atentamente esta información.</h2>
                        </article>
                        <article className='pb-3 py-3'>
                            <p><b>1. Sobre la empresa</b></p>
                            <p> <strong>Mateando Código</strong> es una startup dedicada a brindar servicios de Analisis de datos, Desarrollo web y Automatización para pymes, emprendedores y profesionales independientes. Nuestro objetivo es ayudar a optimizar procesos y potenciar la presencia digital de nuestros clientes.
                            </p>
                        </article>
                        <article className='pb-3'>
                            <p><b>2. Ámbito de servicio</b></p>
                            <p>Actualmente ofrecemos nuestros servicios en Argentina,Chile y Uruguay, incluyendo análisis de datos, desarrollo de sitios web con React y TypeScript, automatización de tareas y optimización SEO para negocios digitales.

                            </p>
                        </article>
                        <article className='pb-3'>
                            <p><b>3. Solicitud de servicios</b></p>
                            <ul>
                                <li>Los servicios deben solicitarse mediante nuestros canales oficiales: WhatsApp, formulario web o contacto telefónico.</li>
                              
                               
                            </ul>
                        </article>
                        <article className='pb-3'>
                            <p><b>4. Garantía</b></p>
                            <ul>
                                <li>Cada trabajo de desarrollo. Cuenta con una garantía de 30 días corridos desde la finalización del proyecto.
                                </li>
                                <li>La garantía una devolucion del dinero una vez que el trabajo de analisis y diseño se haya realizado.</li>
                            </ul>
                        </article>
                        <article className='pb-3'>
                            <p><b>5. Formas de pago</b></p>
                            <p>Aceptamos los siguientes métodos:
                            </p>
                            <ul>
                                <li>Efectivo</li>
                                <li>Transferencia bancaria (Argentina y mundo)</li>
                                <li>Mercado Pago (Argentina)</li>
                                <li>Tarjeta de crédito o débito (según disponibilidad)</li>
                                <li>Transferencia en moneda extranjera</li>
                            </ul>
                        </article>
                 
                        <article className='pb-3'>
                            <p><b>6. Modificaciones</b></p>
                            <p>
                                Nos reservamos el derecho a modificar estos términos en cualquier momento. Los cambios serán publicados en esta misma sección.
                            </p>
                        </article>
                    </section>


                </section>

                <form onSubmit={handleSubmit(onSubmit)} className='formulario-contrato'>
                    <h1 className='text-center text-2xl'>Comprobante de cliente</h1>
                    <input placeholder='Nombre del cliente' {...register('nombreEmisor', {
                        required: 'El campo es obligatorio',
                        minLength: { value: 5, message: 'El nombre debe tener al menos 5 caracteres' }
                    })} required className='inputs' />
                    {errors.nombreEmisor && <span className='error-message'>{errors.nombreEmisor.message}</span>}

                    {/* nombre de empresa del pedido */}
                    <input placeholder='Nombre de la empresa u emprendimiento' {...register('nombreEmpresaPedido', {
                        required: 'El nombre de la empresa es obligatorio',
                        minLength: { value: 3, message: 'El nombre de la empresa debe tener al menos 3 caracteres' }
                    })} required className='inputs' />
                    {errors.nombreEmpresaPedido && <span className='error-message'>{errors.nombreEmpresaPedido.message}</span>}


                    {/*   
            <input
                type='text'
                inputMode='numeric'
                maxLength={8}
                placeholder='DNI'
                {...register('Dni', {
                    required: 'El DNI es obligatorio',
                    pattern: {
                        value: /^[0-9]{1,8}$/, 
                        message:'Solo se permite dni valido hasta 8 dígitos'
                    }
                })}
                required
                className='inputs'
            />
            {errors.Dni && <span className='error-message'>{errors.Dni.message}</span>}*/}

                    {/* campo para localidad */}
                    <input
                        placeholder='Localidad' {...register('localidad', {
                            required: 'La localidad es obligatoria',
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: 'Solo se permiten letras'
                            }
                        })}


                        required className='inputs' />
                    {errors.localidad && <span className='error-message'>{errors.localidad.message}</span>}

                    <input placeholder='Dirección' {...register('direccion', {
                        required: 'La dirección es obligatoria',
                        pattern: {
                            value: /^[A-Za-z0-9\s]+$/,
                            message: 'Solo se permiten letras y numeros'
                        }

                    })} required className='inputs' />
                    {errors.direccion && <span className='error-message'>{errors.direccion.message}</span>}
                    <input
                        type='text'
                        inputMode='tel'
                        placeholder='+54... numero de celular'
                        {...register('telefono', {
                            required: 'El teléfono es obligatorio',
                            pattern: {
                                value: /^\+?[0-9]+$/,
                                message: 'El teléfono no es válido'
                            }
                        })}
                        required
                        className='inputs'
                    />
                    {errors.telefono && <span className='error-message'>{errors.telefono.message}</span>}
                    <input
                        placeholder='Email'
                        type='email'
                        {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'El email no es válido'
                            }
                        })}
                        required
                        className='inputs'
                    />
                    {errors.email && <span className='error-message'>{errors.email.message}</span>}
                    <FirmaDigital setFirma={setFirma} />

                    <button type='submit'>Generar PDF</button>
                </form>

            </main>
        </>
    );
}   