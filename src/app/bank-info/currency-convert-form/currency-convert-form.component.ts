import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BankInfo, convertData } from '../model/bank-info.model';
import { BankInfoService } from '../service/bank-info.service';

@Component({
  selector: 'app-currency-convert-form',
  templateUrl: './currency-convert-form.component.html',
  styleUrls: ['./currency-convert-form.component.scss']
})
export class CurrencyConvertFormComponent implements OnInit {

  /** Bank info form group is use to add data of bank details */
  public bankInfoFormGroup: FormGroup;
  /** Bank is a type of bankinfo array */
  public bank: BankInfo[];
  /** Base currency item of currency convert form component */
  public baseCurrencyItem: string;
  /** target currency item store here */
  public targetCurrencyItem: string;
  /** Convert price of currency convert form component */
  public convertPrice: string;

  constructor(private fb: FormBuilder, private bankService: BankInfoService) { }

  /** on init is frist call */
  public ngOnInit(): void {

    this.bankInfoFormGroup = this.fb.group({
      bankName: [''],
      baseCurrency: [''],
      amount: [''],
      targerCurrency: ['']
    });
  }

  public getDataByFormGroup(): void {
    console.log('value', this.bankInfoFormGroup.value);
    this.baseCurrencyItem = this.bankInfoFormGroup.controls.baseCurrency.value;
    this.targetCurrencyItem = this.bankInfoFormGroup.controls.targerCurrency.value;
    console.log('bi->', this.baseCurrencyItem);
    console.log('ti->', this.targetCurrencyItem);
    this.bankService.getConvertedPrice(this.baseCurrencyItem, this.targetCurrencyItem).subscribe((res: convertData) => {
      console.log(res);
      this.convertPrice = res[this.baseCurrencyItem + '_' + this.targetCurrencyItem];
      this.bankInfoFormGroup.controls.amount.value;



    });
    // this.addBankInfo();
  }

  // public addBankInfo():void{
  //   this.bankService.addBankRecord().subscribe((response:BankInfo)=>{

  //   })
  // }
}
