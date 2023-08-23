import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("@/app/IPAddressTracker/components/map/Map"),
  {
    loading: () => <p className="m-auto">loading...</p>,
    ssr: false,
  }
);

export default DynamicMap;
