import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-popup',
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.css']
})
export class ContactPopupComponent implements OnInit {

  destroy$ = new Subject();
  showpopup = false;
  countries:any = [];

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getCountry();
    setTimeout(()=>{this.showpopup = true;}, 10000);
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  closePopup(){
    this.showpopup = false;
  }
  getCountry(){
    const data = {};
    this.appService.login('country/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.countries = r.countries;
      }else{

      }
    },error =>{

    });
  }
  saveContactPopup(){
    $('#pop-submit-btn').html('Processing...');
    const data = {
      name:$('#c_name').val(),
      email:$('#c_email').val(),
      phone:$('#c_mobile').val(),
      country:$('#c_country').val(),
      age:$('#c_age').val(),
    };
    this.appService.login('contact/save',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      $('#pop-submit-btn').html('Submit');
      if(r.success){
        $('#c_name').val('');
        $('#c_email').val('');
        $('#c_mobile').val('');
        $('#c_country').val('');
        $('#c_age').val('');
        Swal.fire(
          'Success!',
          r.message,
          'success'
        ); 
      }else{
        Swal.fire(
          'Error!',
          r.message,
          'error'
        ); 
      }
    },error =>{

    });
  }

}

