package com.walter.drugs.entities;

import javax.persistence.*;
import java.util.Date;


@Entity
public class Drugs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String genericName;
    private String brandNames;
    private String dosageForm;
    private Date lastUpdated;
    @ManyToOne
    private  DrugClass drugClass;


    //constructor
    public Drugs() {
        super();
    }

    public Drugs(String genericName, String brandNames, String dosageForm, Date lastUpdated) {
        super();
        this.genericName = genericName;
        this.brandNames = brandNames;
        this.dosageForm = dosageForm;
        this.lastUpdated = lastUpdated;
    }



    // Getters and Setters
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getGenericName() {
        return genericName;
    }
    public void setGenericName(String genericName) {
        this.genericName = genericName;
    }
    public String getBrandNames() {
        return brandNames;
    }
    public void setBrandNames(String brandNames) {
        this.brandNames = brandNames;
    }
    public String getDosageForm() {
        return dosageForm;
    }
    public void setDosageForm(String dosageForm) {
        this.dosageForm = dosageForm;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }
    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public DrugClass getDrugClass() {
        return drugClass;
    }
    public void setDrugClass(DrugClass drugClass) {
        this.drugClass = drugClass;
    }



    //toString
    @Override
    public String toString() {
        return "drugs [id=" + id + ", genericName=" + genericName + ", brandNames=" + brandNames + ", dosageForm="
                + dosageForm + ", lastUpdated=" + lastUpdated + "]";
    }
}
