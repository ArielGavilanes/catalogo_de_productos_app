import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}

  products: any[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.databaseService.getAllProducts().subscribe(
      (response) => (this.products = response),
      (err) => console.log(err)
    );
  }

  deleteProduct(id_producto: number) {
    return this.databaseService.deleteProduct(id_producto).subscribe()
  }
}
