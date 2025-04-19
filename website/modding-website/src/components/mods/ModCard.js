export default function ModCard({ mod }) {
    return (
        <div className="mod-card">
            <h3>{mod.title}</h3>
            <p>{mod.description}</p>
            <img src={mod.image} alt={mod.title} />
            <a href={mod.downloadLink} className="download-button">Download</a>
        </div>
    );
}