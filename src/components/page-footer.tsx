// create page header
export default function pageFooter(props: component) {
  return (<>
    <div className={`flex justify-end items-center w-full px-4 bg-slate-400 ${props.class}`}>
      <div className="">©2023 hoshiko他家</div>
    </div>
  </>);
}