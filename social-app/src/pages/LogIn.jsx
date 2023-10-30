import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "../assets/logo.png";

export default function LogIn() {
  return (
    <div className="bg-gray-200 h-[100vh]">
      <div className="flex justify-center">
        <img src={logo} className="h-20 pt-12 mr-3 -mb-10" />
        <h1 className="pt-12 -mb-10 font-extrabold text-3xl font-reemkufi text-inherit">
          NSU Connect
        </h1>
      </div>
      <div className="flex flex-row justify-center m-5 sm:mt-28">
        <Card className="sm:w-unit-9xl bg-gray-100 md:w-[60%] lg:w-[45%]">
          <CardHeader className="flex justify-center gap-3">
            <div className="flex flex-col">
              <p className="text-2xl m-5 font-lato flex justify-center font-bold">
                Welcome Back!
              </p>
              <p className="font-lato font-medium text-sm sm:text-lg">
                Enter your email below to log in to your account
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid gap-2 m-5">
              <p className="font-ubuntu font-bold" htmlFor="email">
                Email
              </p>
              <input
                id="email"
                className="rounded-xl p-2"
                type="email"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="grid gap-2 m-5">
              <p className="font-ubuntu font-bold" htmlFor="password">
                Password
              </p>
              <input className="rounded-xl p-2" id="password" type="password" />
            </div>
            <div className="m-3 flex justify-center">
              <Button
                fullWidth
                as={Link}
                href="/home"
                radius="lg"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg hover:from-pink-500 font-reemkufi"
              >
                Log In
              </Button>
            </div>
          </CardBody>
          <CardFooter className="flex justify-center p-7">
            <p className="font-ubuntu font-semibold">
              Don&apos;t have an account?
            </p>
            <Link showAnchorIcon href="/signup">
              <p className="font-ubuntu font-semibold">&nbsp;Sign Up</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
