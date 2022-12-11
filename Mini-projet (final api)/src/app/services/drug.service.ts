import { Injectable } from '@angular/core';
import { Drugs } from 'src/model/drugs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrugClass } from 'src/model/DrugClass.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class Drugservice {
  rechercherParNom(genericName: string) {
    throw new Error('Method not implemented.');
  }
  rechercheDrugGenericName(genericName: string): Drugs[] {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:8888/drugs/api';
  apiURLd= 'http://localhost:8888/drugs/api/dclass';



  Drugs!: Drugs[]; // un tableaux de drug
  DrugClass!: DrugClass[]; // un tableaux de drugclass

  constructor(private http: HttpClient) {}

  listeDrugs(): Observable<Drugs[]> {
    return this.http.get<Drugs[]>(this.apiUrl);
  }

  ajouterDrug(item: Drugs): Observable<Drugs> {
    return this.http.post<Drugs>(this.apiUrl, item, httpOptions);
  }

  supprimerDrug(d: Drugs): Observable<Drugs> {
    const url = `${this.apiUrl}/${d.id}`;
    return this.http.delete<Drugs>(url, httpOptions);
  }

  consulterDrug(id: number): Observable<Drugs> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Drugs>(url);
  }

  updateDrug(d: Drugs): Observable<Drugs> {
    return this.http.put<Drugs>(this.apiUrl, d, httpOptions);
  }

  trierDrugs() {
    this.Drugs = this.Drugs.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  listeDrugClass(): Observable<DrugClass[]> {
    return this.http.get<DrugClass[]>(this.apiUrl+'/dclass');
  }


  consulterDrugClass(id: number): DrugClass {
    return this.DrugClass.find((d) => d.idcl == id)!;
  }

  rechercheDrugClass(idcla: number): Observable<Drugs[]> {
    const url = `${this.apiUrl}/drugclass/${idcla}`;
    return this.http.get<Drugs[]>(url);
  }

  rechercherParNomdrugs(genericName: string): Observable<Drugs[]> {
    const url = `${this.apiUrl}/genericname/${genericName}`;
    return this.http.get<Drugs[]>(url);
  }

  ajouterDrugClass(item: DrugClass): Observable<DrugClass> {
    return this.http.post<DrugClass>(this.apiURLd,item, httpOptions);
  }

  updateDrugClass(item: DrugClass): Observable<DrugClass> {
    return this.http.put<DrugClass>(this.apiURLd,item, httpOptions);
  }

}
