import React from 'react';

type ItemType = {
   title: string
   value: any
}

type SelectPropsType = {
   value: any
   onChange: (value: any) => void
   item: ItemType[]
}


export const Select = (props: SelectPropsType) => {
   return (
      <div>
         <div></div>
      </div>
   );
};

