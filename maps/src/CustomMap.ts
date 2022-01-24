/**
 * the idea here is to hide all properties that we don't want other engineers to access.
 * In this case we only are able to create a map
 */

import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    let element: HTMLElement = document.getElementById(divId) as HTMLElement;
    this.googleMap = new google.maps.Map(element, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 5,
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
