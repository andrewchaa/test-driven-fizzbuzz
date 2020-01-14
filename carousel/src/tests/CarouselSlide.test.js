import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CarouselSlide from '../CarouselSlide'

configure( { adapter: new Adapter() })

describe('CarouselSlide', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default test image"
        />
    )
  })

  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure')
  })

  it('passes `imgUrl` through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png'
    wrapper.setProps({ imgUrl })
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(imgUrl)
  })

  it('uses `description` and `attribution` as the <figcaption>', () => {
    const description = 'A jaw-droppingly spectacular image'
    const attribution = 'Trevor Burnham'
    wrapper.setProps({ description, attribution })
    expect(wrapper.find('figcaption').text()).toBe(
      `${description}${attribution}`
    )
    expect(wrapper.find('figcaption strong').text()).toBe(description)
  })

})
