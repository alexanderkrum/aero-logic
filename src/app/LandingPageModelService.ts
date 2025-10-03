export function createLandingPageModel(date: Date) {
    const hours = date.getHours();

    if (hours >= 11 && hours < 17) {
        return 'Easy jets';
    }

    return 'Busy times';
}
