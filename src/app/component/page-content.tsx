interface pageContent extends component {
  children: React.ReactNode
}

// create page header
export default function pageContent(props: pageContent) {
  return (<>
    <div className={`w-full text-black bg-white ${props.class}`}>
      {props.children}
    </div>
  </>);
}