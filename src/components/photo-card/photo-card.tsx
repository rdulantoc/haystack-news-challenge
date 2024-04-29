import { Random } from 'unsplash-js/dist/methods/photos/types';
import { formatAuthorName } from '../../utils/formatAuthorName';
import { formatDate } from '../../utils/formatDate';
import TagPill, { TagPillProps } from '../tag-pill/tag-pill';

export type Photo = Random & { tags?: TagPillProps[] };

type PhotoCardProps = {
  photo: Photo;
};

const MAX_TAGS = 3;

const PhotoCard = ({ photo }: PhotoCardProps) => {
  const author = formatAuthorName(photo.user.first_name, photo.user.last_name);
  const createdAt = formatDate(photo.created_at);

  return (
    <li className="relative max-w-2xl">
      <img
        src={photo.urls.regular}
        alt={photo.alt_description || ''}
        className="w-full"
        width={photo.width}
        height={photo.height}
      />
      <footer className="absolute bottom-0 flex w-full flex-wrap justify-between gap-2 bg-black/35 p-2 text-white md:flex-nowrap">
        <div className="grid w-full">
          <p>
            by <b>{author}</b>
          </p>
          <p>Taken on {createdAt}</p>
        </div>
        {photo.tags?.length ? (
          <ul className="flex w-full items-center justify-end gap-2">
            {photo.tags.slice(0, MAX_TAGS).map(tag => (
              <TagPill key={tag.title} title={tag.title} type={tag.type} />
            ))}
          </ul>
        ) : null}
      </footer>
    </li>
  );
};

export default PhotoCard;
