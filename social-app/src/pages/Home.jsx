import Navmenu from "../components/Navmenu";
import Post from '../components/Posts'
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent"


export default function Home() {

  return (
    <div className="bg-black h-[100%]">
      <Navmenu />
        <div className="flex justify-center grid-cols-3">
          <div className="hidden xl:flex">
            <LeftContent/>
          </div>
          <div>
            <p className="text-small font-semibold leading-none text-white ml-5 mt-5">Feed</p>
            <Post/>
          </div>
          <div className="hidden xl:flex">
            <RightContent/>
          </div>
          
        </div>
    </div>
  );
}
