import React from 'react';
import BlogList from './BlogList';

export default {
  title: 'BlogList',
  component: BlogList,
};

const blogs = [
  {
    id: 1,
    title: 'Hello World!',
    createdDate: new Date(1985, 4, 1),
    content: 'test',
  },
  {
    id: 2,
    title: 'My second blog',
    createdDate: new Date(2022, 4, 1),
    content: 'test',
  },
];

export function Default() {
  return <BlogList />;
}

export function WithMultipleBlogs() {
  return <BlogList blogs={blogs} />;
}

const longContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit convallis tempor. Nunc nibh ex, vehicula id mi quis, efficitur iaculis ligula. Fusce condimentum, nunc vehicula ultrices semper, quam lorem egestas eros, non fringilla nunc nibh sed lectus. Aliquam vel nulla est. Vestibulum efficitur libero sit amet mi tempor maximus. Maecenas orci velit, varius posuere blandit at, vestibulum vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pretium nunc et dui condimentum lobortis. Maecenas posuere fringilla tortor, in elementum nisi consectetur non. Praesent turpis justo, varius ut venenatis vel, eleifend eu nisi.
<br/><br/>
Nulla maximus elit sit amet nulla suscipit, eget fringilla lorem pretium. Donec at blandit felis. Ut elementum auctor elit ut posuere. In hac habitasse platea dictumst. Vivamus non nibh neque. Sed luctus volutpat neque, eu suscipit libero accumsan eu. Quisque tempor nunc ligula, eu sollicitudin purus molestie bibendum. Duis nec felis metus.
<br/><br/>
Cras elementum maximus justo sit amet tincidunt. Mauris vel nulla imperdiet, pulvinar mauris nec, volutpat erat. Nunc et dictum metus. Morbi vehicula enim eros, sed egestas mi sagittis eget. Nullam dignissim velit non diam convallis feugiat. Aliquam maximus aliquam eros. Etiam in ultrices nunc. Vivamus ut augue metus. Aenean nec tincidunt purus, vel maximus nunc. Aenean dui arcu, vulputate eu urna sed, rhoncus consectetur dui. Ut ac turpis imperdiet, pulvinar nulla hendrerit, congue nisl.
<br/><br/>
Sed et dui dapibus urna ornare tincidunt a sit amet nulla. Etiam convallis quis ex sed ultricies. Ut suscipit viverra felis sit amet cursus. Ut facilisis diam nec scelerisque ultricies. Sed elementum enim orci. In tincidunt ornare convallis. Ut ultricies, magna in vulputate lobortis, tellus massa efficitur nisi, a tincidunt tellus odio ac metus. Fusce consequat maximus arcu. Maecenas mattis elit ac felis feugiat, ac sagittis velit bibendum. Vestibulum augue mi, dictum at ante ut, egestas aliquet risus. Donec eget dapibus eros. Vivamus convallis placerat nisi non commodo. Phasellus bibendum cursus nunc maximus feugiat. Quisque euismod mollis libero ut rhoncus.
<br/><br/>
Sed sed lorem non odio ornare congue. Aliquam at varius velit, sed vehicula dui. Etiam ut luctus ante, at venenatis lectus. Vivamus vel metus a neque sagittis commodo id scelerisque quam. Vivamus semper nunc vel neque tincidunt feugiat. Pellentesque congue purus bibendum molestie placerat. Phasellus nec convallis arcu. Donec tempor, eros vitae pharetra molestie, tortor turpis dapibus lectus, ut rhoncus justo dolor condimentum erat.`;

const longBlogs = [
  {
    id: 1,
    title: 'Hello World!',
    createdDate: new Date(1985, 4, 1),
    content: 'test',
  },
  {
    id: 2,
    title: 'My second blog',
    createdDate: new Date(2022, 4, 1),
    content: longContent,
  },
];

export function WithLongBlogs() {
  return <BlogList blogs={longBlogs} />;
}
