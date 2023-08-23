import { FC, useEffect, useState } from "react";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface Props {
  className?: string;
  lat: number;
  lng: number;
}

const Map: FC<Props> = ({ className, lat, lng }) => {
  return (
    <MapContainer
      className={className}
      zoom={3}
      center={[lat, lng]}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} />
      <ChangeMapView lat={lat} lng={lng} />
    </MapContainer>
  );
};

const ChangeMapView: FC<Props> = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 10);
  }, [lat, lng, map]);

  return null;
};

export default Map;
