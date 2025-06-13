import { 
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from 'flowbite-react'

export default function Header(){
  return (
    <Navbar 
      fluid 
      className="
        bg-blue-800    /* 背景色 */
        py-4           /* 上下パディングを増やして高さを拡張 */
        border-t       /* 上部に線 */
        border-b       /* 下部に線 */
        border-gray-200  /* 線の色を薄いグレーに */
        sticky top-0 z-50   /* 常に画面トップに表示 */
      "
    >
      <NavbarBrand href="/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          友人用VPN
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/home">Home</NavbarLink>
        <NavbarLink href="/HowTo">How-to</NavbarLink>
        <NavbarLink href="/Download">Download</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}