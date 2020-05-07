import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSubscriptionToEvenementComponent } from './create-subscription-to-evenement/create-subscription-to-evenement.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [CreateSubscriptionToEvenementComponent],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class SubscriptionToEvenementModule { }
