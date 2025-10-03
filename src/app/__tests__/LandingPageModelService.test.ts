import { describe, expect, it } from 'vitest';
import { createLandingPageModel } from '../LandingPageModelService';

describe('Landing page model service', () => {
    it('returns model with busy times work interval', () => {
        const date = new Date();
        date.setHours(5);

        const result = createLandingPageModel(date);

        expect(result.interval).toBe('Busy times');
    });

    it('returns model with busy times work interval', () => {
        const date = new Date();
        date.setHours(11);

        const result = createLandingPageModel(date);

        expect(result.interval).toBe('Easy jets');
    });
});
