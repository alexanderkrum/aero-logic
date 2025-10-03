interface PageModel {
    interval: string;
    timestamp: string;
}

function formatZeroBased(number: number) {
    if (number < 10) {
        return `0${number}`;
    }
    return number.toString();
}

export function createLandingPageModel(date: Date) {
    const pageModel: PageModel = {
        interval: '',
        timestamp: '',
    };
    const hours = date.getHours();

    if (hours >= 11 && hours < 17) {
        pageModel.interval = 'Easy jets';
    } else {
        pageModel.interval = 'Busy times';
    }

    pageModel.timestamp = `${date.getFullYear()}-${(formatZeroBased(date.getMonth()+1))}-${formatZeroBased(date.getDate())} ${formatZeroBased(date.getHours())}${formatZeroBased(date.getMinutes())}`;

    return pageModel;
}
