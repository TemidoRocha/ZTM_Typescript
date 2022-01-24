// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

/**
 * the idea here is to hide all properties that we don't want other engineers to access.
 * In this case we only are able to create a map
 */
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

  /**
   * addMarker(mappable: User | Company): void {
   * when we use the User | Company, TS will match the properties that are the same
   * and will only allow the ones that match
   *
   * Instead we will use an interface with
   * instructions on how to be an argument to 'addMarker'
   */
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
