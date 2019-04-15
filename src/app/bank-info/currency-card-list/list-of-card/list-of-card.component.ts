import { Component, OnInit } from '@angular/core';
import { BankInfo } from '../../model/bank-info.model';
import { BankInfoService } from '../../service/bank-info.service';

@Component({
  selector: 'app-list-of-card',
  templateUrl: './list-of-card.component.html',
  styleUrls: ['./list-of-card.component.scss']
})
export class ListOfCardComponent implements OnInit {

  public userDataCard: BankInfo[];
  constructor(private bankService: BankInfoService) { }

  ngOnInit() {
    this.getUserDataCards();
  }

  public getUserDataCards(): void {
    this.bankService.getUserBankDataLists().subscribe((respone: BankInfo[]) => {
      this.userDataCard = respone;
      console.log('data', this.userDataCard);
    });
  }

}
