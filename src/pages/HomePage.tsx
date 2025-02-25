import { Button } from '@heroui/button';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { MagnifyingGlass } from '@phosphor-icons/react';
import React, { type ChangeEventHandler, type FormEventHandler } from 'react';
import { useNavigate } from 'react-router';

import { ItemsTable } from '@components';
import type { SupplyChainItem } from '@models';
import { getItems } from '@services';

const HomePage = () => {
  const navigate = useNavigate();
  const [itemId, setItemId] = React.useState('');
  const [items, setItems] = React.useState<SupplyChainItem[]>([]);

  React.useEffect(() => {
    getItems().then(setItems);
  }, []);

  const handleItemIdChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setItemId(e.target.value);
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (itemId.trim()) {
      navigate(`/item/${itemId.trim()}`);
    }
  };

  const handleClear = () => {
    setItemId('');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-3xl font-bold">Supply Chain Tracker</h1>

      <Form onSubmit={handleSearch} className="mb-12 space-y-2">
        <Input
          isClearable
          value={itemId}
          placeholder="Enter Item ID"
          onChange={handleItemIdChange}
          onClear={handleClear}
        />
        <Button
          fullWidth
          color="primary"
          type="submit"
          startContent={<MagnifyingGlass size={20} />}
        >
          Search
        </Button>
      </Form>

      <h2 className="mb-4 text-xl font-semibold">All Supply Chain Items</h2>
      <ItemsTable items={items} />
    </div>
  );
};

export default HomePage;
