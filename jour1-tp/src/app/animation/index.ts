import { trigger, transition , style, keyframes , animate  } from "@angular/animations";

export const rotation =  trigger("flip" , [
    transition( "void => *" , [
      animate(1000 , keyframes([
        style({ transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)" , offset : 0 }),
        style({transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)" , offset : 0.4 }),
        style({ transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)" , offset : 0.5}), 
        style({transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)}" , offset : 1 })
      ]))
    ] )
]); 

// easing vitesse d'execution d'un animation
// https://cubic-bezier.com/#.17,.67,.83,.67

export const grossir = trigger("grossir" , [
    transition( "void => *" , [
        style({ transform : "scale(0.1)" }),
        animate( "1s cubic-bezier(.69,.44,1,.07)" )
    ] )
]);

// cas pratique : créer un nouvelle animation 
// deplacement de droite vers la gauche 
// durée 2s et accélérer au début et aller vite à la fin ! 

export const deplacement = trigger( "deplacement" , [
    transition("void => *" , [ 
        style({ transform : "translateX(300px)" }),
        animate("2000ms cubic-bezier(.04,.74,.02,.93)") 
    ] )
] )