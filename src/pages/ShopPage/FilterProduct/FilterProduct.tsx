import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

type Filter = {
  id: string;
  title: string;
  value: string;
};

type FilterProductProps = {
  items: Filter[];
  nameType: string;
};

export function FilterProduct({ items, nameType }: FilterProductProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    if (selectedValue === value) {
      setSelectedValue(null);
    } else {
      setSelectedValue(value);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="fot text-sm">{nameType}</div>
      {items.map((item) => (
        <div key={item.id} className="flex gap-2">
          <Checkbox
            id={item.id}
            checked={selectedValue === item.value}
            onCheckedChange={() => handleSelect(item.value)}
            className="peer"
          />
          <label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.title}
          </label>
        </div>
      ))}
    </div>
  );
}
