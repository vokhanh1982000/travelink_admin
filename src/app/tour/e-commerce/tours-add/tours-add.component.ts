import { Component, OnInit, ViewChild } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TourService } from '../../tour.service';
import { CategoryService } from 'src/app/category/category.service';

@Component({
    templateUrl: './tours-add.component.html'
})

export class TourAddComponent implements OnInit {

    changePWForm: FormGroup;
    avatarUrl: string = "assets/images/others/image-default.png";
    selectedAddress: any;
    selectedRegion: any;
    selectedVehicle: any;
    selectedStartForm: any;
    listOfOption: string[] = [];
  listOfSelectedValue = [];
  categories = [];

    constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService, private tourService: TourService, private categoryService: CategoryService) {
    }

    @ViewChild('f') slForm!: NgForm;

    ngOnInit(): void {
        const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
    this.getCategory()
    }

    showConfirm(): void {
        this.modalService.confirm({
            nzTitle  : '<i>Do you want to change your password?</i>',
            nzOnOk   : () => this.message.success('Password Change Successfully')
        });
    }

    submitForm(): void {
        for (const i in this.changePWForm.controls) {
            this.changePWForm.controls[ i ].markAsDirty();
            this.changePWForm.controls[ i ].updateValueAndValidity();
        }

        this.showConfirm();
    }

    onAddTour(form: NgForm) {
        if(form.valid) {
            this.tourService.createTour(form.value).subscribe({
                next:(res)=>{
                    this.message.create("success", "Tour added successfully")
                    form.reset();
                },
                error:()=>{
                    this.message.create("error", "Error while adding the product")
                }
            })
        }
      }

      getCategory() {
        this.categoryService.getCategory().subscribe({
          next:(res) =>  {
            this.categories = res.content
          },
          error:(err)=>{
            // alert("Error while fetching the Records")
          }
        })
      }

    // private getBase64(img: File, callback: (img: {}) => void): void {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // }

    // handleChange(info: { file: NzUploadFile }): void {
    //     this.getBase64(info.file.originFileObj, (img: string) => {
    //         this.avatarUrl = img;
    //     });
    // }

    handleChange(newValue): void {
        this.avatarUrl = newValue;
    }

}    