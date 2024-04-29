import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PhotoCard from '../photo-card';
import { photo } from './mocks';

describe('<PhotoCard />', () => {
  it('renders the photo', () => {
    const { getByAltText } = render(<PhotoCard photo={photo} />);

    expect(getByAltText('mountain with clouds')).toBeInTheDocument();
  });

  it('renders the photo details', () => {
    const { getByText } = render(<PhotoCard photo={photo} />);

    expect(getByText('Willian J')).toBeInTheDocument();
  });

  it('renders the photo tags', () => {
    const { getByText, getAllByRole } = render(<PhotoCard photo={photo} />);

    expect(getAllByRole('button')).toHaveLength(3);
    expect(getByText('peru')).toBeInTheDocument();
    expect(getByText('machu picchu')).toBeInTheDocument();
    expect(getByText('travel')).toBeInTheDocument();
  });
});
