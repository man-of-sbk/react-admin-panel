/* eslint-disable react/no-array-index-key */
import React from 'react';

export const menuLinksGenerator = (menuLinksArr, Link, SubLinksContainer) => {
  const renderMenuLinks = menuLinksToRender =>
    menuLinksToRender.map(ele => {
      if (ele.subLinks) {
        return (
          <SubLinksContainer key={ele.content} {...ele}>
            {renderMenuLinks(ele.subLinks)}
          </SubLinksContainer>
        );
      }

      return <Link key={ele.content} {...ele} />;
    });

  return renderMenuLinks(menuLinksArr);
};
