import VideoCard from "@/components/VideoCard";
import { Appbar } from "@/components/Appbar";
import Leftbar from "@/components/Leftbar";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
 
  return (
    <div>
      <Appbar />

      <div className="flex">
        <Leftbar />
        <VideoGrid />
      </div>
    </div>
  );
}
