function VideoCard( props: any ) {
  return (
    <div className="p-1 ">
      <img className="rounded-2xl" src={props.image} alt="" />
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 flex items-center justify-center">
          <img src={props.thumb} alt="" className="rounded-full w-10 h-10" />
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
           {props.channel}
          </div>

          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
