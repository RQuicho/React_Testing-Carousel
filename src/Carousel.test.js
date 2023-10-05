import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it('renders without crashing', () => {
  render(<Carousel />);
});

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      pics={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('works when you click on the left arrow', () => {
  const { container } = render(
    <Carousel
      pics={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  
  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


it('hides left arrow on first image', () => {
  const { container } = render(
    <Carousel
      pics={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect first image to show
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  // expect left arrow to not be there
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();
});


it('hides right arrow on last image', () => {
  const { container } = render(
    <Carousel
      pics={TEST_IMAGES}
      title="images for testing"
    />
  );
  // move to last image in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  // expect last image to show
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
  // expect right arrow to not be there
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeInTheDocument();
});


