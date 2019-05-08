import getRootContainer from './getRootContainer';
import style from '../style/ItkVtkViewer.module.css';
import Mousetrap from 'mousetrap';

const MOUSETRAP = new Mousetrap();


function createfileupload(container) {
    const myContainer = getRootContainer(container);

    const fileContainer = document.createElement('div');
    fileContainer.innerHTML = `<div class="${style.bigFileDrop}"/>
    <input type="file" class="file" style="display: none;" multiple />`;
    myContainer.appendChild(fileContainer);

    const fileInput = fileContainer.querySelector('input');

    MOUSETRAP.bind('enter', (event) =>{
        fileInput.click();
    })

}

export default createfileupload;