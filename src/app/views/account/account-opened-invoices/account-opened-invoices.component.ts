import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-opened-invoices',
  templateUrl: './account-opened-invoices.component.html',
  styleUrls: ['./account-opened-invoices.component.scss'],
})
export class AccountOpenedInvoicesComponent implements OnInit {
  public rows = [
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
    {
      invoice_date: '08/31/2019',
      invoice_number: 1253152,
      account_number: 3754235,
      due_date: '08/31/2019',
      total_amount: 5,
      balance_number: 634,
    },
  ];
  public columns = [
    { prop: 'invoice_date', name: 'Invoice Date' },
    { prop: 'invoice_number', name: 'Invoice #' },
    { prop: 'account_number', name: 'Account #' },
    { prop: 'due_date', name: 'Due Date' },
    { prop: 'total_amount', name: 'Total Amount' },
    { prop: 'balance_number', name: 'Balance #' },
  ];

  constructor() {}

  ngOnInit() {}
}
