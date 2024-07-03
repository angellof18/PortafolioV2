
const ProjectInfo = () => {
    const info = [{
        title: 'Login - Variables de sesión',
        description: 'Login con variables de sesión y validación de datos.',
        image: '/Projects/Login.webp',
        tags: ['Next js', 'MySQL', 'HTML', 'CSS'],
        repo: 'https://github.com/angellof18/login-nextjs',
        web: 'https://login-nextjs-pi.vercel.app/login'
    },
    {
        title: 'Meetus - Chat con Socket.io',
        description: "Meetus es una aplicación de chat web que utiliza Socket.io para facilitar la comunicación en tiempo real.",
        image: '/Projects/Meetus.webp',
        tags: ['React', 'MySQL', 'Socket.io', 'BulmaCSS'],
        repo: 'https://github.com/angellof18/Meetus',
        web: 'https://meetus-d2da.onrender.com/'
    },
    {
        title: 'Portafolio - Mi portafolio personal',
        description: "Portafolio personal con mis proyectos elaborados.",
        image: '/Projects/Portafolio.webp',
        tags: ['React', 'HTML', 'CSS', 'BulmaCSS'],
        repo: 'https://github.com/angellof18/PortafolioV2',
        web: 'https://portafolio-arteaga.onrender.com/'
    },
    {
        title: 'Signal (clon) - Plantilla basada en Web de Signal',
        description: "Plantilla basada en la página web de Signal, desarrollado utilizando principalmente el framework BulmaCSS.",
        image: '/Projects/Signal.webp',
        tags: ['React', 'BulmaCSS', 'CSS', 'HTML'],
        repo: 'https://github.com/angellof18/Signal_clon',
        web: 'https://signal-clon.onrender.com/'
    }
    ]
    return info
}

export default ProjectInfo