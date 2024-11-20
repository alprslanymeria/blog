export default function Share() {

    return (
        <div className="flex space-x-4 mt-4">
            <a
                href={`https://wa.me/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="lni lni-whatsapp text-2xl"></i>
            </a>

            <a
                href={`https://www.facebook.com`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="lni lni-facebook text-2xl"></i>
            </a>

            <a
                href={`https://twitter.com/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="lni lni-x text-2xl"></i>
            </a>
        </div>
    );
}
