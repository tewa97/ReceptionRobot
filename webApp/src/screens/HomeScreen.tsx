import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components/mapsComponents';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  )
}
