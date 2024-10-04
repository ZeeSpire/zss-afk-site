
interface YoutubeProps {
  videoId: string;
}

const Youtube: React.FC<YoutubeProps> = ({ videoId }) => {
  return (
    <div className="w-full max-w-full aspect-w-16 aspect-h-9 mb-4">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Youtube;