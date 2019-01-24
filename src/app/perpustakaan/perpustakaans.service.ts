import { Injectable } from '@angular/core';
import { Perpustakaan } from './perpustakaan-model';

@Injectable({
  providedIn: 'root'
})
export class PerpustakaansService {
  constructor() { }

  convertPerpustakaan(perpustakaanInfo: Perpustakaan): Perpustakaan {
    perpustakaanInfo.isbn = perpustakaanInfo.isbn.toUpperCase() + ' - edited';
    return perpustakaanInfo;
  }

}
