import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MembershipComponent } from './membership/membership.component';
import { ExperienceComponent } from './experience/experience.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { ResortsComponent } from './resorts/resorts.component';
import { SignupComponent } from './signup/signup.component';
import { PartnerSignupComponent } from './partner-signup/partner-signup.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CareerComponent } from './career/career.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { B2bComponent } from './b2b/b2b.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { MembershipThanksComponent } from './membership-thanks/membership-thanks.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'careers',component:CareerComponent
  },
  {
    path:'leadership',component:LeadershipComponent
  },
  {
    path:'company-overview',component:CompanyOverviewComponent
  },
  {
    path:'privacy-policy',component:PrivacyPolicyComponent
  },
  {
    path:'terms-of-use',component:TermsOfUseComponent
  },
  {
    path:'site-map',component:SiteMapComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'membership',component:MembershipComponent
  },
  {
    path:'experience',component:ExperienceComponent
  },
  {
    path:'hotels',component:HotelsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'resorts',component:ResortsComponent
  },
  {
    path:'register',component:SignupComponent
  },
  {
    path:'partner-register',component:PartnerSignupComponent
  },
  {
    path:'blogs',component:BlogsComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'blog/:slug',component:BlogComponent
  },
  {
    path:'news-detail/:slug',component:NewsDetailsComponent
  },
  {
    path:'hotel/:slug',component:HotelComponent
  },
  {
    path:'b2b',component:B2bComponent
  },
  {
    path:'membership-from',component:MembershipFormComponent
  },
  {
    path:'membership-thanks',component:MembershipThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
