const header = new Vue({
  el: '#header',
  data: {
    heading: 'New Arrivals',
    mission: 'Lorem ipsum dolor amet pug ramps master cleanse echo park poke selfies air plant, helvetica cold-pressed tumblr VHS. Health goth meh iPhone marfa +1 fixie. Occupy before they sold out helvetica aesthetic humblebrag mlkshk single-origin coffee microdosing.',
  },
});

const navBar = new Vue({
  el: '#nav-bar',
  data: {
    leftItems: [
      { text: 'T&Cs', link: '/t&cs' },
    ],
    rightItems: [
      { text: 'Cart', link: '/cart' },
    ],
  },
});
