import {NavigationArrow, PhoneCall, UserFocus } from "phosphor-react";

export function SideBar() {
  return (
    <div className="bg-[#2A2634] w-30 grid grid-flow-row auto-rows-max">
      <NavigationArrow size={32} weight="thin" />
      <PhoneCall size={32} weight="thin" />
      <UserFocus size={32} weight="thin" />
    </div>
  );
}

