import { Card, CardBody } from '@heroui/card';
import { CircularProgress } from '@heroui/progress';
import React from 'react';
import { useParams } from 'react-router';

import type { SupplyChainEvent } from '@models';
import { getSupplyChainTrail } from '@services';

function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState<SupplyChainEvent[]>([]);

  React.useEffect(() => {
    if (id) {
      getSupplyChainTrail(id)
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Supply Chain Trail for Item {id}
      </h2>
      {events.length === 0 ? (
        <p>No events found for this item.</p>
      ) : (
        events.map((event) => (
          <Card key={event.id} className="mb-2">
            <CardBody>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Custodian:</strong> {event.custodian}
              </p>
              <p>
                <strong>Time:</strong>{' '}
                {new Date(event.createdAt).toLocaleString()}
              </p>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
}

export default ItemDetailPage;
