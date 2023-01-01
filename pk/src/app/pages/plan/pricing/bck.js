<div class="pricing_header">
  <div class="container">
    <h1 class="mb-4">GROW YOUR BUSINESS - All in ONE Package</h1>
  </div>
  <ul class="tab_pricing_nav">
    <li [ngClass]="(tab=='1')?'active':''"><a href="javascript:void(0)" (click)="tabshow('1')">Link
        Building</a></li>
    <li [ngClass]="(tab=='2')?'active':''"><a href="javascript:void(0)" (click)="tabshow('2')">Landing Page</a></li>
    <li [ngClass]="(tab=='3')?'active':''"><a href="javascript:void(0)" (click)="tabshow('3')">Advertising</a></li>
    <li [ngClass]="(tab=='4')?'active':''"><a href="javascript:void(0)" (click)="tabshow('4')">Marketing</a></li>
  </ul>
</div>
<!-- {{freepack}} {{exitfree}} -->
<div class="msgbox package_valid_msg" id="msgbox">
  <div class="alert alert-danger text-center" role="alert" *ngIf="errormsg">
    <div class="container">
      <!--  {{errormsg}} -->
      <h4>
        Selected packages is ACTIVE in your account. Please upgrade to add more
        business listings and promotions... <br />Take advantage of the benefits
        now!
      </h4>
      <a href="https://walldirectory.com/billing" class="waves-effect waves-light btn mt-2">View the Package details
        here</a>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</div>



<ng-container *ngIf="tab==1">
  <div class="container">
    <div class="row  tab-pricing">
      <div class="col-md-4">
        <h2 class="pricing_heading"
          *ngIf="(!freepack && !exitfree) || (freepack && exitfree) || (!freepack && exitfree)  ">Link Building</h2>
        <h2 class="pricing_heading" *ngIf="freepack && !exitfree">Free</h2>

        <!--  <h5>ONE MONTH PACKAGE</h5> -->
        <div class="bt b--gray8"></div>
        <div class="pack_amount">
          <div *ngIf="(!freepack && !exitfree) || (freepack && exitfree) || (!freepack && exitfree)"> <sup>$</sup> {{
            pack[6928].price }}<span> /
              Month </span></div>
          <div *ngIf="freepack && !exitfree"> <sup>$</sup>{{ pack[766].price }}<span> /
              Month </span></div>
        </div>

        <p>$2.99 Setup Fee (All Locations)<br/>
            (One Time)(instant approval)<br/>Improve your brand reputation and website traffic. submit your business to the local directory to get more
          website visitors. </p>
        <a class="pk-learnmore" href="/plans/link-building-service">Read more</a>
        <div class="bt b--gray8"></div>
        <p class="notetxt"><span>Support response: Median email response time of less than 4 hours for urgent issues,
            and
            <a href="mailto:support@walldirectory.com">Contact Email</a> for any enquiry.
          </span></p>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>1 Business
              Listing</strong></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>1 Promotion /
              landing page</strong></li>
          <li><img src="../../../../assets/images/circle-x.svg" alt="Pricing Plan">Open engagement</li>
          <li><img src="../../../../assets/images/circle-x.svg" alt="Pricing Plan">Email List Building</li>
          <li><img src="../../../../assets/images/circle-x.svg" alt="Pricing Plan"> No Competitor Ads</li>
          <li><img src="../../../../assets/images/circle-x.svg" alt="Pricing Plan">Access Client Request</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> Video Landing Page</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Descriptions</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Map Location</li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visiter Counts</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visit Website</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Show Social Medias</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Call Now</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Photo Gallery</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Social Media Share</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Enquiry</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Rating & Reviews</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Contact Info</li>
        </ul>
      </div>
      <div class="col-md-12">
        <div class="pricing_btn_sec text-left mt-3 mb-2">
          <h3>( Business location USA & Global ) Instant Approval </h3>
          <a href="javascript:void(0)" (click)="checkout('766')"
            class="free-package-766 waves-effect waves-light btn-large" *ngIf="freepack && !exitfree">Add a
            Business</a>
          <a href="javascript:void(0)" (click)="checkout('6928')"
            class="paidpage-6928 waves-effect waves-light btn-large"
            *ngIf="(!freepack && !exitfree) || (freepack && exitfree) || (!freepack && exitfree)">Add a
            Business</a>
          <p>* Additional terms and conditions may apply.</p>
        </div>
      </div>
    </div>

  </div>
</ng-container>

<ng-container *ngIf="tab==2">
  <div class="container">
    <div class="row  tab-pricing">
      <div class="col-md-4">
        <h2 class="pricing_heading">Landing Page</h2>
        <!--  <h5>ONE MONTH PACKAGE</h5> -->
        <div class="bt b--gray8"></div>
        <div class="pack_amount">
          <div> <sup>$</sup> {{ pack[162].price }}<span> /
              Month </span></div>
        </div>

        <p>No Setup Fee<br/>
          (instant approval)<br/>Increase your conversion rate here. Generate unlimited leads and engage with interested shoppers. Use the
          Lead capture landing page builder to connect with committed prospects. </p>
        <a class="pk-learnmore" href="/plans/landing-page-builder">Read more</a>
        <div class="bt b--gray8"></div>
        <p class="notetxt"><span>Support response: Median email response time of less than 4 hours for urgent issues,
            and
            <a href="mailto:support@walldirectory.com">Contact Email</a> for any enquiry.
          </span></p>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>1 Business Listing
            </strong></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>3 Promotion /
              landing page</strong></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Open engagement</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Email List Building</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> No Competitor Ads</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Access Client Request</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> Video Landing Page</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Descriptions</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Map Location</li>
        </ul>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visiter Counts</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visit Website</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Show Social Medias</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Call Now</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Photo Gallery</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Social Media Share</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Enquiry</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Rating & Reviews</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Contact Info</li>
        </ul>
      </div>
      <div class="col-md-12">
        <div class="pricing_btn_sec text-left mt-3 mb-2">
          <h3>( Business location USA & Global ) Instant Approval </h3>
          <a href="javascript:void(0)" (click)="checkout('162')" class="waves-effect waves-light btn-large">Add a
            Business</a>
          <p>* Additional terms and conditions may apply.</p>
        </div>
      </div>
    </div>
  </div>
</ng-container>

<ng-container *ngIf="tab==3">
  <div class="container">
    <div class="row  tab-pricing">
      <div class="col-md-4">
        <h2 class="pricing_heading">Advertising</h2>
        <div class="bt b--gray8"></div>
        <div class="pack_amount">
          <div> <sup>$</sup> {{ pack[92].price }}<span> /
              Month </span></div>
        </div>
        <p>No Setup Fee<br/>
          (instant approval)<br/>Advertise to local shoppers here. connect with qualified leads to sell products and services now. Get
          unlimited leads, website traffic and customer connections with this subscription.</p>
        <a class="pk-learnmore" href="/plans/advertising">Read more</a>
        <div class="bt b--gray8"></div>
        <p class="notetxt"><span>Support response: Median email response time of less than 4 hours for urgent issues,
            and
            <a href="mailto:support@walldirectory.com">Contact Email</a> for any enquiry.
          </span></p>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>1 Business
              Listing</strong></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><strong>5 Promotion /
              landing page</strong></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Open engagement</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Email List Building</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> No Competitor Ads</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Access Client Request</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> Video Landing Page</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Descriptions</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Map Location</li>
        </ul>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visiter Counts</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visit Website</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Show Social Medias</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Call Now</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Photo Gallery</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Social Media Share</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Enquiry</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Rating & Reviews</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Contact Info</li>
        </ul>
      </div>
      <div class="col-md-12">
        <div class="pricing_btn_sec text-left mt-3 mb-2">
          <h3>( Business location USA & Global ) Instant Approval </h3>
          <a href="javascript:void(0)" (click)="checkout('92')" class="waves-effect waves-light btn-large">Add a
            Business</a>
          <p>* Additional terms and conditions may apply.</p>
        </div>
      </div>
    </div>
  </div>
</ng-container>

<ng-container *ngIf="tab==4">
  <div class="container">
    <div class="row  tab-pricing">
      <div class="col-md-4">
        <h2 class="pricing_heading">Marketing</h2>
        <div class="bt b--gray8"></div>
        <div class="pack_amount">
          <div> <sup>$</sup> {{ pack[91].price }}<span> /
              Month </span></div>
        </div>
        <p>No Setup Fee<br/>
          (instant approval)<br/>Use the SEO marketing tools to maximize lead conversion. Build effective pages, ads and promotions to get
          more website traffic, online bookings and qualified lead engagement.</p>
        <a class="pk-learnmore" href="/plans/marketing">Read more</a>
        <div class="bt b--gray8"></div>
        <p class="notetxt"><span>Support response: Median email response time of less than 4 hours for urgent issues,
            and
            <a href="mailto:support@walldirectory.com">Contact Email</a> for any enquiry.
          </span></p>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><b>Unlimited Business
              Listing</b>
          </li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"><b>Unlimited Promotion /
              landing page</b></li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Open engagement</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Email List Building</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> No Competitor Ads</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Access Client Request</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan"> Video Landing Page</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Descriptions</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Map Location</li>
        </ul>
      </div>

      <div class="col-md-4">
        <ul>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visiter Counts</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Visit Website</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Show Social Medias</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Call Now</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Photo Gallery</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Social Media Share</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Enquiry</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Rating & Reviews</li>
          <li><img src="../../../../assets/images/check-mark.svg" alt="Pricing Plan">Contact Info</li>
        </ul>

      </div>
      <div class="col-md-12">
        <div class="pricing_btn_sec text-left mt-3 mb-2">
          <h3>( Business location USA & Global ) Instant Approval </h3>
          <a href="javascript:void(0)" (click)="checkout('91')" class="waves-effect waves-light btn-large">Add a
            Business</a>
          <p>* Additional terms and conditions may apply.</p>
        </div>
      </div>
    </div>
  </div>
</ng-container>