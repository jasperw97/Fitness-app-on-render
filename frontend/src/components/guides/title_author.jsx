export default function TitleAuthor(props) {
    return(
        <div>
            <h1 className="mb-4 text-4xl font-extrabold md:text-7xl">{props.title}</h1>
            <p className="mb-10 text-sm font-thin tracking-widest text-gray-500 md:text-base">{props.date} {props.author}</p>
        </div>
    )
}