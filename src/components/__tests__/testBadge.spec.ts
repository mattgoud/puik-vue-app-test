import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { PuikBadge } from '@prestashopcorp/puik-components'
import TestBadge from '../testBadge.vue'

describe('testBadge', () => {
  it('renders a Puik badge with its text', () => {
    const wrapper = mount(TestBadge, { global: { components: { PuikBadge } } })
    expect(wrapper.find('.puik-badge').exists()).toBe(true)
    expect(wrapper.text()).toContain('The text of the badge')
  })
})
