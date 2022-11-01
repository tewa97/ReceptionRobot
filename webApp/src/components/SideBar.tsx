import { NavigationArrow, PhoneCall, UserFocus } from "phosphor-react";

export function SideBar() {
  return (
    <aside className="grid space-y-10 place-content-center h-full w-1/12 text-gray-200">
        <NavigationArrow size={32} weight="thin"/>
        <PhoneCall size={32}  weight="thin" />
        <UserFocus size={32} weight="thin" />
    </aside>
  );
}

