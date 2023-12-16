export default function Form({ title, image, children }) {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-xl-4 d-none d-xl-flex align-items-center">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-3 img-fluid object-fit-contain"
                    />
                </div>

                <div className="col-12 col-xl-8">
                    <h2 className="text-center my-4">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
}
