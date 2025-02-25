import { Button } from '@heroui/button';
import { CircularProgress } from '@heroui/progress';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableColumn,
  TableCell,
} from '@heroui/table';
import { Tooltip } from '@heroui/tooltip';
import { CalendarDot, ClipboardText } from '@phosphor-icons/react';
import React from 'react';

import type { SupplyChainItem } from '@models';
import { getLastEvent } from '@services';

type ItemsTableProps = {
  items: SupplyChainItem[];
  isLoading: boolean;
};

const ItemsTable = ({ items, isLoading }: ItemsTableProps) => {
  if (isLoading) {
    return (
      <div className="flex h-20 items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  const handleFetchLastEvent = async (id: string) => {
    try {
      const lastEvent = await getLastEvent(id);
      window.alert(
        `Last Event for ${id}:\n${JSON.stringify(lastEvent, null, 2)}`
      );
    } catch (error) {
      console.error(error);
      window.alert('Error fetching last event');
    }
  };

  return (
    <Table fullWidth aria-label="Supply Chain Items">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Color</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.color || 'Unset'}</TableCell>
            <TableCell>{item.price || 'Unset'}</TableCell>
            <TableCell className="space-x-2">
              <Tooltip content="Copy Item ID">
                <Button
                  isIconOnly
                  variant="flat"
                  onPress={() => handleCopy(item.id)}
                >
                  <ClipboardText weight="fill" size={16} />
                </Button>
              </Tooltip>
              <Tooltip content="View Last Event">
                <Button
                  isIconOnly
                  variant="flat"
                  onPress={() => handleFetchLastEvent(item.id)}
                >
                  <CalendarDot weight="fill" size={16} />
                </Button>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemsTable;
