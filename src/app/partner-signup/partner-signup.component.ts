import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partner-signup',
  templateUrl: './partner-signup.component.html',
  styleUrls: ['./partner-signup.component.css']
})
export class PartnerSignupComponent implements OnInit {

  destroy$ = new Subject();

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  register(){
    $('#regBtn').val('Processing...');
    const data = {
      name:$('#name').val(),
      email:$('#email').val(),
      phone:$('#phone').val(),
      password:$('#password').val(),
      type:'Vendor'
    };
    this.appService.login('register',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      $('#regBtn').val('Submit');
      if(r.success){
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#password').val('');
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


