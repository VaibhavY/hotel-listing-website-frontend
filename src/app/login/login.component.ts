import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  login(){
    $('#regBtn').val('Processing...');
    const data = {
      email:$('#email').val(),
      password:$('#password').val()
    };
    this.appService.login('login',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      $('#regBtn').val('Login as Customer');
      if(r.success){
        $('#email').val('');
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



