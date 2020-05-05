import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import PlaceResult = google.maps.places.PlaceResult;
import { Role, CreateUserGQL, Sex } from 'src/generated/graphql';
import { AuthService } from 'src/app/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;
  formSubmitAttempt = false;
  createInvalid = '';
  appRoles = Role;
  appSex = Sex;
  
  constructor(
    private fb: FormBuilder,
    private createUserGql: CreateUserGQL,
    private router: Router,
    private authService: AuthService,
    private snackBarService: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      sex: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      confirm_email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required],
      profession: ['', Validators.required],
      profession_place: ['', Validators.required],
      personnal_address: ['', Validators.required],
      chargeable_address: [''],
      role: [this.appRoles.Participant],
      isActive: [false]
    }, {
      validator: [
        this.confirmedValidator('password', 'confirm_password'),
        this.confirmedValidator('email', 'confirm_email')
      ],
    });
  }

  onSubmit() {
    this.createInvalid = '';
    this.formSubmitAttempt = true;

    if (this.form.valid) {
      this.createUserGql.mutate({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
        firstname: this.form.get('firstname').value,
        lastname: this.form.get('lastname').value,
        sex: this.form.get('sex').value,
        phone: this.form.get('phone').value,
        profession: this.form.get('profession').value,
        profession_place: this.form.get('profession_place').value,
        personnal_address: this.form.get('personnal_address').value,
        chargeable_address: this.form.get('chargeable_address').value,
        role: this.form.get('role').value,
        isActive: this.form.get('isActive').value
      }).toPromise()
      .then((result) => {
        if (result.errors) {
          this.createInvalid = result.errors[0].message;
          return;
        }
        if (this.authService.isAuthenticated()) {
          this.snackBarService.open('Compte crée avec success. Vous allez être redirigé vers la liste d\'utilisateur dans 5 secondes', null, { duration: 5000 });
          setTimeout(() => {
            this.router.navigateByUrl('/admin/users');
          }, 5000);
        } else {
          this.snackBarService.open('Compte crée avec success. Vous allez être redirigé vers la page de connection dans 5 secondes', null, { duration: 5000 });
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 5000);
        }
      }).catch(e => {
          this.createInvalid = e;
      });
    }

    this.formSubmitAttempt = false;
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onPersonnalAddressSelected(result: PlaceResult) {
    let address = '';
    if (result.formatted_address.includes(result.name)) {
      address += result.formatted_address;
    } else {
      address = result.name + ', ' + result.formatted_address;
    }
    this.form.controls.personnal_address.setValue(address);
  }

  onChargeableAddressSelected(result: PlaceResult) {
    let address = '';
    if (result.formatted_address.includes(result.name)) {
      address += result.formatted_address;
    } else {
      address = result.name + ', ' + result.formatted_address;
    }
    this.form.controls.chargeable_address.setValue(address);
  }

  roleToIterable() {
    return Object.keys(this.appRoles);
  }
}
