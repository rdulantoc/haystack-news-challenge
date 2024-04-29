export type TagPillProps = {
  type: string;
  title: string;
};

const TagPillProps = (props: TagPillProps) => {
  const { title } = props;
  return (
    <li>
      <button className="rounded-md border p-1.5 hover:bg-blue-400">{title}</button>
    </li>
  );
};

export default TagPillProps;
