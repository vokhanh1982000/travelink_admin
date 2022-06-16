import { Component, OnInit } from '@angular/core';
import { TableService } from '../../shared/services/table.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { OrderService } from '../order.service';

interface DataItem {
    id: number;
    name: string;
    contactName: string;
    contactAddress: string;
    contactPhone: string;
    numberOfGuest: number;
    unitPrice: number;
    total: number;
}

@Component({
    templateUrl: './orders-list.component.html'
})

export class OrdersListComponent implements OnInit {

    allChecked: boolean = false;
    indeterminate: boolean = false;
    displayData = [];
    searchInput: string

    orderColumn = [
        // {
        //     title: 'ID',
        //     compare: (a: DataItem, b: DataItem) => a.id - b.id,
        // },
        {
            title: 'Name',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Contact Name',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Contact Address',
        },
        {
            title: 'Contact Phone',
        },
        {
            title: 'Number of Guest',
            compare: (a: DataItem, b: DataItem) => a.numberOfGuest - b.numberOfGuest,
        },
        {
            title: 'Unit Price',
            compare: (a: DataItem, b: DataItem) => a.unitPrice - b.unitPrice,
        },
        {
            title: 'Total',
            compare: (a: DataItem, b: DataItem) => a.total - b.total,
        },
        {
            title: ''
        }
    ]

    constructor(private tableSvc : TableService, private orderService : OrderService) {
        // this.displayData = this.ordersList
    }

    ngOnInit(): void {
        this.getOrder()
        console.log(this.displayData)
    }

    getOrder() {
        this.orderService.getOrder().subscribe({
          next:(res) =>  {
            this.displayData = res.content
          },
          error:(err)=>{
            alert("Error while fetching the Records")
          }
        })
      }

    search() {
        const data = this.displayData
        this.displayData = this.tableSvc.search(this.searchInput, data)
    }

}    