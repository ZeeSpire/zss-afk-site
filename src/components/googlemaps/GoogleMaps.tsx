
export default function GoogleMaps({ link }: { link: string }) {

    return (
        <div className="w-full aspect-w-16 aspect-h-9 mb-6">
            <iframe
                src={link}
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="w-full h-full"
                title="Google map with travel information"
            ></iframe>
        </div>
    );
}


