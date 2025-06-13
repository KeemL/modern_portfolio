export default function Page({ params }: { params: { id: string } }) {
  return <div>My slug is: {params.id}</div>;
}
