export default function Submit({ label }) {
    return (
        <button
            className="btn btn-primary me-2 mb-2"
            type="submit"
            aria-label={label}
        >
            {label}
        </button>
    );
}
