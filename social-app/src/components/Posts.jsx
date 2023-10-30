import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function Post() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isFollowed2, setIsFollowed2] = React.useState(false);
  const [isLiked2, setIsLiked2] = React.useState(false);
  const [isFollowed3, setIsFollowed3] = React.useState(false);
  const [isLiked3, setIsLiked3] = React.useState(false);
  const [isFollowed4, setIsFollowed4] = React.useState(false);
  const [isLiked4, setIsLiked4] = React.useState(false);

  return (
    <>
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
            <Button
              className={
                isFollowed ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed ? "solid" : "bordered"}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
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
            <div className="flex ml-60 gap-1">
              <p className="font-semibold text-default-400 text-small">7.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="max-w-[440px] mt-5 mx-3 bg-gray-900 text-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Sadman Sakib
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @sadman31
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed2 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed2 ? "solid" : "bordered"}
              onPress={() => setIsFollowed2(!isFollowed2)}
            >
              {isFollowed2 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardBody className="px-4 py-0 text-small text-default-400">
            <p>
              Hello everyone! I&apos;m new here!
            </p>
            <span className="pt-2">
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
      <div className="flex justify-center">
        <Card className="max-w-[440px] mt-5 mx-3 bg-gray-900 text-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Afra Nawar
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @afra_nawar
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed3 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed3 ? "solid" : "bordered"}
              onPress={() => setIsFollowed3(!isFollowed3)}
            >
              {isFollowed3 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardBody className="px-4 py-0 text-small text-default-400">
            <p>
            আমাদের এনএসইউ!
            </p>
            <span className="pt-2">
              <img src="src/assets/2-41.jpg" alt="nsu" className="rounded-md" />
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <Button
              className={
                isLiked3 ? "bg-red-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isLiked ? "solid" : "bordered"}
              onPress={() => setIsLiked3(!isLiked3)}
            >
              {isLiked3 ? "Liked" : "Like"}
            </Button>
            <div className="flex ml-60 gap-1">
              <p className="font-semibold text-default-400 text-small">4.7K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="max-w-[440px] mt-5 mx-3 bg-gray-900 text-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Zaman Chowdhury
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @zchowdhury7
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed4 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed4 ? "solid" : "bordered"}
              onPress={() => setIsFollowed4(!isFollowed4)}
            >
              {isFollowed4 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardBody className="px-4 py-0 text-small text-default-400">
            <p>
              Welcome Freshers!
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <Button
              className={
                isLiked4 ? "bg-red-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isLiked4 ? "solid" : "bordered"}
              onPress={() => setIsLiked4(!isLiked4)}
            >
              {isLiked4 ? "Liked" : "Like"}
            </Button>
            <div className="flex ml-60 gap-1">
              <p className="font-semibold text-default-400 text-small">4.9K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
