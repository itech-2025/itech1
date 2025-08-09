import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import marker from "../assets/img/marker.svg"
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next'; 
const Map = () => { 
  const { t } = useTranslation(); 
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [40, 40], // adjust size if needed
    iconAnchor: [20, 40], // position relative to the point
    popupAnchor: [0, -40] // where the popup appears
    });

  const position=[21.519730568815486, 39.18527398115955]; // Initial center of the map (latitude, longitude)
  return ( 
    //container
    <div dir='rtl' className='lg:mt-30 mt-15 lg:mx-15 md:mx-10 mx-5 overflow-hidden relative'>
     <div className="flex gap-20 absolute sm:top-5  sm:right-10 z-[30] bg-white border border-gray-200 px-6 py-4 text-right">
      <div className="flex flex-col items-start w-fit gap-2">
      {/*description container*/}
        <h4 className="text-gray-800 text-base font-['Montserrat-Arabic'] leading-tight">{t("contact.map-title")}</h4>
        <p className="text-gray-600 text-sm max-w-xs font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">{t("contact.map-location")}</p> 
         {/*button to show bigger map take the user to google map*/}
         <button onClick={() => window.open('https://www.google.com/maps/place/Gulf+InfoTech+Solutions+(EST+KHLIJ+NETWORK+TECHNICAL+INFORMATION)/@21.5196188,39.1803955,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3cff67ed0a853:0x2c8ae8117c6eb056!8m2!3d21.5196189!4d39.1852664!16s%2Fg%2F11g22x3f86?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D', '_blank')} className="text-primary-3 cursor-pointer hover:text-primary text-sm font-['Montserrat-Arabic'] leading-tight">{t("contact.map-option")}</button>
      </div> 
    </div> 
      <MapContainer
      center={position} // Initial center of the map (latitude, longitude)
      zoom={15} // Zoom level for map detail
      className='h-120 w-[100%] rounded-3xl z-0'
      >
      {/* TileLayer defines the visual style of the map using CARTO's light theme */}
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // URL template for map tiles
          attribution='&copy; <a href="https://carto.com/">CARTO</a>' // Attribution for tile provider
        />
        {/* Marker placed at the center position with a custom icon */}
        <Marker position={position} icon={myIcon}>
         {/* Popup displays localized text when marker is clicked */}
        <Popup className='text-gray-900 text-base font-normal font-["Montserrat-Arabic"] leading-normal tracking-wide'>
          {t("contact.map-title")}
        </Popup>
        </Marker>
      </MapContainer>
    </div>
  ) 
} 
export default Map