import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TableService } from '../../shared/services/table.service';
import { CategoryService } from '../category.service';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
    id: number;
    name: string;
}

@Component({
    templateUrl: './category-list.component.html'
})

export class CategoryListComponent implements OnInit {

    categoryForm !: FormGroup;

    displayData = [];

    orderColumn = [
        {
            title: 'ID',
            compare: (a: DataItem, b: DataItem) => a.id - b.id,
        },
        {
            title: 'Category',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Action'
        }
    ]

    isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
    
    constructor(private tableSvc : TableService, private categoryService : CategoryService, private formBuilder : FormBuilder, private message: NzMessageService) {
        // this.displayData = this.productsList
    }

    ngOnInit(): void {
        this.getCategory()
        this.categoryForm = this.formBuilder.group({
            name: ['',Validators.required],
          })
    }

    getCategory() {
        this.categoryService.getCategory().subscribe({
          next:(res) =>  {
            this.displayData = res.content
          },
          error:(err)=>{
            // alert("Error while fetching the Records")
          }
        })
      }

      onAddCategory() {
        this.isOkLoading = true;
        if(this.categoryForm.valid){
            this.categoryService.createCategory(this.categoryForm.value).subscribe({
              next:(res)=> {
                this.message.create("success", "Category added successfully")
                this.categoryForm.reset()
                this.isOkLoading = false;
                this.isVisible = false;
                this.getCategory()
              },
              error:()=> {
                this.message.create("error", "Error while adding the travel")
                this.isOkLoading = false;
              }
            })
          }
      }

      deleteRow(id: string): void {
        this.categoryService.deleteCategory(id).subscribe({
            next:(res) =>  {
            //   this.displayData = res.content
              this.getCategory()
            },
            error:(err)=>{
              alert("Error while delete category!")
            }
          })
      }
}    