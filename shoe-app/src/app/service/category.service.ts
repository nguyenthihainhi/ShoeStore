import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'https://localhost:5001/api/Category';
//   private categories: Category[] = [
//     {
//         categoryId: 1,
//         categoryName: 'Running Shoes'
//     },
//     {
//         categoryId: 2,
//         categoryName: 'Sneaker'
//     },
//     {
//         categoryId: 3,
//         categoryName: 'Oxford'
//     },
//     {
//         categoryId: 4,
//         categoryName: 'Boot'
//     }
// ];
  constructor(private http: HttpClient) { }
  getCategories(){
    return this.http.get<Category[]>(this.url);
    // return this.categories;
  }
}