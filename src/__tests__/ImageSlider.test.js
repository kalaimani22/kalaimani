// ImageSlider.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ImageSlider, { SliderData } from '../pages/imageSlider';

describe('ImageSlider', () => {
  it('renders without crashing', () => {
    render(<ImageSlider />);
    expect(screen.getByText('prev')).toBeInTheDocument();
    expect(screen.getByText('next')).toBeInTheDocument();
  });

  it('renders the correct initial image', () => {
    render(<ImageSlider />);
    const initialImage = screen.getByAltText('travel');
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.src).toBe(SliderData[0].image);
  });

  it('displays the correct image when clicking next', () => {
    render(<ImageSlider />);
    const nextButton = screen.getByText('next');
    fireEvent.click(nextButton);
    const nextImage = screen.getByAltText('travel');
    expect(nextImage.src).toBe(SliderData[1].image);
  });

  it('displays the correct image when clicking prev', () => {
    render(<ImageSlider />);
    const prevButton = screen.getByText('prev');
    fireEvent.click(prevButton);
    const prevImage = screen.getByAltText('travel');
    expect(prevImage.src).toBe(SliderData[SliderData.length - 1].image);
  });
});

describe('SliderData', () => {
  it('is defined', () => {
    expect(SliderData).toBeDefined();
  });

  it('is an array', () => {
    expect(Array.isArray(SliderData)).toBe(true);
  });

  it('contains the expected number of elements', () => {
    // Adjust the expected number based on your actual SliderData array
    // expect(SliderData.length).toBe(5);
    expect(SliderData.length).toBeGreaterThan(0);
  });

  it('contains objects with "image" property', () => {
    SliderData.forEach((slide, index) => {
      expect(slide).toHaveProperty('image');
      expect(typeof slide.image).toBe('string');
    });
  });
});
