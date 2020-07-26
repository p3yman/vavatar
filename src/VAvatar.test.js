import { shallowMount } from '@vue/test-utils';
import VAvatar from './VAvatar.vue';

describe('VAvatar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(VAvatar, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch('VA');
  });
});
