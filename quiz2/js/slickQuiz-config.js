// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Prueba tu conocimiento!!",
        "main":    "<p>Sabes lo suficiente sobre el juicio moral?!</p>",
        "results": "<h5>Aprende más en</h5><p>CETYS Universidad</p> ",
        "level1":  "Pregunta 1",
        "level2":  "Pregunta 2",
        "level3":  "Pregunta 3",
        "level4":  "Pregunta 4",
        "level5":  "Pregunta 5" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Definición de Moral:",
            "a": [
                {"option": "Práctica de los valores",      "correct": false},
                {"option": "La moral es la aplicación práctica de la norma que entraña el mandato ético",     "correct": true},
                {"option": "Una pared de arte",      "correct": false},
                {"option": "Vivir bajo normas sociales",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correcto!</span> Muy bien!</p>",
            "incorrect": "<p><span>Uhh no.</span> Leiste la presentación? <em>ve</em> de vuelta al jardín de niños</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "La moral se basa en:",
            "a": [
                {"option": "Valores personales y Costumbres aprendidas",               "correct": true},
                {"option": "Valores aprendidos y Costumbres personales",   "correct": false},
                {"option": "Costumbres socales",               "correct": false},
                {"option": "Valores empresariales", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Tu elección es la correcta.</p>",
            "incorrect": "<p><span>Hmmm.</span> Creo que no pusiste atención en clase</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Tipos de Moral",
            "a": [
                {"option": "Moral heterogenea y social",           "correct": false},
                {"option": "Moral heterogenea y autónoma",                  "correct": false},
                {"option": "Moral heterónoma y autónoma",  "correct": true},
                {"option": "Moral social y personal",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brillante!</span> Eres realmente un genio, (wo)man.</p>",
            "incorrect": "<p><span>Ni cerca.</span> Intenta más tarde</p>" // no comma here
        },
        { // Question 4
            "q": "El juicio moral es:",
            "a": [
                {"option": "La reflexión, jerarquización y aplicación de los valores para la toma de decisiones",    "correct": true},
                {"option": "lucha constante en nuestro interior",     "correct": false},
                {"option": "bueno ponerse en práctica",      "correct": false},
                {"option": "todas las edades",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span>Realmente no esperaba que supieras esa! Correcto!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. Perdiste. La reflexión, jerarquización y aplicación de los valores para la toma de decisiones.</p>" // no comma here
        },
        { // Question 5
            "q": "Elementos del juicio Moral",
            "a": [
                {"option": "Motivaciones, Emociones",    "correct": false},
                {"option": "Medios, Comunicación, Emociones",    "correct": false},
                {"option": "Fines, Motivaviones, Emociones, Medios",    "correct": false},
                {"option": "Fines Medios, Motivaciones, Consecuencias",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Debes ser muy obervador!</p>",
            "incorrect": "<p><span>ERRRROORRR!</span>" // no comma here
        } // no comma here
    ]
};
