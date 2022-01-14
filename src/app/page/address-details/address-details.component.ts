import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressAPIService } from 'src/app/service/address-api.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  public clientList: any;

  currentAddress: any = null;
  message = '';

  constructor(
    private addressService: AddressAPIService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getAddress(this.route.snapshot.paramMap.get('id'));
    this.addressService.getProducts()
      .subscribe(res => {
        this.clientList = res;
      })

  }
  getAddress(id: any) {
    this.addressService.get(id)
      .subscribe(
        data => {

          this.currentAddress = data;
          console.log(data);
        },
        error => {
          console.log(error);

        }
      );


  }
  updatePublished(status: any) {
    const data = {
      title: this.currentAddress.title,
      description: this.currentAddress.description,
      published: status
    };
    this.addressService.update(this.currentAddress.id, data)
      .subscribe(
        response => {
          this.currentAddress.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        }

      );



  }
  updateAddress() {
    this.addressService.update(this.currentAddress.id, this.currentAddress)
      .subscribe(
        response => {
          console.log(response);
          this.message = "This address was updated successfully";
        },
        error => {
          console.log(error);
        }
      );
  }
  deleteAddress() {
    this.addressService.delete(this.currentAddress.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['tutorials']);
        },
        error => {
          console.log(error);
        }
      )
  }


}
