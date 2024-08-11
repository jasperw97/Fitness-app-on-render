export default function GuideParagraph({title, children}) {
    return(
        <div className="mt-12">
            <h1 className="mb-2 text-3xl font-bold">{title}</h1>
            <p className="text-xl font-light leading-relaxed">{children}</p>
        </div>
    )
}