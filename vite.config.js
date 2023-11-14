import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

import fs from "fs";
import path from "path";

function getFile(folders) {
    let filesList = [];

    let getFiles = (dirParent) => {
        let dirList = fs.readdirSync(dirParent);

        dirList.forEach((dirChildren) => {
            let completePath = path.join(dirParent, dirChildren);
            let stat = fs.statSync(completePath);

            stat.isFile()
                ? filesList.push(completePath)
                : getFiles(completePath);
        });
    };

    folders.forEach((folder) => getFiles(folder));

    return filesList;
}

export default defineConfig({
    plugins: [
        laravel({
            input: getFile(["resources/js", "resources/scss"]),
            refresh: true,
        }),
    ],
});
