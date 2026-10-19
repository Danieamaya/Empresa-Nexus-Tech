/* =========================================
   NEXUS TECH
   FUNCIONES INTERACTIVAS
========================================= */


/* =========================================
   DATOS DE LAS ÁREAS DE LA MAQUETA
========================================= */

const areas = {

    ia: {
        tag: "LABORATORIO DE IA + REALIDAD VIRTUAL",

        title: "Laboratorio de Inteligencia Artificial",

        description:
            "Esta área representa un espacio destinado a la investigación, experimentación y desarrollo de soluciones basadas en inteligencia artificial. En la maqueta, la Realidad Virtual forma parte de este laboratorio como una tecnología que permite crear experiencias digitales inmersivas.",

        represents:
            "Un espacio donde pueden analizarse datos, desarrollar sistemas inteligentes, experimentar con automatización y crear experiencias de Realidad Virtual.",

        knowledge:
            "Inteligencia artificial, análisis de datos, programación, automatización, procesamiento de información y tecnologías inmersivas.",

        contribution:
            "Permite que NEXUS TECH explore nuevas tecnologías y desarrolle soluciones innovadoras para diferentes necesidades."
    },


    hardware: {
        tag: "LABORATORIO DE HARDWARE",

        title: "Laboratorio de Hardware",

        description:
            "Esta área representa el espacio dedicado al trabajo con los componentes físicos de los equipos informáticos.",

        represents:
            "Un lugar donde se pueden ensamblar computadoras, realizar mantenimiento, identificar componentes y estudiar el funcionamiento interno de un equipo.",

        knowledge:
            "Componentes de PC, arquitectura de computadoras, ensamblaje, mantenimiento preventivo y correctivo y diagnóstico de hardware.",

        contribution:
            "Permite ofrecer equipos funcionales y servicios técnicos, además de garantizar que los sistemas utilizados por la empresa trabajen correctamente."
    },


    software: {
        tag: "DESARROLLO DE SOFTWARE",

        title: "Área de Software",

        description:
            "Esta área representa el desarrollo de aplicaciones y soluciones digitales que responden a necesidades específicas de personas y empresas.",

        represents:
            "Un espacio de trabajo para programadores y desarrolladores donde se pueden crear aplicaciones, sitios web y sistemas de información.",

        knowledge:
            "Programación, diseño web, bases de datos, análisis de requerimientos, interfaces de usuario y desarrollo de aplicaciones.",

        contribution:
            "Permite transformar necesidades reales en herramientas digitales que facilitan procesos y mejoran la gestión de información."
    },


    ventas: {
        tag: "PRODUCTOS Y SERVICIOS",

        title: "Área de Productos y Ventas",

        description:
            "Esta zona representa el espacio donde NEXUS TECH presenta sus productos y soluciones tecnológicas a sus clientes.",

        represents:
            "Una zona comercial donde pueden mostrarse equipos de cómputo, componentes, periféricos y diferentes soluciones tecnológicas.",

        knowledge:
            "Conocimiento de hardware, características técnicas, sistemas informáticos y asesoría tecnológica.",

        contribution:
            "Permite conectar las necesidades del cliente con el producto o solución tecnológica más adecuada."
    },


    reunion: {
        tag: "GESTIÓN Y ATENCIÓN AL CLIENTE",

        title: "Sala de Reuniones",

        description:
            "La sala de reuniones representa el espacio donde NEXUS TECH puede recibir clientes y planificar proyectos tecnológicos.",

        represents:
            "Un espacio para conversar con clientes, conocer sus necesidades, presentar propuestas, organizar proyectos y coordinar equipos de trabajo.",

        knowledge:
            "Análisis de requerimientos, planificación de proyectos, comunicación, gestión empresarial y conocimientos tecnológicos.",

        contribution:
            "Ayuda a comprender correctamente las necesidades del cliente antes de diseñar y desarrollar una solución."
    },


    cafeteria: {
        tag: "ESPACIO DE CONVIVENCIA",

        title: "Cafetería",

        description:
            "La cafetería representa un espacio de convivencia dentro de la empresa.",

        represents:
            "Un lugar donde los integrantes del equipo pueden descansar, conversar e intercambiar ideas de manera informal.",

        knowledge:
            "Aunque no es un laboratorio tecnológico, forma parte de la organización de una empresa porque favorece la comunicación y colaboración del equipo.",

        contribution:
            "Favorece un ambiente laboral equilibrado y puede facilitar el intercambio de ideas entre los integrantes de la empresa."
    },


    well: {
        tag: "NEXUS WELL",

        title: "NEXUS WELL",

        description:
            "NEXUS WELL representa el espacio de bienestar y descanso de la empresa.",

        represents:
            "Una zona destinada a que las personas puedan tomar un descanso, convivir y despejarse durante la jornada.",

        knowledge:
            "Se relaciona con la organización de espacios laborales y con la importancia de crear ambientes adecuados para el trabajo tecnológico.",

        contribution:
            "Contribuye al bienestar del equipo y complementa las áreas técnicas de NEXUS TECH."
    }

};


/* =========================================
   MODAL DE ÁREAS
========================================= */

const modal = document.getElementById("area-modal");

const modalClose = document.getElementById("modal-close");

const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalRepresents = document.getElementById("modal-represents");
const modalKnowledge = document.getElementById("modal-knowledge");
const modalContribution = document.getElementById("modal-contribution");


document.querySelectorAll(".area-card").forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.area;

        const area = areas[key];

        if (!area) return;

        modalTag.textContent = area.tag;

        modalTitle.textContent = area.title;

        modalDescription.textContent = area.description;

        modalRepresents.textContent = area.represents;

        modalKnowledge.textContent = area.knowledge;

        modalContribution.textContent = area.contribution;

        modal.classList.add("open");

        modal.setAttribute("aria-hidden", "false");

    });

});


function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =========================================
   LABORATORIO DE IA
========================================= */

const aiButtons =
    document.querySelectorAll("[data-ai]");

const aiResult =
    document.getElementById("ai-result");

let correctAI = 0;


aiButtons.forEach(button => {

    button.addEventListener("click", () => {

        const type =
            button.dataset.ai;

        if (button.classList.contains("selected")) {
            return;
        }

        button.classList.add("selected");

        if (type === "correct") {

            correctAI++;

            button.style.borderColor =
                "#35dc8b";

            button.style.color =
                "#35dc8b";

            aiResult.innerHTML =
                `Dato útil seleccionado. Has identificado ${correctAI} dato(s) relevantes. Una IA necesita información relacionada con el problema que se desea analizar.`;

        } else {

            button.style.borderColor =
                "#d86666";

            button.style.color =
                "#d86666";

            aiResult.textContent =
                "Ese dato no aporta información útil para predecir el mantenimiento del equipo. La selección de datos relevantes es fundamental para entrenar un sistema de IA.";

        }

        if (correctAI >= 4) {

            aiResult.innerHTML =
                "<strong>MODELO PREPARADO ✓</strong><br><br>" +
                "Has seleccionado los principales datos útiles: temperatura, historial de fallas, horas de uso y errores registrados. Estos datos pueden ayudar a identificar patrones relacionados con el mantenimiento.";

        }

    });

});


/* =========================================
   ARMADO DE PC
========================================= */

const hardwareSteps = [

    {
        id: "component-motherboard",

        title: "Instala la placa madre",

        description:
            "La placa madre conecta los principales componentes del computador y permite que se comuniquen entre sí."
    },

    {
        id: "component-cpu",

        title: "Instala el procesador",

        description:
            "El CPU procesa instrucciones y realiza las operaciones necesarias para ejecutar los programas."
    },

    {
        id: "component-ram",

        title: "Instala la memoria RAM",

        description:
            "La RAM almacena temporalmente los datos que el sistema necesita utilizar mientras está funcionando."
    },

    {
        id: "component-storage",

        title: "Instala el almacenamiento",

        description:
            "El SSD permite guardar de forma permanente el sistema operativo, programas y archivos."
    },

    {
        id: "component-gpu",

        title: "Instala la tarjeta gráfica",

        description:
            "La GPU procesa información gráfica y puede ser especialmente importante para diseño, videojuegos, edición y aplicaciones visuales."
    },

    {
        id: "component-power",

        title: "Conecta la fuente de poder",

        description:
            "La fuente de poder proporciona la energía eléctrica necesaria para que los diferentes componentes puedan funcionar."
    }

];


let hardwareIndex = 0;

const hardwareStep =
    document.getElementById("hardware-step");

const hardwareTitle =
    document.getElementById("hardware-title");

const hardwareDescription =
    document.getElementById("hardware-description");

const hardwareButton =
    document.getElementById("hardware-button");


function updateHardware() {

    if (hardwareIndex < hardwareSteps.length) {

        const step =
            hardwareSteps[hardwareIndex];

        hardwareStep.textContent =
            `${hardwareIndex} / ${hardwareSteps.length}`;

        hardwareTitle.textContent =
            step.title;

        hardwareDescription.textContent =
            step.description;

        hardwareButton.textContent =
            "Instalar componente";

    } else {

        hardwareStep.textContent =
            `${hardwareSteps.length} / ${hardwareSteps.length}`;

        hardwareTitle.textContent =
            "SYSTEM READY ✓";

        hardwareDescription.textContent =
            "La PC NEXUS ha sido ensamblada correctamente. Ahora todos los componentes trabajan como parte de un mismo sistema.";

        hardwareButton.textContent =
            "Reiniciar ensamblaje";

    }

}


hardwareButton.addEventListener("click", () => {

    if (hardwareIndex >= hardwareSteps.length) {

        hardwareIndex = 0;

        document
            .querySelectorAll(".pc-component")
            .forEach(component => {

                component.classList.remove("show");

            });

        updateHardware();

        return;

    }


    const step =
        hardwareSteps[hardwareIndex];

    const component =
        document.getElementById(step.id);

    if (component) {

        component.classList.add("show");

    }

    hardwareIndex++;

    updateHardware();

});


updateHardware();


/* =========================================
   SOFTWARE
========================================= */

const solutionOptions =
    document.querySelectorAll(".solution-option");

const solutionButton =
    document.getElementById("solution-button");

const solutionResult =
    document.getElementById("solution-result");


let selectedSolutions = [];


solutionOptions.forEach(option => {

    option.addEventListener("click", () => {

        const solution =
            option.dataset.solution;

        if (
            selectedSolutions.includes(solution)
        ) {

            selectedSolutions =
                selectedSolutions.filter(
                    item => item !== solution
                );

            option.classList.remove("selected");

        } else {

            selectedSolutions.push(solution);

            option.classList.add("selected");

        }

    });

});


solutionButton.addEventListener("click", () => {

    const required = [
        "database",
        "web",
        "admin"
    ];

    const correct =
        required.every(
            item => selectedSolutions.includes(item)
        );


    if (
        correct &&
        !selectedSolutions.includes("paper")
    ) {

        solutionResult.innerHTML =
            "<strong>SOLUCIÓN NEXUS GENERADA ✓</strong><br><br>" +
            "Base de datos + aplicación web + panel de administración. " +
            "Esta combinación permitiría almacenar información, " +
            "consultarla desde una interfaz y administrar el inventario.";

    } else {

        solutionResult.textContent =
            "La solución necesita integrar una base de datos, una aplicación web y un panel de administración. Piensa en qué elementos permitirían almacenar, consultar y administrar la información.";

    }

});


/* =========================================
   QUIZ DE INFORMÁTICA
========================================= */

const questions = [

    {
        question:
            "¿Qué componente almacena información de forma permanente?",

        answers: [
            ["SSD", "correct"],
            ["RAM", "wrong"],
            ["Procesador", "wrong"],
            ["Fuente de poder", "wrong"]
        ]
    },

    {
        question:
            "¿Qué componente se encarga principalmente de ejecutar instrucciones?",

        answers: [
            ["Procesador", "correct"],
            ["Monitor", "wrong"],
            ["Gabinete", "wrong"],
            ["Teclado", "wrong"]
        ]
    },

    {
        question:
            "¿Para qué se utiliza principalmente una base de datos?",

        answers: [
            ["Almacenar y organizar información", "correct"],
            ["Aumentar el brillo del monitor", "wrong"],
            ["Reemplazar la fuente de poder", "wrong"],
            ["Enfriar el procesador", "wrong"]
        ]
    },

    {
        question:
            "¿Qué tecnología permite conectar dispositivos para compartir recursos e información?",

        answers: [
            ["Red informática", "correct"],
            ["Procesador", "wrong"],
            ["SSD", "wrong"],
            ["Memoria RAM", "wrong"]
        ]
    },

    {
        question:
            "¿Cuál de estas actividades pertenece al desarrollo de software?",

        answers: [
            ["Programar una aplicación", "correct"],
            ["Limpiar físicamente un teclado", "wrong"],
            ["Cambiar una silla", "wrong"],
            ["Organizar una cafetería", "wrong"]
        ]
    },

    {
        question:
            "¿Qué caracteriza a la inteligencia artificial?",

        answers: [
            ["Puede analizar datos y reconocer patrones", "correct"],
            ["Solo sirve para almacenar archivos", "wrong"],
            ["Es un tipo de cable", "wrong"],
            ["Es una fuente de energía", "wrong"]
        ]
    },

    {
        question:
            "¿Qué función cumple principalmente la memoria RAM?",

        answers: [
            ["Mantener temporalmente datos utilizados por el sistema", "correct"],
            ["Guardar archivos permanentemente", "wrong"],
            ["Mostrar imágenes por sí sola", "wrong"],
            ["Proporcionar electricidad", "wrong"]
        ]
    },

    {
        question:
            "¿Qué objetivo tiene la Realidad Virtual?",

        answers: [
            ["Crear experiencias digitales inmersivas", "correct"],
            ["Reemplazar la memoria RAM", "wrong"],
            ["Servir como fuente de poder", "wrong"],
            ["Almacenar archivos permanentemente", "wrong"]
        ]
    }

];


let questionIndex = 0;
let quizScore = 0;


const questionNumber =
    document.getElementById("question-number");

const quizScoreElement =
    document.getElementById("quiz-score");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const quizResult =
    document.getElementById("quiz-result");

const nextQuestion =
    document.getElementById("next-question");


function loadQuestion() {

    const current =
        questions[questionIndex];

    questionNumber.textContent =
        `PREGUNTA ${questionIndex + 1} / ${questions.length}`;

    questionElement.textContent =
        current.question;

    answersElement.innerHTML = "";

    quizResult.textContent =
        "Selecciona una respuesta.";

    nextQuestion.classList.add("hidden");


    current.answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.textContent =
            answer[0];

        button.dataset.answer =
            answer[1];

        button.addEventListener(
            "click",
            selectAnswer
        );

        answersElement.appendChild(button);

    });

}


function selectAnswer(event) {

    const buttons =
        answersElement.querySelectorAll("button");

    buttons.forEach(button => {

        button.disabled = true;

    });


    const selected =
        event.currentTarget;

    if (
        selected.dataset.answer === "correct"
    ) {

        quizScore++;

        selected.style.borderColor =
            "#35dc8b";

        selected.style.color =
            "#35dc8b";

        quizResult.textContent =
            "✓ Respuesta correcta.";

    } else {

        selected.style.borderColor =
            "#d86666";

        selected.style.color =
            "#d86666";

        quizResult.textContent =
            "Respuesta incorrecta. Revisa el concepto y continúa.";

        buttons.forEach(button => {

            if (
                button.dataset.answer === "correct"
            ) {

                button.style.borderColor =
                    "#35dc8b";

                button.style.color =
                    "#35dc8b";

            }

        });

    }


    quizScoreElement.textContent =
        `PUNTOS: ${quizScore}`;

    nextQuestion.classList.remove("hidden");

}


nextQuestion.addEventListener("click", () => {

    questionIndex++;

    if (
        questionIndex < questions.length
    ) {

        loadQuestion();

    } else {

        finishQuiz();

    }

});


function finishQuiz() {

    questionNumber.textContent =
        "RETO COMPLETADO";

    questionElement.textContent =
        `Has obtenido ${quizScore} de ${questions.length} puntos.`;

    answersElement.innerHTML = "";

    nextQuestion.classList.add("hidden");


    if (quizScore === questions.length) {

        quizResult.innerHTML =
            "<strong>¡NEXUS ARCHITECT! ✓</strong><br>" +
            "Dominaste el reto de informática.";

    } else if (quizScore >= 6) {

        quizResult.innerHTML =
            "<strong>¡NEXUS TECH SPECIALIST! ✓</strong><br>" +
            "Tienes muy buenos conocimientos de informática.";

    } else if (quizScore >= 4) {

        quizResult.innerHTML =
            "<strong>EXPLORADOR NEXUS ✓</strong><br>" +
            "Buen comienzo. Sigue fortaleciendo tus conocimientos.";

    } else {

        quizResult.innerHTML =
            "Reto completado. La tecnología siempre ofrece algo nuevo que aprender.";

    }

}


loadQuestion();


/* =========================================
   CERRAR MODAL CON ESC
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});