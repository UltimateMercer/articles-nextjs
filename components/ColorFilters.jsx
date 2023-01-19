import BlueRedGolden from "./Filters/BlueRedGolden";
import Burn from "./Filters/Burn";
import CyberpunkV from "./Filters/CyberpunkV";
import CyberpunkVi from "./Filters/CyberpunkVi";
import CyberpunkVii from "./Filters/CyberpunkVii";
import CyberpunkViii from "./Filters/CyberpunkViii";
import CyberpunkIx from "./Filters/CyberpunkIx";
import DarkRed from "./Filters/DarkRed";
import Dunastone from "./Filters/Dunastone";
import IceCream from "./Filters/IceCream";
import IceCreamPlus from "./Filters/IceCreamPlus";
import LinearBurn from "./Filters/LinearBurn";
import NeonLights from "./Filters/NeonLights";
import PinkBlue from "./Filters/PinkBlue";
import PurpleRedOrange from "./Filters/PurpleRedOrange";
import Tester from "./Filters/Tester";

const ColorFilters = () => {
  const style = {
    display: "block",
    width: "auto !important",
    height: "0 !important",
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style}>
      <BlueRedGolden />
      <Burn />
      <CyberpunkV />
      <CyberpunkVi />
      <CyberpunkVii />
      <CyberpunkViii />
      <CyberpunkIx />
      <DarkRed />
      <Dunastone />
      <IceCream />
      <IceCreamPlus />
      <LinearBurn />
      <NeonLights />
      <PinkBlue />
      <PurpleRedOrange />
      <Tester />
    </svg>
  );
};

export default ColorFilters;
