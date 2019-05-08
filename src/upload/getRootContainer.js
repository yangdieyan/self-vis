/***
 * this file is for get the container which class is content
 * @param container
 * @returns {*|Element|HTMLBodyElement}
 */
function getRootContainer(container) {
  const workContainer = document.querySelector('.content');
  const rootBody = document.querySelector('body');

  return container || workContainer || rootBody;
}

export default getRootContainer;
