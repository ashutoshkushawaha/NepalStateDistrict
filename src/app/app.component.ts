import { StatementVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import district from '../datas/district.json';
import province from '../datas/province.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  district=district;
  province= province;
  ngOnInit(): void {

  }
  countryList=[{
		"id": 1,
		"name": "Nepal",
	}];
  getStateList() {
    debugger;
   this.stateList= this.province;
   //this.stateList:pdcModel.province=states;
  }
  loadState(){
    this.getStateList();

  }
  title = 'nepaliCityState';
 
  selectedCar:any;
districtList:any;
    stateList:any=[]; //[
        // { id: 1, name: 'Volvo' },,''
        // { id: 2, name: 'Saab' },
        // { id: 3, name: 'Opel' },
        // { id: 4, name: 'Audi' },
    //];
    selectState(e:any){
      debugger;
     this.districtList=this.district.filter(x=>x.province_id==e.id);
  
    }
}

 interface pdcModel{
  province:[{
      district:[{
          "metropolitan   ": [],
          "subMetropolitan ": [],
          "muncipality": [],
          "VDC":[]
      }]
  }]
}