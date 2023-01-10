"use client"
import TimeAgo from "react-timeago"

type Props = {
    time: string
}

function LiveTimestapmp({time}: Props) {
  return <TimeAgo date={time} />
}

export default LiveTimestapmp