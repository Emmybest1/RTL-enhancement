import {useRef} from 'react';
import uniqid from 'uniqid';

export const useUniqueId = (count: number) => useRef([...new Array(Math.floor(count))].map(() => uniqid())).current;
