import { Component, OnInit } from '@angular/core';
import {IProduct} from './iproduct';
import {ProductService} from './product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
      pageTitle: string ='Product list';
      showImage: boolean = false;
      _listFilter: string;
      errorMessage: string;
      get listFilter():string{
        return this._listFilter;
      }
      set listFilter(value:string){
         this._listFilter = value;
         this.filteredProducts = this.listFilter?this.performFilter(this.listFilter):this.products;
      }
    
      filteredProducts: IProduct[];
      products: IProduct[] = [];

toggleImage(): void{
  this.showImage = !this.showImage;
}
performFilter(filterBy:string):IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();

return this.products.filter((product: IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

}
onRatingClicked(message:string):void{
  this.pageTitle = message;
}
  constructor(private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products=>{
        this.products=products
        this.filteredProducts = this.products;
        },
      error:err=>this.errorMessage = err
    });
    
  }

}