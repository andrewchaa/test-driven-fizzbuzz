import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Carousel from '../Carousel'
import CarouselButton from '../CarouselButtonÌ'

describe('Carousel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Carousel />)
  })

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div')
  })

  it('has an initial `slideIndex` of 0', () => {
    expect(wrapper.state('slideIndex')).toBe(0)
  })

  it('renders a CarouselButton labeled "Prev"', () => {
    console.log(wrapper.children().debug())
    expect(wrapper.children().at(0).prop('children')).toBe('Prev')
  })

  it('renders a CarouselButton labeled "Next"', () => {
    expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next')
  })
})
