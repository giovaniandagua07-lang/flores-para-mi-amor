javascript
/* ==================================
   ABRIR CARTA
================================== */

function abrirCarta() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("carta").style.display = "flex";

    crearCorazones();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================
   MOSTRAR FINAL
================================== */

function mostrarFinal() {

    document.getElementById("carta").style.display = "none";

    document.getElementById("final").style.display = "flex";

    crearMuchosCorazones();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================
   PREGUNTA FINAL
================================== */

function preguntaFinal() {

    document.getElementById("modal").style.display = "flex";

    crearMuchosCorazones();

}


/* ==================================
   CERRAR MODAL
================================== */

function cerrarModal() {

    document.getElementById("modal").style.display = "none";

}


/* ==================================
   CORAZONES
================================== */

function crearCorazones() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.classList.add(
                "corazon-flotante"
            );

            const opciones = [
                "💛",
                "❤️",
                "💕",
                "💖",
                "🌻"
            ];

            corazon.innerHTML =
                opciones[
                    Math.floor(
                        Math.random() *
                        opciones.length
                    )
                ];

            corazon.style.left =
                Math.random() * 100 + "%";

            corazon.style.fontSize =
                (20 + Math.random() * 25) + "px";

            corazon.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            document.body.appendChild(
                corazon
            );

            setTimeout(() => {

                corazon.remove();

            }, 8000);

        }, i * 150);

    }

}


/* ==================================
   MUCHOS CORAZONES
================================== */

function crearMuchosCorazones() {

    for (let i = 0; i < 50; i++) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.classList.add(
                "corazon-flotante"
            );

            const opciones = [
                "❤️",
                "💛",
                "💖",
                "💕",
                "🌻",
                "🌷",
                "🤍"
            ];

            corazon.innerHTML =
                opciones[
                    Math.floor(
                        Math.random() *
                        opciones.length
                    )
                ];

            corazon.style.left =
                Math.random() * 100 + "%";

            corazon.style.fontSize =
                (18 + Math.random() * 35) + "px";

            corazon.style.animationDuration =
                (3 + Math.random() * 5) + "s";

            document.body.appendChild(
                corazon
            );

            setTimeout(() => {

                corazon.remove();

            }, 9000);

        }, i * 100);

    }
}
