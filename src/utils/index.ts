export function handleErrorCode(code: number | undefined) {
    switch (code) {
        case 404: 
            return {
                code: 404,
                prompt: "User or Repo Not Find"
            }
        case 403:
            return {
                code: 403,
                prompt: "Too Many Requests"
            }
        default: 
            return {
                code: 500,
                prompt: "Error Happend",
            }
    }
}

export const timeString = (time: string | undefined) => {
    if(!time) return;
    const date = new Date(time);
    let month: string = "";
    switch(date.getMonth()+1) {
        case 1: month = "Jan"; break;
        case 2: month = "Feb"; break;
        case 3: month = "Mar"; break;
        case 4: month = "Apr"; break;
        case 5: month = "May"; break;
        case 6: month = "Jun"; break;
        case 7: month = "Jul"; break;
        case 8: month = "Aug"; break;
        case 9: month = "Sep"; break;
        case 10: month = "Oct"; break;
        case 11: month = "Nov"; break;
        case 12: month = "Dec"; break;
    }
    return `Update on ${date.getDate()} ${month} ${date.getFullYear()}`
}
