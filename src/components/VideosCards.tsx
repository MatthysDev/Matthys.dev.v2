import React from 'react';

// Define the types for the video data
type VideoData = {
    id: string;
    title: string;
    author?: string;
};

type VideosProps = {
    videos: VideoData[];
};

const VideosCards: React.FC<VideosProps> = ({ videos }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {videos.map((video, index) => (
                <a key={index} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full"
                            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                            alt={video.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-black">{video.title}</div>
                            {video.author &&
                                <p className="text-gray-700 text-base">
                                    by {video.author}
                                </p>
                            }
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default VideosCards;
