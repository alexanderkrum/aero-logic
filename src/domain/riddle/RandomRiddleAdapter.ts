import { Riddle } from './RiddleService';
import { createServerAdapter } from '../../app/common/adapter/ServerAdapterFactory';

export function fetchRandomRiddle(): Promise<Pick<Riddle, 'id'>> {
    const response = fetch('http://localhost:3000/api/random-riddle');
    return response.then((res) => res.json());
}

export const useRandomRiddle = createServerAdapter({
    name: 'random-riddle-adapter',
    callback: fetchRandomRiddle,
});
