import {Directive, inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
// import {BindingsComponent} from '../samples/bindings/bindings.component';

@Directive({
  selector: '[plAdminOnly]' // *plAdminOnly
})
export class AdminOnlyDirective implements OnInit{

  private readonly isAdmin = true;
  private readonly viewContainerRef = inject( ViewContainerRef );
  private readonly templateRef = inject( TemplateRef );

  ngOnInit(): void {
    if ( this.isAdmin )
      this.viewContainerRef.createEmbeddedView( this.templateRef );
    // this.viewContainerRef.createComponent( BindingsComponent ); // createComponent wird bei Euch in den Projekten zT verwendet
  }

}
