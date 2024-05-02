/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
import { Resend } from "resend";
import 'dotenv/config';
import { DataMail } from "./interfaces/DataMail";

const resend = new Resend(process.env.RESEND_KEY);

export const sendMail = async ({ name, email, phone, business, message }: DataMail) => {
    await resend.emails.send({
        from: 'dvnegrete.github.io <onboarding@resend.dev>',
        to: ['dvnegrete@gmail.com'],
        subject: 'Contacto desde Sitio Web',
        text: `
        Esta persona ha dejado sus datos en el sitio web para contactarla:
        
        Nombre: ${name}
        email: ${email}
        Teléfono: ${phone}

        Asunto: ${business}

        Mensaje: ${message}
    `,
    });
};

