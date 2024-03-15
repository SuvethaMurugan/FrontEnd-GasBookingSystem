export class Customer {
    id?: number
    userName?: string
    password?: string
    email?: string
    mobileNo?: string
    address?: Address
    bank?: any
    bookingList?: any
    active?: boolean
    
  }
  
export class Address {
    id?: number
    doorNo?: number
    streetName?: string
    pinCode?: string
    city?: string
}