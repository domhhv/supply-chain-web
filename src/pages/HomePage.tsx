import { Button } from '@heroui/button';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { MagnifyingGlass } from '@phosphor-icons/react';
import React, { type ChangeEventHandler, type FormEventHandler } from 'react';

const HomePage = () => {
  const [itemName, setItemName] = React.useState('');

  const handleItemNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setItemName(e.target.value);
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (itemName.trim()) {
      window.alert(`Searching for item ${itemName}`);
    }
  };

  const handleClear = () => {
    setItemName('');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-3xl font-bold">Supply Chain Tracker</h1>
      <Form onSubmit={handleSearch} className="space-y-2">
        <Input
          isClearable
          value={itemName}
          placeholder="Enter item name"
          onChange={handleItemNameChange}
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
    </div>
  );
};

export default HomePage;
