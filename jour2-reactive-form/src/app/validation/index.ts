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
}

export const superValidation = function(min = 5 , max = 100 , reste = []){
    return[
        Validators.minLength(min) , 
        Validators.maxLength(max),
        ...reste
      ]
}