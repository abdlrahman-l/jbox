import React from 'react';
import { cn } from '@/lib/utils';

interface ListProps {
  items: string[];
  classNames?: string;
}

const AlternatingList: React.FC<ListProps> = ({ items, classNames }) => {
  return (
    <ul className={cn("list-none p-0", classNames)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn('py-5', index % 2 === 0 ? 'text-left' : 'text-right')}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AlternatingList;