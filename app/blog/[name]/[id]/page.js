export default async function Page({ params }) {
    const p = await params;
    return (
        <div>
            Name: {p.name} ID: {p.id}
        </div>
    );
}