export const renderByLine = (authorArray) => {
    let byline = ``;

        let position = 'Skytop Contributor';
        for(let i = 0; i < authorArray.length;i++){
            if(authorArray[i]["ID"] === 529 || authorArray[i]["ID"] === 543){
                position = "Guest Contributor"
            }

            if(authorArray[i+1]){
                byline += `<a href=${`/authors/${authorArray[i]["ID"]}`}>${authorArray[i].post_title}</a>, ${position}, `
            }else{
                byline += `<a href=${`/authors/${authorArray[i]["ID"]}`}>${authorArray[i].post_title}</a>, ${position}`
            }
        }
    return byline;
}

