import {computed, Directive, effect, inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {BASE_URL} from '../app.config';
import {UserService} from '../user/user.service';
// import {BindingsComponent} from '../samples/bindings/bindings.component';

@Directive({
  selector: '[plAdminOnly]' // *plAdminOnly
})
export class AdminOnlyDirective implements OnInit{


  private readonly viewContainerRef = inject( ViewContainerRef );
  private readonly templateRef = inject( TemplateRef );
  private readonly baseUrl = inject( BASE_URL ); // injiziere die Local ID aus dem Root Provider
  private readonly $user = inject( UserService ); // injiziere die Local ID aus dem Root Provider
  private readonly isAdmin = computed(() => {
    const admin = this.$user.selectedUsr()?.admin === true;
    console.log(admin);
    return admin;
  });
  private readonly isAdminEffRed = effect(() => {
    this.render( this.isAdmin() )
  })

  ngOnDestroy(): void {
    this.isAdminEffRed.destroy()
    this.clear();
  }

  ngOnInit(): void {
    this.render();
  }

  // Logik zur Steuerung des Inhalts
  render( isAdmin?: boolean ) {
    if ( isAdmin === undefined) isAdmin = this.isAdmin(); //passiert nur auf onInit sonst über effect gesteuert
    this.clear();
    if ( isAdmin )
      this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  clear() {
    this.viewContainerRef.clear();
  }

}
