import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url = 'https://localhost:5001/api/Supplier';
  // private suppliers: Supplier[] = [
  //   {
  //       supplierId: 1,
  //       name: 'Nike Inc.',
  //       address: '123 Main St',
  //       phoneNumber: '123-456-7890',
  //       email: 'supplierone@example.com'
  //   },
  //   {
  //       supplierId: 2,
  //       name: 'Adidas AG',
  //       address: '456 Elm St',
  //       phoneNumber: '987-654-3210',
  //       email: 'suppliertwo@example.com'
  //   },
  //   {
  //       supplierId: 3,
  //       name: 'Supplier Three',
  //       address: '789 Oak St',
  //       phoneNumber: '555-123-4567',
  //       email: 'supplierthree@example.com'
  //   }
// ];
  constructor(private http: HttpClient) { }
  getSuppliers(){
    return this.http.get<Supplier[]>(this.url);
    // return this.suppliers;
  }
}
