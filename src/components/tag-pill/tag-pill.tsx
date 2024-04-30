import { Link } from 'react-router-dom';

export type TagPillProps = {
  type: string;
  title: string;
};

const TagPillProps = (props: TagPillProps) => {
  const { title } = props;
  return (
    <li className="rounded-md border p-1.5 hover:bg-blue-400">
      <Link to={`/tag/${title}`}>{title}</Link>
    </li>
  );
};

export default TagPillProps;
