import ApplicationController from '../../../../javascript/controllers/application_controller'




//import {Controller} from "stimulus"
//import consumer from "channels/consumer";


export default class extends ApplicationController {


    static get targets() {
        return ["quees", "necesito", "incluye", "funcion", "funcion1", "funcion2", "funcion3", "funcion4", "funcion5", "funcion6", "funcion7", "funcion8", "funcion9", "funcion10", "funcion11", "sobre", "sob1", "sob2", "sob3", "sob4", "sob5", "sob6", "sob7", "sob8", "sob9", "precios", "precio1", "precio2", "seguridad", "seg1", "seg2", "seg3", "seg4", "asesoria", "ase1", "ase2", "entrenamiento", "entre1", "entre2", "arrow", "arrow2", "arrow3", "arrowf1", "arrowf2", "arrowf3", "arrowf4", "arrowf5", "arrowf6", "arrowf7", "arrowf8", "arrowf9", "arrowf10", "arrowf11", "arrows1", "arrows2", "arrows3", "arrows4", "arrows5", "arrows6", "arrows7", "arrowp1", "arrowp2", "arrowse1", "arrowse2", "arrowse3", "arrowse4", "arrowa1", "arrowa2", "arrowe1", "arrowe2"]
    }



    connect() {
        super.connect()

        console.log("test preguntas")
    }
    acordeon(event) {
        event.preventDefault()
        if (this.queesTarget.classList.contains("hidden")) {
            this.queesTarget.classList.remove("hidden")
            this.arrowTarget.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowTarget.classList.add("fa-angle-down", "text-escala-naranja")

        } else {
            this.queesTarget.classList.add("hidden")
            this.arrowTarget.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowTarget.classList.remove("fa-angle-down", "text-escala-naranja")

        }
    }
    acordeon2() {
        if (this.necesitoTarget.classList.contains("hidden")) {
            this.necesitoTarget.classList.remove("hidden")
            this.arrow2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrow2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.necesitoTarget.classList.add("hidden")
            this.arrow2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrow2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    acordeon3() {
        if (this.incluyeTarget.classList.contains("hidden")) {
            this.incluyeTarget.classList.remove("hidden")
            this.arrow3Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrow3Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.incluyeTarget.classList.add("hidden")
            this.arrow3Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrow3Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades() {
        if (this.funcionTarget.classList.contains("hidden")) {
            this.funcionTarget.classList.remove("hidden")

        } else {
            this.funcionTarget.classList.add("hidden")

        }
    }
    funcionalidades1() {
        if (this.funcion1Target.classList.contains("hidden")) {
            this.funcion1Target.classList.remove("hidden")
            this.arrowf1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion1Target.classList.add("hidden")
            this.arrowf1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades2() {
        if (this.funcion2Target.classList.contains("hidden")) {
            this.funcion2Target.classList.remove("hidden")
            this.arrowf2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion2Target.classList.add("hidden")
            this.arrowf2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades3() {
        if (this.funcion3Target.classList.contains("hidden")) {
            this.funcion3Target.classList.remove("hidden")
            this.arrowf3Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf3Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion3Target.classList.add("hidden")
            this.arrowf3Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf3Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades4() {
        if (this.funcion4Target.classList.contains("hidden")) {
            this.funcion4Target.classList.remove("hidden")
            this.arrowf4Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf4Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion4Target.classList.add("hidden")
            this.arrowf4Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf4Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades5() {
        if (this.funcion5Target.classList.contains("hidden")) {
            this.funcion5Target.classList.remove("hidden")
            this.arrowf5Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf5Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion5Target.classList.add("hidden")
            this.arrowf5Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf5Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades6() {
        if (this.funcion6Target.classList.contains("hidden")) {
            this.funcion6Target.classList.remove("hidden")
            this.arrowf6Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf6Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion6Target.classList.add("hidden")
            this.arrowf6Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf6Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades7() {
        if (this.funcion7Target.classList.contains("hidden")) {
            this.funcion7Target.classList.remove("hidden")
            this.arrowf7Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf7Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion7Target.classList.add("hidden")
            this.arrowf7Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf7Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades8() {
        if (this.funcion8Target.classList.contains("hidden")) {
            this.funcion8Target.classList.remove("hidden")
            this.arrowf8Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf8Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion8Target.classList.add("hidden")
            this.arrowf8Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf8Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades9() {
        if (this.funcion9Target.classList.contains("hidden")) {
            this.funcion9Target.classList.remove("hidden")
            this.arrowf9Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf9Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion9Target.classList.add("hidden")
            this.arrowf9Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf9Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades10() {
        if (this.funcion10Target.classList.contains("hidden")) {
            this.funcion10Target.classList.remove("hidden")
            this.arrowf10Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf10Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion10Target.classList.add("hidden")
            this.arrowf10Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf10Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    funcionalidades11() {
        if (this.funcion11Target.classList.contains("hidden")) {
            this.funcion11Target.classList.remove("hidden")
            this.arrowf11Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowf11Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.funcion11Target.classList.add("hidden")
            this.arrowf11Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowf11Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre() {
        console.log("sobre")
        if (this.sobreTarget.classList.contains("hidden")) {
            this.sobreTarget.classList.remove("hidden")

        } else {
            this.sobreTarget.classList.add("hidden")

        }
    }
    sobre1() {
        if (this.sob1Target.classList.contains("hidden")) {
            this.sob1Target.classList.remove("hidden")
            this.arrows1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob1Target.classList.add("hidden")
            this.arrows1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre2() {
        if (this.sob2Target.classList.contains("hidden")) {
            this.sob2Target.classList.remove("hidden")
            this.arrows2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob2Target.classList.add("hidden")
            this.arrows2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre3() {
        if (this.sob3Target.classList.contains("hidden")) {
            this.sob3Target.classList.remove("hidden")
            this.arrows3Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows3Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob3Target.classList.add("hidden")
            this.arrows3Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows3Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre4() {
        if (this.sob4Target.classList.contains("hidden")) {
            this.sob4Target.classList.remove("hidden")
            this.arrows4Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows4Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob4Target.classList.add("hidden")
            this.arrows4Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows4Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre5() {
        if (this.sob5Target.classList.contains("hidden")) {
            this.sob5Target.classList.remove("hidden")
            this.arrows5Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows5Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob5Target.classList.add("hidden")
            this.arrows5Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows5Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre6() {
        if (this.sob6Target.classList.contains("hidden")) {
            this.sob6Target.classList.remove("hidden")
            this.arrows6Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows6Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob6Target.classList.add("hidden")
            this.arrows6Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows6Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    sobre7() {
        if (this.sob7Target.classList.contains("hidden")) {
            this.sob7Target.classList.remove("hidden")
            this.arrows7Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrows7Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.sob7Target.classList.add("hidden")
            this.arrows7Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrows7Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    precios() {
        console.log("precios")
        if (this.preciosTarget.classList.contains("hidden")) {
            this.preciosTarget.classList.remove("hidden")

        } else {
            this.preciosTarget.classList.add("hidden")

        }
    }
    precios1() {
        if (this.precio1Target.classList.contains("hidden")) {
            this.precio1Target.classList.remove("hidden")
            this.arrowp1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowp1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.precio1Target.classList.add("hidden")
            this.arrowp1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowp1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    precios2() {
        if (this.precio2Target.classList.contains("hidden")) {
            this.precio2Target.classList.remove("hidden")
            this.arrowp2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowp2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.precio2Target.classList.add("hidden")
            this.arrowp2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowp2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }

    seguridad() {
        console.log("seguridad")
        if (this.seguridadTarget.classList.contains("hidden")) {
            this.seguridadTarget.classList.remove("hidden")

        } else {
            this.seguridadTarget.classList.add("hidden")

        }
    }
    seguridad1() {
        if (this.seg1Target.classList.contains("hidden")) {
            this.seg1Target.classList.remove("hidden")
            this.arrowse1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowse1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.seg1Target.classList.add("hidden")
            this.arrowse1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowse1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    seguridad2() {
        if (this.seg2Target.classList.contains("hidden")) {
            this.seg2Target.classList.remove("hidden")
            this.arrowse2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowse2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.seg2Target.classList.add("hidden")
            this.arrowse2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowse2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    seguridad3() {
        if (this.seg3Target.classList.contains("hidden")) {
            this.seg3Target.classList.remove("hidden")
            this.arrowse3Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowse3Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.seg3Target.classList.add("hidden")
            this.arrowse3Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowse3Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    seguridad4() {
        if (this.seg4Target.classList.contains("hidden")) {
            this.seg4Target.classList.remove("hidden")
            this.arrowse4Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowse4Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.seg4Target.classList.add("hidden")
            this.arrowse4Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowse4Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    asesoria() {
        console.log("asesoria")
        if (this.asesoriaTarget.classList.contains("hidden")) {
            this.asesoriaTarget.classList.remove("hidden")

        } else {
            this.asesoriaTarget.classList.add("hidden")

        }
    }
    asesoria1() {
        if (this.ase1Target.classList.contains("hidden")) {
            this.ase1Target.classList.remove("hidden")
            this.arrowa1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowa1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.ase1Target.classList.add("hidden")
            this.arrowa1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowa1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    asesoria2() {
        if (this.ase2Target.classList.contains("hidden")) {
            this.ase2Target.classList.remove("hidden")
            this.arrowa2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowa2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.ase2Target.classList.add("hidden")
            this.arrowa2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowa2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    entrenamiento() {
        console.log("entrenamiento")
        if (this.entrenamientoTarget.classList.contains("hidden")) {
            this.entrenamientoTarget.classList.remove("hidden")

        } else {
            this.entrenamientoTarget.classList.add("hidden")

        }
    }
    entrenamiento1() {
        if (this.entre1Target.classList.contains("hidden")) {
            this.entre1Target.classList.remove("hidden")
            this.arrowe1Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowe1Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.entre1Target.classList.add("hidden")
            this.arrowe1Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowe1Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
    entrenamiento2() {
        if (this.entre2Target.classList.contains("hidden")) {
            this.entre2Target.classList.remove("hidden")
            this.arrowe2Target.classList.remove("fa-angle-right", "text-escala-azult")
            this.arrowe2Target.classList.add("fa-angle-down", "text-escala-naranja")
        } else {
            this.entre2Target.classList.add("hidden")
            this.arrowe2Target.classList.add("fa-angle-right", "text-escala-azult")
            this.arrowe2Target.classList.remove("fa-angle-down", "text-escala-naranja")
        }
    }
}