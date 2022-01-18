import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDatService {
  

  constructor() { }
  
    company = [
      { id : "Bha1", companyName : "company1", companyDescription :"company1 Desc", companyStartYear :2012 },
      { id : "Bha2", companyName : "company2", companyDescription :"company2 Desc",companyStartYear :2011 },
      { id : "Bha3", companyName : "company3", companyDescription :"company3 Desc", companyStartYear :2010 },
      { id : "Bha4", companyName : "company4", companyDescription :"company4 Desc", companyStartYear :2002},
      { id : "Bha5", companyName : "company5", companyDescription :"company5 Desc", companyStartYear :2000},
      { id : "Bha6", companyName : "company6", companyDescription :"company6 Desc", companyStartYear :2012},
      { id : "Bha7", companyName : "company7", companyDescription :"company7 Desc", companyStartYear :2008},
      
    ];
  customer= [
     { gstNo : "GSTIN1", branches : "HYD", technologes : "JavaScrpit", state : "Telangana", country : "india" },
      { gstNo : "GSTIN2", branches : "Banglore", technologes : "Java",  state : "Karnataka", country : "india"},
    { gstNo : "GSTIN3", branches : "chennai", technologes : "Oracle", state : "Tamilnadu", country : "india"},
    { gstNo : "GSTIN4", branches : "Mumbai", technologes : "Angular", state : "Maharastra", country : "india" },
    { gstNo : "GSTIN5", branches : "Delhi", technologes : "React", state : "Delhi", country : "india" },
     { gstNo : "GSTIN6", branches : "Kerala", technologes : "MongoDB", state : "Kerala", country : "india" },
    { gstNo : "GSTIN7", branches : "Vizag", technologes : "Express.js", state : "Andhra Pradesh", country : "india" },
    
   ];

    
  }

