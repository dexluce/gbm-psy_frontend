import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateMeetingInEvenementGQL } from 'src/generated/graphql';
import { take, tap, catchError, finalize } from 'rxjs/operators';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-create-meeting-tile',
  templateUrl: './create-meeting-tile.component.html',
  styleUrls: ['./create-meeting-tile.component.scss']
})
export class CreateMeetingTileComponent implements OnInit {
  showForm = false;
  form: FormGroup;
  formSubmitAttempt = false;
  formInvalid = '';
  hasPhysicalAddress = false;
  physicalAddress = '';
  @Input() evenementId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private createMeetingInEvenementService: CreateMeetingInEvenementGQL
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formInvalid = '';
      this.formSubmitAttempt = true;

      this.createMeetingInEvenementService.mutate({
        evenementId: this.evenementId,
        date: this.form.get('date').value,
        physicalAddress: this.hasPhysicalAddress ? this.physicalAddress : '',
      }).pipe(
        take(1),
        catchError(e => this.formInvalid = 'Erreur lors de la creation'),
        finalize(() => {
          this.formSubmitAttempt = false;
          this.form.reset();
          this.showForm = false;
          this.formInvalid = '';
          this.hasPhysicalAddress = false;
          this.physicalAddress = '';
        })
      ).subscribe();
    }
  }

  onAddressSelected(result: PlaceResult) {
    this.physicalAddress = result.formatted_address;
  }
}
