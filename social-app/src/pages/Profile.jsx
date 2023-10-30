import Navmenu from "../components/Navmenu";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function Profile() {
  
  const [isLiked, setIsLiked] = React.useState(false);
  const [isLiked2, setIsLiked2] = React.useState(false);
  
  return (
    <div className="bg-black h-[100%]">
      <Navmenu />
      <div className="flex justify-center">
        <div className="flex justify-center">
          <Card className="w-[840px] mt-5 p-3 mx-3 bg-gray-900 text-white">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 ml-2 items-start justify-center">
                  <h4 className="text-5xl font-semibold leading-none text-white">
                    Abdullah Al Zumar
                  </h4>
                  <h5 className="text-md tracking-tight text-default-400">
                    @alzumar23
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="gap-3 ml-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-2xl">7.1K</p>
                <p className="text-default-400 text-2xl">Followers</p>
              </div>
            </CardFooter>
            <CardBody className="px-4 py-0 text-small text-default-400">
              <p className="text-large">An NSUer majoring in CSE.</p>
              <span className="pt-2">
                Blood Group:&nbsp;
                <span className="py-2" aria-label="computer" role="img">
                  B+
                </span>
              </span>
            </CardBody>
          </Card>
        </div>
      </div>
      <p className="flex justify-center text-xl font-semibold leading-none text-white mt-5">
        Posts
      </p>
      <div>
        <div className="flex justify-center">
          <Card className="w-[840px] mt-5 mx-3 bg-gray-900 text-white">
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
                টাইমস হায়ার এডুকেশন ২০২৪ এর বিষয়ভিত্তিক র‍্যাঙ্কিংয়ে এনএসইউ’র
                জয়জয়কার
              </p>
              <span className="pt-2">
                #Success
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <Button
                className={
                  isLiked ? "bg-red-400 text-white border-default-200" : ""
                }
                color="transparent"
                radius="full"
                size="sm"
                variant={isLiked ? "solid" : "bordered"}
                onPress={() => setIsLiked(!isLiked)}
              >
                {isLiked ? "Liked" : "Like"}
              </Button>
              <div className="flex ml-96 gap-1">
                <p className="font-semibold text-default-400 text-small ml-64">
                  7.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div>
      <div className="flex justify-center">
        <Card className="w-[840px] mt-5 mx-3 bg-gray-900 text-white">
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
              Hello everyone! I&apos;m new here!
            </p>
            <span className="pt-2 flex justify-center">
              <img src="src/assets/nsu.jpg" alt="nsu" className="rounded-md" />
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <Button
              className={
                isLiked2 ? "bg-red-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isLiked2 ? "solid" : "bordered"}
              onPress={() => setIsLiked2(!isLiked2)}
            >
              {isLiked2 ? "Liked" : "Like"}
            </Button>
            {/* <div className="flex ml-60 gap-1">
              <p className="font-semibold text-default-400 text-small">9.2K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div> */}
          </CardFooter>
        </Card>
      </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Card className="w-[840px] mt-5 mx-3 bg-gray-900 text-white">
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
                Started Studying at North South University
              </p>
              <span className="pt-2">
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <Button
                className={
                  isLiked ? "bg-red-400 text-white border-default-200" : ""
                }
                color="transparent"
                radius="full"
                size="sm"
                variant={isLiked ? "solid" : "bordered"}
                onPress={() => setIsLiked(!isLiked)}
              >
                {isLiked ? "Liked" : "Like"}
              </Button>
              <div className="flex ml-96 gap-1">
                <p className="font-semibold text-default-400 text-small ml-64">
                  7.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
