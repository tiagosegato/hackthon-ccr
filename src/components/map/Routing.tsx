import { MapLayer, withLeaflet } from 'react-leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
declare let L: any;

class Routing extends MapLayer {
  createLeafletElement(props: any) {

    const { from, to, map, onInfoRounte }: any = props;

    let routeControl = L.Routing.control({
      waypoints: [
        L.latLng(from),
        L.latLng(to),
      ],
      lineOptions: {
        styles: [
          {
            color: "#f24646",
            opacity: 0.8,
            weight: 4
          }
        ]
      },
      createMarker: function (i: number, waypoint: any, n: number) {
        const marker = L.marker(from, {
          icon: L.icon({
            iconUrl: require('../img/caminhao.svg'),
            iconSize: [50, 50],
          })
        });
        return marker;
      },
      show: false,
    }).addTo(map.leafletElement);

    routeControl.on('routesfound', (e: any) => {
      const { routes } = e;
      onInfoRounte(routes[0]);
      //alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
    });

    return routeControl.getPlan();
  }
}

export default withLeaflet(Routing);