import React, { Fragment } from 'react';
export const getHighlightedText = (text: string, highlight: string[]) => {
   const parts = text.split(' ');
   const partsLowerCase = parts.map((part: string) => part.toLowerCase());
   const highlightKeys = highlight.map((keyword: string) => keyword.toLowerCase());

   const checkStringMatch = (part: string) => {
      const match = highlightKeys.find((val: string) => part.includes(val));
      return !!match;
   };
   //    const getHighlightedWordPart = (word: string) => {
   //       const wordLowerCase = word.toLowerCase();
   //       const match = highlightKeys.find((val: string) => wordLowerCase.includes(val));
   //       if (match) {
   //          const index = wordLowerCase.indexOf(match);

   //          console.log('sub1: ', word.substring(0, index));
   //          console.log('sub1: ', word.substring(index, index + match.length));
   //          console.log('sub1: ', word.substring(index + match.length));

   //          return (
   //             <>
   //                <span>{word.substring(0, index)}</span>
   //                <span>{word.substring(index, index + match.length)}</span>
   //                <span>{word.substring(index + match.length)}</span>
   //             </>
   //          );
   //       }
   //    };
   return (
      <span>
         {partsLowerCase.map((part: string, idx: number) => {
            return (
               <Fragment key={idx}>
                  <span style={checkStringMatch(part) ? { background: 'yellow' } : {}}>{parts[idx]}</span>
                  <span> </span>
               </Fragment>
            );
         })}
      </span>
   );
};
