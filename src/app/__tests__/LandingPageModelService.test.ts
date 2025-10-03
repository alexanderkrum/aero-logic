import { describe, expect, it } from 'vitest';
import { createLandingPageModel } from '../LandingPageModelService';

describe('Landing page model service', () => {
    it('returns model with busy times work interval', () => {
        const result = createLandingPageModel();

        expect(result).toBe('Busy times');
    });
});
