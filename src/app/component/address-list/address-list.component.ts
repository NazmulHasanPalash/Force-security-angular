import { Component, OnInit } from '@angular/core';
import { AddressAPIService } from 'src/app/service/address-api.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  public productList: any;

  address: any;
  currentAddress = null;
  currentIndex = -1;
  title = '';


  constructor(private addressService: AddressAPIService) { }

  ngOnInit(): void {
    this.retrieveAddress();
    this.addressService.getProducts()
      .subscribe(res => {
        this.productList = res;
      })

  }
  retrieveAddress() {
    this.addressService.getAll()
      .subscribe(
        data => {
          this.address = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }

      );


  }
  refreshList() {
    this.retrieveAddress();
    this.currentAddress = null;
    this.currentIndex = -1;
  };
  setActiveAddress(address: any, index: any) {
    this.currentAddress = address;
    this.currentIndex = index;

  }
  removeAlladdress() {
    this.addressService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAddress();
        },
        error => {
          console.log(error);
        }
      );
  }
  searchTitle() {
    this.addressService.findByTitle(this.title)
      .subscribe(
        data => {
          this.address = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

  }


}
