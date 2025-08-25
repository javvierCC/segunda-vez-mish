
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Javier Castillo");
                select("#aprendizaje").html("a manejar los programas relevantes para la carrera, como Illustrator y Photoshop");
                noStroke();
            }
            function draw() {
                background(131, 221, 190);
                orbitControl();
                ambientLight(200);
                let mx = mouseX - 50;
                let my = mouseY - 50;
                pointLight(255, 255, 255, mx, my, 50);
                noStroke();
                fill(30, 30, 255);
                specularMaterial(255);
                shininess(20);
                translate(0, 0, 0);
                metalness(50);
                torus(30, 15);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
