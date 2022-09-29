import { FC } from 'react';

const TwitterEmbed: FC = () => (
  <>
    <a
      class="twitter-timeline"
      data-lang="en"
      data-width="400"
      data-height="550"
      data-theme="dark"
      href="https://twitter.com/makeuc_io?ref_src=twsrc%5Etfw"
    >
      Tweets by makeuc_io
    </a>{' '}
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </>
);
export default TwitterEmbed;
