import React from "react";
import VideoCard from "./VideoCard";

function VideoGrid() {
  const VIDEOS = [
    {
      title: "How to make a Youtube clone using Next.js and Tailwind CSS",
      image: "/griffin.png",
      thumb: "/thumb.png",
      channel: "Harkirat Singh",
      views: "46Mn",
      date: "2 days ago",
    },
    {
      title: "How to make a Youtube clone using Next.js and Tailwind CSS",
      image: "/griffin.png",
      thumb: "/thumb.png",
      channel: "Harkirat Singh",
      views: "46Mn",
      date: "2 days ago",
    },
    {
      title: "How to make a Youtube clone using Next.js and Tailwind CSS",
      image: "/griffin.png",
      thumb: "/thumb.png",
      channel: "Harkirat Singh",
      views: "46Mn",
      date: "2 days ago",
    },
    {
      title: "How to make a Youtube clone using Next.js and Tailwind CSS",
      image: "/griffin.png",
      thumb: "/thumb.png",
      channel: "Harkirat Singh",
      views: "46Mn",
      date: "2 days ago",
    },
    {
      title: "How to make a Youtube clone using Next.js and Tailwind CSS",
      image: "/griffin.png",
      thumb: "/thumb.png",
      channel: "Harkirat Singh",
      views: "46Mn",
      date: "2 days ago",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {VIDEOS.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            image={video.image}
            thumb={video.thumb}
            channel={video.channel}
            views={video.views}
            date={video.date}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
