import { Component } from '@angular/core'


@Component({
   selector : 'app-hotel',
   templateUrl : 'hotel.component.html'
})
export class MyHotel{
    title : string = "Liste de nos hotels"
    hotels : any[] = [{id : 1,nom : 'Radison'}]
}
