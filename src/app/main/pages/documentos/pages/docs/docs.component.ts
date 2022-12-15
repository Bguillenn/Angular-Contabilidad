import { Component, OnInit } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';


@Component({
  selector: 'app-documentos',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  ExcelData:any;
  constructor() { }

  ngOnInit(): void {
  }

  XLSImport($event: any) {
    const files = $event.target.files;
    if (files.length) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event: any) => {
            const wb = read(event.target.result);
            const sheets = wb.SheetNames;

            if (sheets.length) {
                const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                this.ExcelData = rows;
                console.log(this.ExcelData);
            }
        }
        reader.readAsArrayBuffer(file);
    }
}
}
