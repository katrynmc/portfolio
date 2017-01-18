import React from 'react';
import Square from 'react-icons/lib/go/primitive-square';
const Filters = () => {
  return (
    <div className='sidebar'>
      <ul className='filters'>
        <li className='filter-option'><Square className='filter-bullet' />DIGITAL_MEDIA</li>
        <li className='filter-option'><Square className='filter-bullet' />DRAWING & PAINTING</li>
        <li className='filter-option'><Square className='filter-bullet' />REPEATS</li>
        <li className='filter-option'><Square className='filter-bullet' />SCULPTURE</li>
        <li className='filter-option'><Square className='filter-bullet' />TEXTILES</li>
      </ul>
    </div>
  );
};

export default Filters;
