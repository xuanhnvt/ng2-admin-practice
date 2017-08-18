/*"id": 51,
      "name": "PV Combank",
      "logo": "148",
      "slug": "pvb",
      "max_loan_duration": 240,
      "main_color": "#dca03c",
      "stage": "[{\"id\":1,\"rate\":7.5,\"month\":12,\"$$hashKey\":\"object:539\"},{\"id\":2,\"rate\":10.6,\"month\":240,\"$$hashKey\":\"object:551\"}]"*/

export interface BankBranch {
    id: number;
    name: string;
    slug: string;
    bank_id: number;
}

export interface Bank {
    id: number;
    name: string;
    logo: number;
    slug: string;
    max_loan_duration: number;
    main_color: string;
    stage: Stage;
}

export interface Stage {
    id: number;
    rate: number;
    month: number;
    $$hashKey: HashKey;
}

export interface HashKey {
    object: number;
}

/*{"id":32,"name":"Chi Nhánh 1","slug":"cn1","bank_id":51}*/
