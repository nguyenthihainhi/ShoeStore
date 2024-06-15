import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from '../service/data.service';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrl: './shoe-detail.component.css'
})
export class ShoeDetailComponent implements OnInit{
  id = 0;
  shoesRelated: Shoe[] = [];
  shoe: Shoe = new Shoe();
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = true;
  slides: string[] = [];
  curImgProduct = '';
  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id += Number(params['id']);
      this.dataService.getShoe(this.id).subscribe((shoe: Shoe) =>{
        this.shoe = shoe;
      });
      // this.shoe = this.dataService.getShoe(this.id);
      this.slides = [
        this.shoe.imageRight,
        this.shoe.imageLeft,
        this.shoe.imageTop,
        this.shoe.imageBottom
      ];
      this.curImgProduct = this.slides[0];
    });
  }

  changeImage(curImg: string){
    this.curImgProduct = curImg;
  }
  
}
