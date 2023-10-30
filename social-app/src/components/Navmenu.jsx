import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  return (
    <>
      <Navbar height="6rem" maxWidth="xl" isBordered className="bg-blue-400">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pl-3" justify="center">
          <NavbarBrand>
            <Link href="/home" className="text-black">
              <p className="font-extrabold text-xl font-reemkufi text-white">
                NSU Connect
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 sm:pl-3">
          <NavbarBrand>
            <Link href="/home" className="text-blue-gray-900">
              <p className="font-extrabold text-xl font-reemkufi text-white">
                NSU Connect
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:pr-3" justify="end">
          <NavbarItem>
            <Link
              className="font-lato text-white transition ease-in-out duration-300 hover:text-black"
              href="/home"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/profile"
              className="font-lato text-white transition ease-in-out duration-300 hover:text-black"
            >
              My Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-white font-reemkufi hover:text-black hover:border-warning-900"
              color="warning"
              href="/"
              variant="shadow"
            >
              Sign Out
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-blue-400">
          <NavbarMenuItem>
            <Link
              className="w-full text-white hover:text-black"
              href="/home"
              size="lg"
              onPress={close}
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full text-white hover:text-black"
              href="/profile"
              size="lg"
              onPress={close}
            >
              My Profile
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full text-white hover:text-black"
              color="danger"
              href="/"
              size="lg"
              onPress={close}
            >
              Sign Out
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
