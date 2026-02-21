export default async function TutorialDetails({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];

  const [technology, topic, page_no, subject] = slug;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tutorial Details</h1>

      <p><strong>Technology:</strong> {technology}</p>
      <p><strong>Topic:</strong> {topic}</p>
      <p><strong>Page No:</strong> {page_no}</p>
      <p><strong>Subject:</strong> {subject}</p>
    </div>
  );
}