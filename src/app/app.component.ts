import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  name = 'Angular';
  mappingCols: any[];
  mappingRows: any[];
  sourceAttributes: any[];
  targetAttributes: any[];
  sourceattr: string;

  constructor() { }

ngOnInit() {

 this.mappingCols = [
                { "field": "field_0", "header": "Source Attribute" },
                { "field": "field_1", "header": "Target Attribute" }
              ];

              this.sourceAttributes = [
                { value: "1", label: "Data1" },
                { value: "2", label: "Data2" },
                { value: "3", label: "Data3" },
                { value: "4", label: "Data4" },
                { value: "5", label: "Data5" },
                { value: "6", label: "Data6" }
              ];

              this.targetAttributes = [
                { value: "1", label: "DataA" },
                { value: "2", label: "DataB" },
                { value: "3", label: "DataC" },
                { value: "4", label: "DataD" },
                { value: "5", label: "DataE" },
                { value: "6", label: "DataF" },
                { value: "7", label: "DataG" },
                { value: "8", label: "DataH" }
              ];

              //mappingRows: any[];
               this.mappingRows = [{ "targetCol": "DataF", "SourceCol": this.sourceAttributes.find(p=>p.label === "Data3") },
              { "targetCol": this.targetAttributes[3], "SourceCol": "Data6" },
              { "targetCol": "DataC", "SourceCol": "Data1" }];

}

addNewRow() {
  this.mappingRows.push({"targetCol": "", "SourceCol": ""});
}
}
