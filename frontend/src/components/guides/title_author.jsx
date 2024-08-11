export default function TitleAuthor(props) {
    return(
        <div>
            <h1 className="mb-4 font-extrabold text-7xl">{props.title}</h1>
            <p className="mb-10 font-thin tracking-widest text-gray-500">{props.date} {props.author}</p>
        </div>
    )
}