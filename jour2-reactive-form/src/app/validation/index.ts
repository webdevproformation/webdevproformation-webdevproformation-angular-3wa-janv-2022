import { AbstractControl , ValidationErrors , Validators } from "@angular/forms";

export class ValidationPersonnalise {
    static espaceInterdit( control : AbstractControl) : ValidationErrors | null {
        if(control.value != null && (control.value as string).indexOf(" ") >= 0 ){
            return {
                espaceInterdit : true ,
                message : "le symbole espace est interdit"
            }
        }
        return null
    }
    static isValidAdresse( control : AbstractControl) : ValidationErrors | null{
        const pattern = /^[0-9]{2} .+/ ;
        // const pattern2 = new RegExp("^[0-9]{2} .+") ;

        if(control.value != null && !pattern.test(control.value)){
            return {
                isValidAdresse : true ,
                message : "veuillez respecter le pattern suivant ^[0-9]{2} .+"
            }
        }
        return null ;
    }
}

export const superValidation = function(min = 5 , max = 100 , reste = []){
    return[
        Validators.minLength(min) , 
        Validators.maxLength(max),
        ...reste
      ]
}