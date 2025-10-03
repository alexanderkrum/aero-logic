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

    it('returns model with timestamp', () => {
        const date = new Date();
        date.setFullYear(2025, 0, 16)
        date.setHours(13);
        date.setMinutes(0);

        const result = createLandingPageModel(date);

        expect(result.timestamp).toBe('2025-01-16 1300')
    });
});
