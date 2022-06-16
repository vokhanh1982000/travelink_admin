import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from '../../../shared/services/table.service';
import { TourService } from '../../tour.service';

interface DataItem {
    id: number;
    name: string;
    category: string;
    price: number;
    address: string;
    region: string;
    schedule: string;
    description: string;
}

@Component({
    templateUrl: './tours-list.component.html'
})

export class ToursListComponent implements OnInit {

    selectedCategory: string;
    selectedStatus: string;
    searchInput: any;
    displayData = [];

    orderColumn = [
        // {
        //     title: 'ID',
        //     compare: (a: DataItem, b: DataItem) => a.id - b.id,
        // },
        {
            title: 'Tour',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Categories',
            // compare: (a: DataItem, b: DataItem) => a.category.localeCompare(b.category)
        },
        {
            title: 'Price',
            compare: (a: DataItem, b: DataItem) => a.price - b.price,
        },
        {
            title: 'Address',
            compare: (a: DataItem, b: DataItem) => a.address.localeCompare(b.address)
        },
        {
            title: 'Region',
            compare: (a: DataItem, b: DataItem) => a.region.localeCompare(b.region)
        },
        {
            title: 'Schedule',
            compare: (a: DataItem, b: DataItem) => a.schedule.localeCompare(b.schedule)
        },
        {
            title: 'Description',
            compare: (a: DataItem, b: DataItem) => a.description.localeCompare(b.description)
        },
        {
            title: ''
        }
    ]
    
    constructor(private tableSvc : TableService, private tourService : TourService, private router: Router) {
        // this.displayData = this.productsList
    }

    ngOnInit(): void {
        this.getAllTour()
    }

    getAllTour() {
        this.tourService.getTour().subscribe({
          next:(res) =>  {
            this.displayData = res.content
          },
          error:(err)=>{
            alert("Error while fetching the Records")
          }
        })
      }

    search(): void {
        const data = this.displayData
        this.displayData = this.tableSvc.search(this.searchInput, data )
    }

    addressChange(value: string): void {
        const data = this.displayData
        value !== 'All'? this.displayData = data.filter(elm => elm.address === value) : this.displayData = data
    }

    goInfo(id: string): void {
        this.router.navigate([`/tour/${id}`]); 
    }

    deleteRow(id: string): void {
        this.tourService.deleteTour(id).subscribe({
            next:(res) =>  {
              this.displayData = res.content
            },
            error:(err)=>{
              alert("Error while delete tour!")
            }
          })
      }
}    