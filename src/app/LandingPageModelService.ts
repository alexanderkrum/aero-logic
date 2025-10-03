interface PageModel {
    interval: string;
}

export function createLandingPageModel(date: Date) {
    const pageModel: PageModel = {};
    const hours = date.getHours();

    if (hours >= 11 && hours < 17) {
        pageModel.interval = 'Easy jets';
    } else {
        pageModel.interval = 'Busy times';
    }

    return pageModel;
}
