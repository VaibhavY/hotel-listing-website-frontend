import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.css']
})
export class MembershipFormComponent implements OnInit {

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
  saveContact(){
      $('#joinBtn').html('Processing...');
      const data = {
        name:$('#name').val(),
        flat_no:$('#flat_no').val(),
        building:$('#building').val(),
        street:$('#street').val(),
        area:$('#area').val(),
        landmark:$('#landmark').val(),
        city:$('#city').val(),
        state:$('#state').val(),
        country:$('#country').val(),
        postal_code:$('#postal_code').val(),
        mobile:$('#mobile').val(),
        alt_mobile:$('#alt_mobile').val(),
        land_line:$('#land_line').val(),
        email:$('#email').val(),
        pan_no:$('#pan_no').val(),
        address_proof:$('#address_proof').val(),
        address_proof_no:$('#address_proof_no').val(),
        c_name:$('#c_name').val(),
        c_building:$('#c_building').val(),
        c_street:$('#c_street').val(),
        c_area:$('#c_area').val(),
        c_landmark:$('#c_landmark').val(),
        c_city:$('#c_city').val(),
        c_state:$('#c_state').val(),
        c_country:$('#c_country').val(),
        c_postal_code:$('#c_postal_code').val(),
        c_mobile:$('#c_mobile').val(),
        c_alt_mobile:$('#c_alt_mobile').val(),
        c_landline:$('#c_landline').val(),
        c_email:$('#c_email').val(),
        salutation:$('#salutation').val(),
        b_name:$('#b_name').val(),
        b_gender:$('#b_gender').val(),
        b_nationality:$('#b_nationality').val(),
        b_dob:$('#b_dob').val(),
        b_relation:$('#b_relation').val(),
        b_pan_no:$('#b_pan_no').val(),
        b_address_proof:$('#b_address_proof').val(),
        b_address_proof_no:$('#b_address_proof_no').val()
      };
      this.appService.login('membership/save',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
        var r:any=res;
        $('#joinBtn').html('Join the club');
        if(r.success){
          this.router.navigateByUrl('/membership-thanks');
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

