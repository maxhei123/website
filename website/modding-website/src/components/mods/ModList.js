export default function ModList() {
    const mods = [
        // Example mod data
        { id: 1, name: "Mod One", description: "Description for Mod One", downloadLink: "#" },
        { id: 2, name: "Mod Two", description: "Description for Mod Two", downloadLink: "#" },
        { id: 3, name: "Mod Three", description: "Description for Mod Three", downloadLink: "#" },
    ];

    return (
        <div className="mod-list">
            <h2>Available Mods</h2>
            <ul>
                {mods.map(mod => (
                    <li key={mod.id}>
                        <h3>{mod.name}</h3>
                        <p>{mod.description}</p>
                        <a href={mod.downloadLink}>Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}