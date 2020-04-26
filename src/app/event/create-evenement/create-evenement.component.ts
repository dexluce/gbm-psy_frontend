import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CreateEvenementGQL  } from 'src/generated/graphql';
import { catchError, take, finalize, tap } from 'rxjs/operators';
@Component({
  selector: 'app-create-evenement',
  templateUrl: './create-evenement.component.html',
  styleUrls: ['./create-evenement.component.scss']
})
export class CreateEvenementComponent implements OnInit {
  form: FormGroup;
  formSubmitAttempt = false;
  formInvalid = '';
  editor = ClassicEditor;
  editorData = '<p>Entrer votre description ici</p>';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private createEvenementService: CreateEvenementGQL
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['<p>Entrer votre description ici</p>'],
      isValid: [false, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formInvalid = '';
      this.formSubmitAttempt = true;

      this.createEvenementService.mutate({
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        isValid: this.form.get('isValid').value
      }).pipe(
        take(1),
        tap(() => this.router.navigate(['events'])),
        catchError(e => this.formInvalid = 'Erreur lors de la creation'),
        finalize(() => this.formSubmitAttempt = false)
      ).subscribe();
    }
  }
}
