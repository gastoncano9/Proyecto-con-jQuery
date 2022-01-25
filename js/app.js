'use stict';

$(document).ready(()=>
{
    const botonVerde = $("#verde");
    const botonCeleste = $("#celeste");
    const botonRojo = $("#rojo");
    let tema = $("#tema");

    if(window.location.href.indexOf("index") >-1)
    {
        let articulos = 
        [
            {
                titulo : "Prueba de titulo 1",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            },
            {
                titulo : "Prueba de titulo 2",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            },
            {
                titulo : "Prueba de titulo 3",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            },
            {
                titulo : "Prueba de titulo 4",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            },
            {
                titulo : "Prueba de titulo 5",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            },
            {
                titulo : "Prueba de titulo 6",
                fecha : `Publicado el dia ${moment().format("Do")} de ${moment().format("MMMM")} de ${moment().format("YYYY")}`,
                cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed  dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor."
            }
        ];
    
        articulos.forEach((item, index)=>
        {
            let articulo = `
            <article class="articulo">
                <h2>${item.titulo}</h2>
                <span class = "date">${item.fecha}</span>
                <p>
                    ${item.cuerpo}
                </p>
                <a href="#">Leer màs</a>
            </article>
            `;
    
            $("#articulos").append(articulo);
        });
    }

    botonVerde.click(()=>
    {
        localStorage.clear();
        tema.attr("href","css/verde.css");
        localStorage.setItem("color","css/verde.css");
    });

    botonCeleste.click(()=>
    {
        localStorage.clear();
        tema.attr("href","css/blue.css");
        localStorage.setItem("color","css/blue.css");
    });

    botonRojo.click(()=>
    {
        localStorage.clear();
        tema.attr("href","css/rojo.css");
        localStorage.setItem("color","css/rojo.css");
    });

    if(location.reload)
    {
        for(color in localStorage)
        {   
            if(typeof localStorage[color] == "string")
            {
                tema.attr("href", localStorage[color]);
            }
        }
    }

    if(window.location.href.indexOf("index") >-1)
    {
        $(".slider").bxSlider(//Formade hacerr un slider
        {
            mode: 'fade',//tipo de efecto de transicion de uan foto y otra
            captions: true,
            slideWidth: 800//tamaño que queremos que se muestre en la pagina las imagenes
            //para cambiarles cosas puedo leer la documentacion del slider
        });
    }

    $(".subir").click(function(e)
    {
        e.preventDefault();
        $("html, body").animate(//Forma de ahcer un efecto al subir que se ejecutara para el body y para el html en si
        {
                scrollTop: 0//Hacemos que suba al pixel 0
        },500);//La cantidad de tiempo que tardara en subir

        return false;
    });

    $("#formulario").submit(function()
    {
        let nombre = $("#nombre").val();

        localStorage.setItem("Nombre", nombre)
    });

    let nombreGuardado = localStorage.getItem("Nombre");

    if(nombreGuardado != null && nombreGuardado != undefined)
    {
        let parrafoQuienSoy = $("#quien-soy p");
        parrafoQuienSoy.html(`<strong>Bienvenido ${nombreGuardado}</strong>, `);
        parrafoQuienSoy.append(" <a href = '#' id = 'cerrar'>Cerrar cesión</a>");
        $("#cerrar").click(function()
        {
            localStorage.clear();
            location.reload();
        });
        $("#formulario").hide();
    }

    if(window.location.href.indexOf("sobre-mi") >-1)
    {
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf("contacto") >-1)
    {
        $("#calendario").datepicker();
    }

    const funcionReloj = () =>
    {
        const reloj = $("#reloj");
        let fecha = new Date();
        let hora = formatoHora(fecha.getHours());
        let minutos = formatoHora(fecha.getMinutes());
        let segundos = formatoHora(fecha.getSeconds());

        reloj.text(`${hora}:${minutos}:${segundos}`);
    }

    const formatoHora = (hora) =>
    {
        if(hora<10)
        {
            hora = "0" + hora;
        }

        return hora;
    }

    setInterval(funcionReloj,1000);

    if(window.location.href.indexOf("contacto") >-1)
    {
        $.validate(
        {
            lang: "es"
        });
    }
});
