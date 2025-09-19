import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopularSearchComponent } from './popular-search/popular-search.component';
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
import { BecomeAMemberComponent } from './become-a-member/become-a-member.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { PartnerSignupComponent } from './partner-signup/partner-signup.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderContactComponent } from './header-contact/header-contact.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { ContactPopupComponent } from './contact-popup/contact-popup.component';
import { CareerComponent } from './career/career.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import {Nl2BrPipeModule} from 'nl2br-pipe';
import { B2bComponent } from './b2b/b2b.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { MembershipThanksComponent } from './membership-thanks/membership-thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PopularSearchComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    SiteMapComponent,
    ContactUsComponent,
    MembershipComponent,
    ExperienceComponent,
    HotelsComponent,
    HotelComponent,
    LoginComponent,
    ResortsComponent,
    SignupComponent,
    BecomeAMemberComponent,
    BlogsComponent,
    BlogComponent,
    NewsComponent,
    NewsDetailsComponent,
    PartnerSignupComponent,
    HeaderContactComponent,
    FooterContactComponent,
    ContactPopupComponent,
    CareerComponent,
    LeadershipComponent,
    CompanyOverviewComponent,
    B2bComponent,
    MembershipFormComponent,
    MembershipThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Nl2BrPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
