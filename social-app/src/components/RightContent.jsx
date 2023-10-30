import React from "react";
import {
  Card,
  CardHeader,
  Button,
} from "@nextui-org/react";

function LeftContent() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [isFollowed2, setIsFollowed2] = React.useState(false);
  const [isFollowed3, setIsFollowed3] = React.useState(false);
  const [isFollowed4, setIsFollowed4] = React.useState(false);
  const [isFollowed5, setIsFollowed5] = React.useState(false);
  const [isFollowed6, setIsFollowed6] = React.useState(false);
  const [isFollowed7, setIsFollowed7] = React.useState(false);
  return (
    <div>
        <p className="text-small font-semibold leading-none text-white ml-5 mt-5">People You May Know</p>
      <div className="flex justify-center">
        <Card className="w-[440px] mt-5 mx-3 bg-gray-900 text-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Ashraf Hossain
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @ashrafh1
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
                !isFollowed2 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={!isFollowed2 ? "solid" : "bordered"}
              onPress={() => setIsFollowed2(isFollowed2)}
            >
              {!isFollowed2 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
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
                !isFollowed3 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={!isFollowed3 ? "solid" : "bordered"}
              onPress={() => setIsFollowed3(isFollowed3)}
            >
              {!isFollowed3 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
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
                !isFollowed4 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={!isFollowed4 ? "solid" : "bordered"}
              onPress={() => setIsFollowed4(isFollowed4)}
            >
              {!isFollowed4 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Mustakim Islam Alif
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @alif46
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed5 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed5 ? "solid" : "bordered"}
              onPress={() => setIsFollowed5(!isFollowed5)}
            >
              {isFollowed5 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Sadman Faruki
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @sadman356
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed6 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed6 ? "solid" : "bordered"}
              onPress={() => setIsFollowed6(!isFollowed6)}
            >
              {isFollowed6 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 ml-2 mt-2 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Muhtadee Taron
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @mtaron78
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed7 ? "bg-blue-400 text-white border-default-200" : ""
              }
              color="transparent"
              radius="full"
              size="sm"
              variant={isFollowed7 ? "solid" : "bordered"}
              onPress={() => setIsFollowed7(!isFollowed7)}
            >
              {isFollowed7 ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default LeftContent;
