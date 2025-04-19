export default function ModDownload({ modId }) {
    const handleDownload = () => {
        // Logic to handle the download of the mod
        console.log(`Downloading mod with ID: ${modId}`);
    };

    return (
        <button onClick={handleDownload}>
            Download Mod
        </button>
    );
}