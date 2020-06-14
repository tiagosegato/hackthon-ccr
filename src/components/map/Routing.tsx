import { MapLayer, withLeaflet } from 'react-leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
declare let L: any;

class Routing extends MapLayer {
  createLeafletElement(props: any) {

    const { from, to, map, infoRounte }: any = props;

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
      addWaypoints: false,
      routeWhileDragging: false,
      show: false,
    }).addTo(map.leafletElement);

    routeControl.on('routesfound', (e: any) => {
      const { routes } = e;
      const { summary } = routes[0];
      infoRounte(summary);
      //alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
    });

    return routeControl.getPlan();
  }
}

export default withLeaflet(Routing);