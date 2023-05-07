

export default async function Page({ params }: { params: { slug: Array<string> } }) {
  const path = params.slug.join('/')
  const data = await (await fetch(`http://127.0.0.1:3000/api/blog/${path}`)).json()
  const { title, contentHtml } = data

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
