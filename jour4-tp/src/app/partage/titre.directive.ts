import { Directive, ElementRef , Input , OnInit } from '@angular/core';
@Directive({
  selector: '[appTitre]'
})
export class TitreDirective implements OnInit {
  @Input() appTitre : string | boolean | undefined ;
  public constructor(private balise : ElementRef) { }
  public ngOnInit(){
    if(
        this.balise.nativeElement instanceof HTMLHeadingElement && 
        this.balise.nativeElement.nodeName == "H1" ){
          if( this.appTitre ){
            this.balise.nativeElement.style.textAlign = "center";
          }else {
            this.balise.nativeElement.style.textDecoration = "underline"
          }
      }
  }
}
