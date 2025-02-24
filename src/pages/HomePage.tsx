import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { MagnifyingGlass } from '@phosphor-icons/react';
import React from 'react';

const HomePage = () => {
  const [itemId, setItemId] = React.useState('');

  const handleSearch = () => {
    if (itemId.trim()) {
      window.alert(`Searching for item ${itemId}`);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-3xl font-bold">Supply Chain Tracker</h1>
      <div className="flex space-x-2">
        <Input
          isClearable
          placeholder="Enter Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <Button
          startContent={<MagnifyingGlass size={20} />}
          onPress={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
