import { createStore, createEvent } from 'effector';

// Хранилище
export const $counter = createStore(0);

// Событие
export const increment = createEvent();

// Логика
$counter.on(increment, (count) => count + 1);
