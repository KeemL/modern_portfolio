type ProjectPageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params }: ProjectPageProps) {
  return <div>My slug is: {params.id}</div>;
}
