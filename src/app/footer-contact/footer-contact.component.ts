import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.css']
})
export class FooterContactComponent implements OnInit {

  destroy$ = new Subject();
  countries:any = [];
  heroSection:any = [];
  termsSection:any = [];

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getHeroSection();
    this.getTermsSection();
    this.getCountry();
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  getHeroSection(){
    const data = {id:17};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.heroSection = r.record;
      }else{

      }
    },error =>{

    });
  }
  getTermsSection(){
    const data = {id:18};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.termsSection = r.record;
      }else{

      }
    },error =>{

    });
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
    $('#joinBtn').html('Processing...');
    const data = {
      name:$('#name').val(),
      email:$('#email').val(),
      phone:$('#phone').val(),
      country:$('#country').val(),
      age:$('#age').val(),
    };
    this.appService.login('contact/save',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      $('#joinBtn').html('Join the club');
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
