import jsPDF from 'jspdf';

export interface DatosPDF {
    nombreEmisor: string;
    nombreEmpresaPedido: string;
    nombreNegocio: string;
    localidad: string;
    direccion: string;
    telefono: string;
    firma: string; // base64
    email: string;
}

const terminos = [
    {
        titulo: "1. Aceptación de los Términos",
        texto:
            "Al acceder y utilizar este sitio web o nuestros servicios, usted acepta cumplir con los presentes términos y condiciones. Si no está de acuerdo, le recomendamos no utilizar nuestros servicios.",
    },
    {
        titulo: "2. Descripción del Servicio",
        texto:
            "Ofrecemos servicios de análisis de datos y desarrollo web personalizados. Nos reservamos el derecho de modificar o interrumpir temporal o permanentemente cualquier servicio sin previo aviso.",
    },
    {
        titulo: "3. Propiedad Intelectual",
        texto:
            "Todo el contenido del sitio, incluyendo textos, imágenes, código y logotipos, es propiedad exclusiva de la empresa o de sus licenciantes y está protegido por leyes de propiedad intelectual.",
    },
    {
        titulo: "4. Confidencialidad y Datos Personales",
        texto:
            "Nos comprometemos a proteger la privacidad de los usuarios y a utilizar sus datos únicamente para los fines establecidos en nuestra política de privacidad.",
    },
    {
        titulo: "5. Limitación de Responsabilidad",
        texto:
            "No seremos responsables por daños directos o indirectos que resulten del uso o imposibilidad de uso de los servicios ofrecidos.",
    },
    {
        titulo: "6. Modificaciones",
        texto:
            "Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación.",
    },
    {
        titulo: "7. Legislación Aplicable",
        texto:
            "Estos términos se rigen por las leyes vigentes en Chile y Uruguay, según corresponda al país donde se brinde el servicio.",
    },
];



export const generarPDF = (datos: DatosPDF) => {
    const datosUsuario = [
        {
            titulo: 'Nombre del cliente',
            datos: `${datos.nombreEmpresaPedido}`
        },
        {
            titulo:'Localidad del cliente',
            datos:`${datos.localidad}`
        },
        {
            titulo:'Dirección del cliente',
            datos:`${datos.direccion}`
        },
        {
            titulo:'Teléfono del cliente',
            datos:`${datos.telefono}`
        },
        {
            titulo:'Email del cliente',
            datos:`${datos.email}`
        },
        
   
    ]

    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
    });

    const marginLeft = 40;
    let y = 60;

    // Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Términos y Condiciones", marginLeft, y);
    y += 30;

    // Contenido
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    terminos.forEach((item) => {
        doc.setFont("helvetica", "bold");
        doc.text(item.titulo, marginLeft, y);
        y += 18;

        doc.setFont("helvetica", "normal");

        // Ajustar texto largo con splitTextToSize
        const textoDividido = doc.splitTextToSize(item.texto, 500);
        doc.text(textoDividido, marginLeft, y);
        y += textoDividido.length * 14 + 10;

        // Nueva página si el contenido excede el límite
        if (y > 750) {
            doc.addPage();
            y = 60;
        }
    });

    
    // Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Datos del cliente", marginLeft + 200, y);
    y += 30;

    datosUsuario.forEach((item) => {
        doc.setFont("helvetica", "bold");
        doc.text(item.titulo, marginLeft, y);
        y += 15;
        doc.setFont("helvetica", "normal");
        // Ajustar texto largo con splitTextToSize
        const textoDividido = doc.splitTextToSize(item.datos, 500);
        doc.text(textoDividido, marginLeft, y);
        y += textoDividido.length * 14 + 10;
        // Nueva página si el contenido excede el límite
        if (y > 750) {
            doc.addPage();
            y = 60;
        }
    });

    
    if (datos.firma) {
        doc.setFont("helvetica", "bold");
        doc.text('Firma del cliente', 250, y+10);
        doc.addImage(datos.firma, 'PNG', 30, y + 10, 180, 60);
    }




    // Pie de página
    doc.setFontSize(10);
    doc.text(
        "© 2025 Mateando Código | Servicios de Análisis de Datos y Desarrollo Web",
        marginLeft ,
        830
    );

   
    doc.save(`comprobante_${datos.nombreEmpresaPedido}.pdf`);
}