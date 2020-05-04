import { Directive, OnInit, OnDestroy, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { MeGQL, Role } from 'src/generated/graphql';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appIfHasRole]',
})
export class IfHasRoleDirective implements OnInit, OnDestroy {
  private mustHaveRoles: Role[];
  subscriptionToUserConnected: Subscription;
  isVisible = false;
  @Input() set appIfHasRole(roles: Role[]) {
    if (roles) {
      this.mustHaveRoles = roles;
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private meGql: MeGQL,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.subscriptionToUserConnected = this.meGql.watch().valueChanges.subscribe(
        (result) => {
          this.testRoles(result.data.me.role);
        }
      );
    } else {
      this.testRoles();
    } 
  }

  ngOnDestroy(): void {
    this.subscriptionToUserConnected.unsubscribe();
  }

  private testRoles(userRole?: Role) {
    // If he doesn't have any roles, we clear the viewContainerRef
    if (!userRole) {
      this.isVisible = false;
      this.viewContainerRef.clear();
      return;
    }
    // If the user has the role needed to render this component we can add it
    if (this.mustHaveRoles.includes(userRole)) {
      // If it is already visible (which can happen if his roles changed) we do not need to add it a second time
      if (!this.isVisible) {
        // We update the `isVisible` property and add the templateRef to the view
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      // If the user does not have the role
      this.isVisible = false;
      this.viewContainerRef.clear();
    }
  }
}
