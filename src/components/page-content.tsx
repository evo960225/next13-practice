
// create page header
export default function pageContent(props: container) {
  return (<>
    <div className={`w-full text-black bg-white px-6 py-4 ${props.class}`}>
      {props.children}
    </div>
  </>);
}