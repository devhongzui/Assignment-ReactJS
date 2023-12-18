export default function ValidateMessage({ field }) {
    return (
        field && (
            <strong className="invalid-feedback" role="alert">
                {field[0]}
            </strong>
        )
    );
}
