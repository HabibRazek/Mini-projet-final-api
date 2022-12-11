import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drugservice } from '../services/drug.service';
import { Drugs } from 'src/model/drugs.model';
import { DrugClass } from 'src/model/DrugClass.model';

@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css'],
})
export class UpdateDrugComponent implements OnInit {
  currentDrug = new Drugs();
  emptyDrugclass= new DrugClass();
  DrugClass!: DrugClass[];
  updateidcl!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private drugService: Drugservice
  ) {}

  ngOnInit(): void {
    this.emptyDrugclass.name= "";
    this.emptyDrugclass.idcl = 0;
    this.drugService.listeDrugClass().subscribe((data) => {
      this.DrugClass = data;
    });
    this.drugService
      .consulterDrug(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.currentDrug = data;
        this.updateidcl = this.currentDrug.drugClass.idcl;
      });
  }

  updateDrug() {

    this.currentDrug.drugClass = this.DrugClass.find(dclass => dclass.idcl == this.updateidcl)!;
    this.drugService.updateDrug(this.currentDrug).subscribe((data) => {
      this.currentDrug.drugClass=this.emptyDrugclass;
    });
  }
}
