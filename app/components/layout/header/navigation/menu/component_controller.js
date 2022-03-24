import ApplicationController from '../../../../../javascript/controllers/application_controller'



/* This is the custom StimulusReflex controller for the Example Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    /*
     * Regular Stimulus lifecycle methods
     * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
     *
     * If you intend to use this controller as a regular stimulus controller as well,
     * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
     *
     * Important:
     * By default, StimulusReflex overrides the -connect- method so make sure you
     * call super if you intend to do anything else when this controller connects.
     */

    static get targets() {
        return ["funcionalities", "solutions", "languages", "snav"]
    }

    connect() {
        super.connect()
        console.log('connect header')
    }
    menu() {
        console.log('connect menu')

    }
    mouseOverFuncionalities() {
        this.funcionalitiesTarget.classList.remove("hidden")
    }
    mouseOutFuncionalities() {
        this.funcionalitiesTarget.classList.add("hidden")
    }

    mouseOverSolutions() {
        this.solutionsTarget.classList.remove("hidden")
    }
    mouseOutSolutions() {
        this.solutionsTarget.classList.add("hidden")
    }

    mouseOverLanguages() {
        this.languagesTarget.classList.remove("hidden")
    }
    mouseOutLanguages() {
        this.languagesTarget.classList.add("hidden")
    }

}