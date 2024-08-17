export default function GuideParagraph({title, children}) {
    return(
        <div className="mt-12">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h1>
            <p className="text-lg font-light leading-relaxed md:text-xl">{children}</p>
        </div>
    )
}