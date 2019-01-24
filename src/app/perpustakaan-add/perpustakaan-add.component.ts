import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Perpustakaan } from '../perpustakaan/perpustakaan-model';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { PerpustakaansService } from '../perpustakaan/perpustakaans.service';

@Component({
  selector: 'app-perpustakaan-add',
  templateUrl: './perpustakaan-add.component.html',
  styleUrls: ['./perpustakaan-add.component.css'],
  providers: [PerpustakaansService ]
})
export class PerpustakaanAddComponent implements OnInit {

  perpustakaanForm: FormGroup;
  @ViewChild ('inputqty')inputQty: ElementRef;
  @Output() perpustakaanAdded = new EventEmitter<Perpustakaan>();
  @Input() perpustakaanChild: Perpustakaan;
	inputInfo = new Perpustakaan();

  constructor(private perpustakaanService: PerpustakaansService) { }

  ngOnInit() {
    this.perpustakaanForm = new FormGroup({
      isbn: new FormControl(null, [Validators.required,
      this.cekIsEmpty]),
      namaBuku: new FormControl(null, [Validators.required,
      this.cekIsEmpty]),
      qty: new FormControl(null, [Validators.required,
      this.cekIsEmpty])
    });
  }
  
  tambahBuku(inputnamaBuku: HTMLInputElement){
	this.perpustakaanAdded.emit(this.perpustakaanService.convertPerpustakaan(this.inputInfo));
	this.inputInfo = new Perpustakaan();
  }

  kirim() {
    const perpustakaanModel = new Perpustakaan();

    perpustakaanModel.isbn = this.perpustakaanForm.get('isbn').value;
    perpustakaanModel.namaBuku = this.perpustakaanForm.get('namaBuku').value;
    perpustakaanModel.qty = this.perpustakaanForm.get('qty').value;
    console.log(perpustakaanModel);
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean} {
    if(control.value && control.value.trim().length === 0) {
      return { 'blank' : true}
    }
    return null;

  } 
}
