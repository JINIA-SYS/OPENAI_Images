import FileSaver from "file-saver";

import { surpriseMePrompts } from "../constants";
export function getRandomPrompt(prompt)
{
    const randomindex=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomindex];
    if(randomPrompt==prompt) return getRandomPrompt(prompt);

    return randomPrompt
}


export async function downloadImage(_id,photo)
{
FileSaver.saveAs(photo,`download-${_id}.jpg`)

}