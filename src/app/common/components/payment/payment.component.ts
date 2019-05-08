import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  stripe: any
  elements: any
  

  @ViewChild('cardNumber') cardNumRef: ElementRef
  @ViewChild('cardExpiry') cardExpiryRef: ElementRef
  @ViewChild('cardCvc') cardCvcRef: ElementRef

  @Output() paymentComfirmed = new EventEmitter()

  cardNumber: any
  cardExpiry: any
  cardCvc: any

  error: string
  validatingCardFlag: boolean = false
  token: any

  constructor() {
    this.stripe = Stripe(environment.STRIPE_PUBLISH_KEY);
    this.elements = this.stripe.elements();

    this.onChange = this.onChange.bind(this)
  }

  ngOnInit() {
    this.cardNumber = this.elements.create('cardNumber', {style})
    this.cardNumber.mount(this.cardNumRef.nativeElement)

    this.cardExpiry = this.elements.create('cardExpiry', {style})
    this.cardExpiry.mount(this.cardExpiryRef.nativeElement)

    this.cardCvc = this.elements.create('cardCvc', {style})
    this.cardCvc.mount(this.cardCvcRef.nativeElement)

    this.cardNumber.addEventListener('change', this.onChange)
    this.cardExpiry.addEventListener('change', this.onChange)
    this.cardCvc.addEventListener('change', this.onChange)
  }

  ngOnDestroy() {
    this.cardNumber.removeEventListener('change', this.onChange)
    this.cardExpiry.removeEventListener('change', this.onChange)
    this.cardCvc.removeEventListener('change', this.onChange)

    this.cardNumber.destroy()
    this.cardExpiry.destroy()
    this.cardCvc.destroy()

  }

  isCardValid(): boolean {
    return this.cardNumber._complete && this.cardExpiry._complete && this.cardCvc._complete
  }

  onChange({error}) {
    if(error) {
      this.error = error.message
    } else {
      this.error = ""
    }
  }

  async onSubmit() {
    this.validatingCardFlag = true

    const {token, error} = await this.stripe.createToken(this.cardNumber)
    /* As same as above.
    const res = await this.stripe.createToken(this.cardNumber)
    res.token 
    res.error
    */
    
    this.validatingCardFlag = false

    if(error) {
      console.error('error')
    } else {
      this.token = token
      this.paymentComfirmed.emit(token)
    }
  }
  
}


const style = {
  base: {
    iconColor: '#666EE8',
    color: '#31325F',
    lineHeight: '40px',
    fontWeight: 300,
    fontFamily: 'Helvetica Neue',
    fontSize: '15px',

    '::placeholder': {
      color: '#CFD7E0',
    },
  },
};