
export default function LinkExternal({ link, title, text }: { link: string, title: string, text: string }) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" title={title} className="text-blue-600 underline hover:text-blue-800">{text}</a>
    );
}


