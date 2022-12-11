import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/model/drugs.model';
import { AuthService } from '../services/auth.service';
import { Drugservice } from '../services/drug.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css'],
})
export class DrugsComponent implements OnInit {
  drugs!: Drugs[];


  constructor(
    public drugService: Drugservice,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerDrugs();

  }

  chargerDrugs() {
    this.drugService.listeDrugs().subscribe((drugs) => {
      console.log(drugs);
      this.drugs = drugs;
    });

  }

  supprimerDrug(d: Drugs) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.drugService.supprimerDrug(d).subscribe(() => {
      console.log('Drug supprimé');
      this.chargerDrugs();
    });
  }

}
