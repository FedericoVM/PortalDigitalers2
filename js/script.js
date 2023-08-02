const noticias = [
  {
    titulo: "Telecom lanza 1.500 becas para que aprender programación",
    "url-imagen":
      "https://www.clarin.com/img/2023/04/11/BWQmcS0M7_1256x620__1.jpg",
    descripcion:
      "Telecom lanzó una nueva convocatoria de su programa de cursos gratuitos de programación y oficios digitales para mayores de 18 años.",
    "dd-mm-yy": "11/04/2023",
  },

  {
    titulo:
      "Trabajos tech en Argentina: cuál es el sueldo promedio y qué puestos se pagan mejor",
    "url-imagen":
      "https://www.clarin.com/img/2022/11/10/h8vpmN9Fr_1256x620__1.jpg",
    descripcion:
      "Una encuesta de OpenQube (Sysarmy) revela que un 34% del sector IT tiene su salario dolarizado. Aumentos y carreras más buscadas.",
    "dd-mm-yy": "25/07/2023",
  },

  {
    titulo: "Google se lanza a escribir noticias con inteligencia artificial",
    "url-imagen":
      "https://s3.abcstatics.com/abc/www/multimedia/tecnologia/2023/07/20/google-2-U71314217643JCz-268x188@abc.jpg",
    descripcion:
      "Según explican desde la tecnológica a ABC, también podrían sugerir titulares y mejorar el estilo del periodista",
    "dd-mm-yy": "21-07-2023",
  },

  {
    titulo:
      "Ingeniero de Prompt, la carrera que nace por el furor de ChatGPT: de qué se trata y cuánto se puede ganar",
    "url-imagen":
      "https://www.clarin.com/img/2023/04/25/XEWM7iFcm_1256x620__1.jpg",
    descripcion:
      "Estos nuevos profesionales se especializan en la creación de contenido para sistemas de inteligencia artificial y chatbots.",
    "dd-mm-yy": "17/07/2023",
  },

  {
    titulo:
      "Regalan hasta $500.000 a los programadores que quieran seguir estudiando: cómo acceder",
    "url-imagen":
      "https://www.clarin.com/img/2021/01/20/jfBH7QvON_1256x620__1.jpg",
    descripcion:
      "Tendrán prioridad aquellas personas que no estén trabajando. La inscripción arranca hoy, quiénes pueden anotarse.",
    "dd-mm-yy": "17/07/1994",
  },

  {
    titulo:
      "Trabajar en tecnología: lanzan un portal para jóvenes que buscan su primer empleo en el sector",
    "url-imagen":
      "https://www.clarin.com/img/2022/03/14/PEEWkiBC1_1256x620__1.jpg",
    descripcion:
      "La plataforma, desarrollada por CESSI, está apuntada a estudiantes de programación full stack, ingeniería o sistemas, entre otros.",
    "dd-mm-yy": "13/07/2023",
  },

  {
    titulo:
      "Argentina, entre las regiones donde más creció el desarrollo de software: más del 40% según GitHub",
    "url-imagen":
      "https://www.clarin.com/img/2023/04/01/l_DPWr0MC_1256x620__1.jpg",
    descripcion:
      "La plataforma colaborativa de código publicó un reporte donde el país destaca por sobre el resto.",
    "dd-mm-yy": "13/07/2023",
  },

  {
    titulo:
      "Meta presenta un traductor capaz de operar en tiempo real con 200 idiomas",
    "url-imagen":
      "https://imagenes.elpais.com/resizer/-yIFptusu_vKc6oSDlZVb5IJlMo=/414x311/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XNH4MA3X3SA5RXPHG4H2ZMDHJY.jpg",
    descripcion:
      "La compañía pretende que el sistema, apoyado en una tecnología puntera, impulse las conversaciones en sus redes sociales y en el futuro metaverso",
    "dd-mm-yy": "06/07/2023",
  },

  {
    titulo:
      "Aprender realidad aumentada desde cero: cómo anotarse en la capacitación de Meta para jóvenes argentinos",
    "url-imagen":
      "https://www.clarin.com/img/2022/12/02/H_KjsD4CR_1256x620__1.jpg",
    descripcion:
      "La compañía de Mark Zuckerberg anunció el lanzamiento de un nuevo programa. A quiénes está dirigido.",
    "dd-mm-yy": "13/12/2022",
  },

  {
    titulo: "Harvard ofrece un curso gratis para hacer trabajo remoto",
    "url-imagen":
      "https://www.cronista.com/files/image/484/484932/635a92f540447_950_534!.webp?s=07ec0b8eb52b1b82bd8de0b4487f46a7&d=1666880537&oe=jpg",
    descripcion:
      "La prestigiosa universidad de EE.UU. brinda un curso gratuito de programación que tiene corta duración. Cuáles son las principales características de la cursada.",
    "dd-mm-yy": "11/05/2023",
  },
];

const comentarios = [
  {
    email: "matias_gonzales@hotmail.com",
    comentario: "Me encanta este portal con las noticias mas recientes",
  },

  {
    email: "belen_vm@gmail.com",
    comentario: "Siempre brindando las mejores noticias",
  },
  {
    email: "emmanuel_123@hotmail.com",
    comentario: "Por fin obtuve una beca para hacer el curso de digitalers!!!",
  },
];

const contenedor_noticias = document.getElementById("contenedor-noticias");
const contenedor_comentarios = document.getElementById(
  "contenedor-comentarios"
);
const inputEmail = document.getElementById("inputEmail");
const inputTextarea = document.getElementById("inputTextarea");
const form = document.querySelector("form");

const mostrarNoticias = (listaNoticias) => {
  listaNoticias.forEach((noticia) => {
    const col = document.createElement("div");
    col.className = "col col-md-6 col-lg-4";
    const tarjeta = `
        <div class="card mt-2 mx-auto  ">
            <img src= ${noticia["url-imagen"]} class="card-img-top" style="height: 13rem;" alt="...">
            <div class="card-body h-25">
                <h5 class="card-title fw-bolder text-uppercase" style = "color:#40128B " >${noticia.titulo}</h5>
                <p class="card-text overflow-auto fw-semibold"> ${noticia.descripcion} </p>
                <a href="#" class="btn btn-primary  border-0" style = " background-color:#743dcc ; color: #F1F1F1;
                font-weight: 600;" >Ver mas</a>
            </div>
            <div class="card-footer text-muted">
                ${noticia["dd-mm-yy"]}
            </div> 
        </div> 
    `;

    col.innerHTML += tarjeta;
    contenedor_noticias.appendChild(col);
  });
};

const mostrarComentarios = (listaComentarios) => {
  listaComentarios.forEach((usuario) => {
    const card_comentario = `

                <div class="card d-flex flex-column align-items-center d-md-flex flex-md-row align-items-md-center col-lg-8">
                    <div>
                        <img src="./assets/img/opiniones/avatar.jpg" class="img-avatar" alt="">
                    </div class="d-flex flex-column align-items-center ">
                    <div class="card-body">
                        <h6 class="fw-bold">${usuario.email}</h6>
                        <p>${usuario.comentario}</p>
                    </div>
                </div>
        
        `;

    contenedor_comentarios.innerHTML += card_comentario;
  });
};

const agregarComentario = (e) => {
  e.preventDefault();
  const nuevoComentario = {
    email: e.target.email.value,
    comentario: e.target.comentario.value,
  };

  comentarios.push(nuevoComentario);
  contenedor_comentarios.innerHTML = "";
  Swal.fire({
    position: "center",
    icon: "success",
    title: "El comentario fue cargado correctamente!",
    showConfirmButton: false,
    timer: 1800,
  });
  mostrarComentarios(comentarios);
};

form.addEventListener("submit", agregarComentario);

window.addEventListener("load", () => {
  mostrarNoticias(noticias);

  mostrarComentarios(comentarios);
});
