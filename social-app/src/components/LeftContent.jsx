import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  } from "@nextui-org/react";

function LeftContent() {
  return (
    <div>
        <p className="text-small font-semibold leading-none text-white ml-5 mt-5">Me</p>
      <div className="flex justify-center">
        <Card className="max-w-[440px] mt-5 mx-3 bg-gray-900 text-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Abdullah Al Zumar
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @alzumar23
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-4 py-0 text-small text-default-400">
            <p>
              An NSUer majoring in CSE.
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex ml-60 gap-1">
              <p className="font-semibold text-default-400 text-small">7.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default LeftContent;
