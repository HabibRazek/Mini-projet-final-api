import { Component, OnInit } from '@angular/core';
import { DrugClass } from 'src/model/DrugClass.model';
import { Drugs } from 'src/model/drugs.model';
import { Drugservice } from '../services/drug.service';

@Component({
  selector: 'app-search-drugs-class',
  templateUrl: './search-drugs-class.component.html',
  styleUrls: ['./search-drugs-class.component.css'],
})
export class SearchDrugsClassComponent implements OnInit {
  drugs!: Drugs[];
  DrugClass!: DrugClass[];
  idcla!: number;

  constructor(private drugService: Drugservice) {
    // this.drugService.listeDrugClass().subscribe((data) => {
    //   this.DrugClass = data;
    // });
  }

  ngOnInit(): void {
    this.drugService.listeDrugClass().subscribe((data) => {
      this.DrugClass = data;
    });
  }

  supprimerProduit(d: Drugs) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.drugService.supprimerDrug(d);
  }

  onChange() {
    this.drugService.rechercheDrugClass(this.idcla).subscribe((drugs) => {
      console.log(drugs);
      this.drugs = drugs;
    });
  }
}
