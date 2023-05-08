

export default async function Page({ params }: { params: { slug: Array<string> } }) {
  const path = params.slug.join('/')
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${path}`)).json()
  const { title, contentHtml } = data

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
