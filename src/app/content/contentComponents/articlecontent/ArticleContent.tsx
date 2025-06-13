import React, { FC } from 'react';
import JustTextParagraf from './JustTextParagraf';
import HalfSideParagraf from './HalfSideParagraf';

interface ArticleBlock {
  arrayTipe: 'justtextparagraf' | 'halfsideparagraf';
  articleContentText: React.ReactNode[];
  textside: 'none' | 'left' | 'right';
}

const articleContentData: ArticleBlock[] = [
  {
    arrayTipe: 'justtextparagraf',
    articleContentText: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. 
       Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus ac velit ornare lobortis. Donec posuere vulputate arcu.`,

      `Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
       Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,

      `Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
       Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.`
    ],
    textside: 'none'
  },
  {
    arrayTipe: 'halfsideparagraf',
    articleContentText: [
      `Sed nisi. Nulla quis sem at nibh elementum imperdiet.  Fusce nec tellus sed augue semper porta. 
       Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,

      <>Fusce nec tellus sed augue semper porta. <span className="font-bold">Mauris massa.</span> Vestibulum lacinia arcu eget nulla.
        Curabitur sodales ligula in libero.  Curabitur tortor. Pellentesque nibh. Aenean quam. Maecenas mattis.</>,

      `Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra. 
       Inceptos himenaeos. Curabitur sodales ligula in libero. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper.`
    ],
    textside: 'left'
  },
  {
    arrayTipe: 'halfsideparagraf',
    articleContentText: [
      `Class aptent taciti sociosqu ad litora torquent per conubia nostra. Inceptos himenaeos. Curabitur sodales ligula in libero.  
       Curabitur tortor. Pellentesque nibh. Aenean quam. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.`,

      `Curabitur sodales ligula in libero.  Curabitur tortor. Pellentesque nibh. Aenean quam. 
       Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.`,

      `Curabitur tortor.`,      `Aenean quam. Maecenas mattis. Sed convallis tristique sem.  
       Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.`
    ],
    textside: 'right'
  }
];

const ArticleContent: FC = () => {
  return (
    <div className="flex flex-col gap-12 w-full py-12">
      {articleContentData.map((block, index) => {
        if (block.arrayTipe === 'justtextparagraf') {
          return (
            <JustTextParagraf
              key={index}
              articleContentText={block.articleContentText}
            />
          );
        } else if (block.arrayTipe === 'halfsideparagraf') {
          return (
            <HalfSideParagraf
              key={index}
              textside={block.textside}
              articleContentText={block.articleContentText}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ArticleContent;
