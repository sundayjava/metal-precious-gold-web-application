import { CircleMarker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

export default function Map() {
  return (
    <div>
      <MapContainer center={[40.609787846393196, 20.7890265133657]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[40.609787846393196, 20.7890265133657]}
          color="transparent"
          fillColor="green"
          opacity={5}
          radius={10}
        >
          <Popup>
            <h2>Tooltip for CircleMarker</h2>
            <Link href="https://react-leaflet.js.org/docs/start-installation/">
              Click here
            </Link>
          </Popup>
        </CircleMarker>
        <CircleMarker
          center={[20.609787846393196, 20.7890265133657]}
          color="transparent"
          fillColor="green"
          opacity={5}
          radius={10}
        >
          <Popup>
            <h2>Tooltip for CircleMarker</h2>
            <Link href="https://react-leaflet.js.org/docs/start-installation/">
              Click here
            </Link>
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
