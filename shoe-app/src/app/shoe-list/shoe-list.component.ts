import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from '../service/data.service';
import { SupplierService } from '../service/supplier.service';
import { CategoryService } from '../service/category.service';
import { Shoe } from '../models/shoe';
import { Supplier } from '../models/supplier';
import { Category } from '../models/category';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})
export class ShoeListComponent implements OnInit{
  shoes: Shoe[] = [];
  shoe: Shoe = new Shoe();
  suppliers: Supplier[] = [];
  selectedSupplier: any;
  categories: Category[] = [];
  selectedCategory: any;
  editingShoeId: number | null = null; 
  isChangeImage: boolean = false;
  search: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private supplierService: SupplierService,
    private categoryService: CategoryService,
  ) {}
  ngOnInit(): void{
    this.loadShoe();
    this.loadSuppliers();
    this.loadCategories();
  }
  openInformation(lgModal : any){
    lgModal.show();
    this.clearForm();
  }
  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    });
    // this.suppliers = this.supplierService.getSuppliers();
  }
  changeImage(){
    this.isChangeImage = !this.isChangeImage;
  }
  onSupplierChange(event: any): void {
    this.selectedSupplier= event.target.value;
  }
  // Load danh sách danh mục
  loadCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    // this.categories = this.categoryService.getCategories();
  }
  onCategoryChange(event: any): void {
    this.selectedCategory= event.target.value;
  }
  loadShoe(){
    this.dataService.getShoes().subscribe((shoes: Shoe[]) =>{
      this.shoes = shoes;
    });
    // this.shoes = this.dataService.getShoes();
  }
  // Phương thức để xử lý sự kiện thay đổi file input
  onFileSelected(event: Event, imageType: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Lưu URL Base64 trực tiếp vào thuộc tính tương ứng của đối tượng shoe
        if (imageType === 'imageLeft') {
          this.shoe.imageLeft = reader.result as string;
        } else if (imageType === 'imageRight') {
          this.shoe.imageRight = reader.result as string;
        } else if (imageType === 'imageTop') {
          this.shoe.imageTop = reader.result as string;
        } else if (imageType === 'imageBottom') {
          this.shoe.imageBottom = reader.result as string;
        }
      };

      reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
  }
  addShoe(){
    this.shoe.supplier = this.selectedSupplier;
    this.shoe.category = this.selectedCategory;
    this.dataService.addShoe(this.shoe).subscribe(() =>{
      this.loadShoe();
      this.clearForm();
    })
    
  }
  deleteShoe(shoeId: number) {
    this.dataService.deleteShoe(shoeId).subscribe(() => {
      this.loadShoe();
    });
  }
  getShoe(shoe: Shoe, lgModal : any){
    lgModal.show();
    this.shoe = { ...shoe };
    this.selectedSupplier = shoe.supplier;
    this.selectedCategory = shoe.category;
    this.editingShoeId = shoe.id;
    
  }
  saveShoe() {
    if (this.editingShoeId) {
      this.updateShoe();
    } else {
      this.addShoe();
    }
  }
  updateShoe() {
    this.shoe.supplier = this.selectedSupplier;
    this.shoe.category = this.selectedCategory;
    this.dataService.editShoe(this.shoe).subscribe(() => {
      this.loadShoe();
      this.clearForm();
    });
  }
  clearForm(){
    this.shoe = new Shoe();
    this.selectedCategory = '';
    this.selectedSupplier = '';
    this.editingShoeId = null;
  }
  onSubmit(search: string) {
    this.router.navigate(['/shoe'], { queryParams: { search: search } });
    this.dataService.searchShoes(search).subscribe((shoes: Shoe[]) =>{
      this.shoes = shoes;
    });
  }
}
