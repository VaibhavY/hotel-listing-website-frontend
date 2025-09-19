import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-contact',
  templateUrl: './header-contact.component.html',
  styleUrls: ['./header-contact.component.css']
})
export class HeaderContactComponent implements OnInit {

  destroy$ = new Subject();
  countries:any = [];

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getCountry();
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
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
  saveContact(){
    $('#joinBtn2').html('Processing...');
    const data = {
      name:$('#name').val(),
      email:$('#email').val(),
      phone:$('#phone').val(),
      country:$('#country').val(),
      age:$('#age').val(),
    };
    this.appService.login('contact/save',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      $('#joinBtn2').html('Submit');
      if(r.success){
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#country').val('');
        $('#age').val('');
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

