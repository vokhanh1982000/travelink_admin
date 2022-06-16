import { Component, OnInit, ViewChild } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TourService } from '../../tour.service';
import { CategoryService } from 'src/app/category/category.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import * as moment from 'moment';

@Component({
    templateUrl: './tours-detail.component.html',
    styleUrls: ['./tours-detail.component.css'],
})

export class TourDetailComponent implements OnInit {

    changePWForm: FormGroup;
    avatarUrl: string = "assets/images/others/image-default.png";
    selectedAddress: any;
    selectedRegion: any;
    selectedVehicle: any;
    selectedStartForm: any;
  listOfSelectedValue = [];
  categories = [];
  id: string;
  displayData: any;
  isEdit: boolean = false;
    productEditForm: FormGroup;
    subTourForm !: FormGroup;
    tranForm !: FormGroup;
    dateFormat = 'yyyy/MM/dd';

    isVisible = false;
  isOkLoading = false;

  isVisibleTran = false;
  isOkLoadingTran = false;

  idSubTour = "";

  showModal(): void {
    this.isVisible = true;
  }

  showModalTran(id: string): void {
    this.isVisibleTran = true;
    this.idSubTour = id;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleCancelTran(): void {
    this.isVisibleTran = false;
  }

  formatDate(dateOutput: Date) {
    const date = moment(dateOutput);
    let dateInFormat = date.format('D/M/YYYY');
    return dateInFormat;
}
    constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService, private tourService: TourService, private categoryService: CategoryService, private route: ActivatedRoute, private msg: NzMessageService) {
    }

    @ViewChild('f') slForm!: NgForm;

    ngOnInit(): void {
    this.getCategory()
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTourDetail();
    this.subTourForm = this.fb.group({
      tourId: ['',Validators.required],
      checkIn: ['',Validators.required],
      checkOut: ['',Validators.required],
      slot: ['',Validators.required],
    })
    this.tranForm = this.fb.group({
      subTourId: ['',Validators.required],
      type: ['',Validators.required],
      startFrom: ['',Validators.required],
      subCharge: ['',Validators.required],
    })
  //   if(this.displayData) {
  //   this.productEditForm = this.fb.group({
  //     name:    [ this.displayData.name,     [ Validators.required ] ],
  //     address:          [ this.displayData.address,           [ Validators.required ] ],
  //     region:       [ this.displayData.region,        [ Validators.required ] ],
  //     schedule:          [ this.displayData.schedule,           [ Validators.required ] ],
  //     duration:         [ this.displayData.duration,          [ Validators.required ] ],
  //     price:           [ this.displayData.price,            [ Validators.required ] ],
  //     description:         [ this.displayData.description,          [ Validators.required ] ],
  //     // fit:            [ this.productData.fit,             [ Validators.required ] ],
  //     // material:       [ this.productData.material,        [ Validators.required ] ],
  // });}
    }

    submitForm(): void {
      for (const i in this.productEditForm.controls) {
          this.productEditForm.controls[ i ].markAsDirty();
          this.productEditForm.controls[ i ].updateValueAndValidity();
      }
  }

  edit() {
    this.isEdit = true;
}

editClose() {
    this.isEdit = false;
}

save() {
    this.modalService.confirm({
        nzTitle  : '<i>Do you want your changes?</i>',
        nzOnOk   : () => this.editClose()
    });
}

    onAddSubTour(form: NgForm) {
      // this.isOkLoading = true;
      if(this.subTourForm.valid){
          this.tourService.createSubTour(this.subTourForm.value).subscribe({
            next:(res)=> {
              this.message.create("success", "Sub tour added successfully")
              this.subTourForm.reset()
              this.isOkLoading = false;
              this.isVisible = false;
              this.getTourDetail();
            },
            error:()=> {
              this.message.create("error", "Error while adding the sub tour")
              this.isOkLoading = false;
            }
          })
        }
      }

      onAddTran(form: NgForm) {
        // this.isOkLoading = true;
        if(this.tranForm.valid){
            this.tourService.createTran(this.tranForm.value).subscribe({
              next:(res)=> {
                this.message.create("success", "Transportation added successfully")
                this.tranForm.reset()
                this.isOkLoadingTran = false;
                this.isVisibleTran = false;
                this.getTourDetail();
              },
              error:()=> {
                this.message.create("error", "Error while adding the transportation")
                this.isOkLoadingTran = false;
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

    getTourDetail() {
      if(this.id) {
      this.tourService.getTourDetail(this.id).subscribe({
        next:(res) =>  {
          this.displayData = res
          console.log(this.displayData)
        },
        error:(err)=>{
          // alert("Error while fetching the Records")
          console.log("error")
        }
      })}
    }

    handleChange(newValue): void {
        this.avatarUrl = newValue;
    }

}    