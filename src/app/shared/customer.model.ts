export interface Customer {
  customerId?: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  vat_number?: number;
  number_of_consumers: number;
  cubic_meters_pumped?: number;
  active?: boolean;
  last_modified?: Date;
  created_at?: Date;
  member_number?: number;

}


