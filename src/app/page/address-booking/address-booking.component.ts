import { Component, OnInit } from '@angular/core';
import { AddressAPIService } from 'src/app/service/address-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-booking',
  templateUrl: './address-booking.component.html',
  styleUrls: ['./address-booking.component.css']
})
export class AddressBookingComponent implements OnInit {
  address = {
    title: '',
    description: '',
    published: false

  };
  submitted = false;

  constructor(private appApiService: AddressAPIService) { }

  ngOnInit(): void {

  }
  saveAddress() {
    const data = {
      title: this.address.title,
      description: this.address.description
    };
    this.appApiService.create(data)
      .subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
        error => {
          console.log(error);

        });

  }
  newAddress() {
    this.submitted = false;
    this.address = {
      title: '',
      description: '',
      published: false
    };

  }


}

